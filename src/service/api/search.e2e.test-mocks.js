'use strict';

module.exports = {
  mockData: [
    {
      "title": `Продам старый телевизор.`,
      "createdAt": `2021-08-21T21:19:10+03:00`,
      "picture": `item03.jpg`,
      "description": `Если найдёте дешевле — сброшу цену.`,
      "type": `OFFER`,
      "sum": 23881,
      "categories": [
        `Журналы`,
        `Игры`
      ],
      "comments": [
        {
          "text": `Почему в таком ужасном состоянии? Неплохо, но дорого.`,
          "createdAt": `2021-08-21T21:19:10+03:00`,
        }
      ]
    },
    {
      "title": `Куплю книги Стивена Кинга.`,
      "createdAt": `2021-08-21T21:19:10+03:00`,
      "picture": `item11.jpg`,
      "description": `Кому нужен этот новый телефон, если тут такое...`,
      "type": `SALE`,
      "sum": 63999,
      "categories": [`Животные`],
      "comments": [
        {
          "text": `Вы что?! В магазине дешевле.`,
          "createdAt": `2021-08-21T21:19:10+03:00`,
        },
        {
          "text": `А где блок питания?`,
          "createdAt": `2021-08-21T21:19:10+03:00`,
        },
        {
          "text": `Почему в таком ужасном состоянии? А где блок питания? А сколько игр в комплекте?`,
          "createdAt": `2021-08-21T21:19:10+03:00`,
        }
      ]
    }
  ],
  mockCategories: [
    `Животные`,
    `Журналы`,
    `Игры`
  ]
};
