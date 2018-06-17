const NodeRSA = require('node-rsa');

// Key generation
const key = new NodeRSA({ b: 512 });
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

// Encryption
let encryptedMessage = key.encrypt('message', 'base64');
let decryptedMessage = key.decrypt(encryptedMessage, 'utf8');

// Digital signature
let digitalSignature = key.sign('message');

// Observer verify signed message with public key
let observerKey = new NodeRSA(publicKey, 'public');
let isValid = observerKey.verify('message', digitalSignature);

console.log(`Digital Signature: ${digitalSignature}`);
console.log(`Valid: ${isValid}`);