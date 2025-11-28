const CryptoJS = require('crypto-js');

const ENCRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'fallback-secure-key-2024-construction-pro-max-security';

export const encryptUrl = (url) => {
  if (!ENCRYPTION_KEY) {
    console.warn('Encryption key not found, using fallback');
    return btoa(url);
  }
  
  try {
    // Create a longer payload with more random data
    const timestamp = Date.now();
    const randomString1 = Math.random().toString(36).substring(2, 15);
    const randomString2 = Math.random().toString(36).substring(2, 15);
    const randomString3 = Math.random().toString(36).substring(2, 15);
    
    const payload = JSON.stringify({
      target: url,
      timestamp: timestamp,
      salt: process.env.REACT_APP_ENCRYPTION_SALT || 'construction-pro-salt-2024',
      random1: randomString1,
      random2: randomString2,
      random3: randomString3,
      version: '2.0',
      checksum: CryptoJS.MD5(url + timestamp).toString()
    });

    // Triple layer encryption for maximum security
    const layer1 = CryptoJS.AES.encrypt(payload, ENCRYPTION_KEY + '1').toString();
    const layer2 = CryptoJS.DES.encrypt(layer1, ENCRYPTION_KEY + '2').toString();
    const layer3 = CryptoJS.TripleDES.encrypt(layer2, ENCRYPTION_KEY + '3').toString();
    
    // Base64 encode and add prefix for longer URL
    const base64Encoded = btoa(layer3);
    
    // Make it even longer by adding more random data
    return base64Encoded + '&' + Math.random().toString(36).substring(2, 25);
    
  } catch (error) {
    console.error('Encryption error:', error);
    return btoa(url);
  }
};

export const decryptUrl = (encryptedUrl) => {
  if (!ENCRYPTION_KEY) {
    console.warn('Encryption key not found, using fallback');
    return atob(encryptedUrl);
  }
  
  try {
    // Remove the additional random data
    const base64Part = encryptedUrl.split('&')[0];
    const decoded = atob(base64Part);
    
    // Triple layer decryption
    const layer3 = CryptoJS.TripleDES.decrypt(decoded, ENCRYPTION_KEY + '3');
    const layer2 = layer3.toString(CryptoJS.enc.Utf8);
    const layer1 = CryptoJS.DES.decrypt(layer2, ENCRYPTION_KEY + '2');
    const payloadStr = layer1.toString(CryptoJS.enc.Utf8);
    const decrypted = CryptoJS.AES.decrypt(payloadStr, ENCRYPTION_KEY + '1');
    const finalResult = decrypted.toString(CryptoJS.enc.Utf8);
    
    const parsed = JSON.parse(finalResult);
    return parsed.target;
    
  } catch (error) {
    console.error('Decryption error:', error);
    return atob(encryptedUrl);
  }
};