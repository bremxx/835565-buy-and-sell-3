'use strict';

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }
  return someArray;
};

const getImgFileName = (num) => {
  return (
    num < 10
      ? `0${num}`
      : `${num}`
  );
};

const sendResponse = (response, statusCode, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>Mocks Generator</title>
      </head>
      <body>${message}</body>
    </html>`.trim();

  response.statusCode = statusCode;
  response.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });
  response.end(template);
};

module.exports = {
  getRandomNum,
  shuffle,
  getImgFileName,
  sendResponse,
};
