import { useCallback } from 'react';
import { encryptUrl, decryptUrl } from '../utils/encryption';

export const useEncryption = () => {
  const encrypt = useCallback((data) => {
    try {
      return encryptUrl(data);
    } catch (error) {
      console.error('Encryption error:', error);
      // Fallback with long random string
      const fallback = btoa(data) + '&' + Math.random().toString(36).substring(2, 50) + '&' + Date.now();
      return fallback;
    }
  }, []);

  const decrypt = useCallback((encryptedData) => {
    try {
      return decryptUrl(encryptedData);
    } catch (error) {
      console.error('Decryption error:', error);
      // Fallback - try to extract original data
      try {
        return atob(encryptedData.split('&')[0]);
      } catch {
        return '/';
      }
    }
  }, []);

  return { encrypt, decrypt };
};