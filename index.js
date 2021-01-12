const Mecab = require("mecab-async");

const mecab = new Mecab();

module.exports = {
  parse(text) {
    return new Promise((resolve, reject) => {
      mecab.parse(text, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  parseFormat(text) {
    return new Promise((resolve, reject) => {
      mecab.parseFormat(text, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  wakachi(text) {
    return new Promise((resolve, reject) => {
      mecab.wakachi(text, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};
