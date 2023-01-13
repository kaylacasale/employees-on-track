

const express = require('express');

const app = express();
const db = require('./config/connection.js');

//* import models with prompts to then start data tables based on input
const mainMenu = require('./lib/prompt.js');

const PORT = process.env.PORT || 3001;

//* middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => { });
});

mainMenu();