const CryptoJS = require("crypto-js");
const { secretkeys } = require("../config");

const EncryptPassword = (password) => {
  let secretKey = secretkeys.cryptojs;
  let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
  return encryptedPassword;
};

const DecryptPassword = (cryptedPassword) => {
  let secretKey = secretkeys.cryptojs;
  let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
  let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  return originalPassword;
};

module.exports = {
  EncryptPassword,
  DecryptPassword,
};
