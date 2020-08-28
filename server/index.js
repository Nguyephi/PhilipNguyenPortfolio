const app = require('./app.js');
const db = require('./database')
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });