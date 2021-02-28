const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.alphabet = Array(26).fill(null).map((_, i) => String.fromCharCode('A'.charCodeAt() + i));
  }
  encrypt(message, key) {
    return this.runCrypt(message, key, 'encrypt');
  }   
  decrypt(encryptedMessage, key) {
    return this.runCrypt(encryptedMessage, key, 'decrypt');
  }
  encryptChar(fromChar, keyChar) {
    const idx = (this.alphabet.indexOf(fromChar) + this.alphabet.indexOf(keyChar)) % 26;
    return this.alphabet[idx];
  }
  decryptChar(fromChar, keyChar) {
    const idx = (this.alphabet.indexOf(fromChar) - this.alphabet.indexOf(keyChar) + 26) % 26;
    return this.alphabet[idx];
  }
  getCryptCharMethod(method) {
    return method === 'encrypt' ? this.encryptChar : this.decryptChar;
  }
  runCrypt(message, key, method = 'encrypt') {
    if (!message) throw new Error('message is no specified');
    if (!key) throw new Error('key is no specified');
    
    const cryptChar = this.getCryptCharMethod(method).bind(this);
    let result = '';
    let j = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    if (!this.direct) message = message.split('').reverse();

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        result += cryptChar(message[i], key[j]);
        j++;
      } else {
        result += message[i];
      }

      if (j === key.length) j = 0;
    }
    
    return result;
  }
}

module.exports = VigenereCipheringMachine;
