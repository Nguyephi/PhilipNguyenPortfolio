var mongoose = require('mongoose');
const Schema = require('./schema.js');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : `mongodb://${process.env.MG_HOST}/${process.env.MG_COLLECTION}`
mongoose.connect(`${MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Connected to Mongo')
});

const Email = mongoose.model('Email', Schema.emailSchema);

module.exports = {
    Email
}