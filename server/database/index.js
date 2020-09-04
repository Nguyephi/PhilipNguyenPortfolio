var mongoose = require('mongoose');
const Schema = require('./schema.js');
require('dotenv').config();

let MONGODB_URI = ''

if (process.NODE_ENV === 'production') {
    MONGODB_URI = process.env.MONGDOB_CLOUD
} else {
    MONGODB_URI = process.env.MONGDOB_LOCAL
}

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