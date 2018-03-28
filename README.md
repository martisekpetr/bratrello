# BraTrello

TODO app with customizable periodic email reminders. Based on https://github.com/sequelize/express-example 

## Starting App

**Without Migrations**

```
npm install
npm start
```

**With Migrations**

```
npm install
node_modules/.bin/sequelize db:migrate
npm start
```

## Running Tests

We have added some [Mocha](https://mochajs.org) based test. You can run them by `npm test`
