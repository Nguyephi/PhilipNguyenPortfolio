// const app = require('./app.js');
// const db = require('./database')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });