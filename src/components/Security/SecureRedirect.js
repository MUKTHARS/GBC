import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { decryptUrl } from '../../utils/encryption';

const SecureRedirect = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');
        
        if (!token) {
          throw new Error('No redirect token provided');
        }

        // Decrypt the target URL/path
        const decryptedTarget = decryptUrl(token);
        
        if (!decryptedTarget) {
          throw new Error('Invalid redirect token');
        }

        setLoading(false);

        // If it's an internal path, navigate to it
        if (decryptedTarget.startsWith('/')) {
          navigate(decryptedTarget, { replace: true });
        } else {
          // If it's an external URL, redirect to it
          window.location.href = decryptedTarget;
        }
        
      } catch (err) {
        console.error('Secure redirect error:', err);
        setError(err.message);
        setLoading(false);
        
        // Fallback to home page after delay
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 3000);
      }
    };

    handleRedirect();
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Securing your connection...
        </div>
        <div style={{ color: '#666' }}>
          Redirecting you safely to your destination
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#d9534f' }}>
          Security Redirect Error
        </div>
        <div style={{ marginBottom: '1rem' }}>{error}</div>
        <div style={{ color: '#666' }}>
          Redirecting to home page...
        </div>
      </div>
    );
  }

  return null;
};

export default SecureRedirect;