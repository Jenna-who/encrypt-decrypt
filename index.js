// script.js

document.getElementById('encryptButton').addEventListener('click', function() {
    const algorithm = document.getElementById('encryptAlgorithm').value;
    const text = document.getElementById('encryptText').value;
    const key = document.getElementById('encryptKey').value;
    
    if (algorithm && key) {
        const encryptedText = encrypt(text, key, algorithm);
        document.getElementById('encryptedResult').textContent = encryptedText;
    } else {
        document.getElementById('encryptedResult').textContent = 'It seems you might need a key or algorithm for encryption.';
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const algorithm = document.getElementById('decryptAlgorithm').value;
    const text = document.getElementById('decryptText').value;
    const key = document.getElementById('decryptKey').value;
    
    if (algorithm && key) {
        const decryptedText = decrypt(text, key, algorithm);
        document.getElementById('decryptedResult').textContent = decryptedText;
    } else {
        document.getElementById('decryptedResult').textContent = 'It seems you might need a key or algorithm for decryption.';
    }
});

function encrypt(text, key, algorithm) {
    try {
        if (algorithm === 'aes') {
            return CryptoJS.AES.encrypt(text, key).toString();
        } else if (algorithm === 'des') {
            return CryptoJS.TripleDES.encrypt(text, key).toString();
        }
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

function decrypt(text, key, algorithm) {
    try {
        if (algorithm === 'aes') {
            return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8) || 'Invalid key or ciphertext';
        } else if (algorithm === 'des') {
            return CryptoJS.TripleDES.decrypt(text, key).toString(CryptoJS.enc.Utf8) || 'Invalid key or ciphertext';
        }
    } catch (e) {
        return 'Error: ' + e.message;
    }
}
