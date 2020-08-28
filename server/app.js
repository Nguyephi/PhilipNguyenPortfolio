const express = require('express');
const bodyParser = require('body-parser');
const Models = require('./models/')
const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/sendemail', (req, res) => {
    Models.sendEmail(req.body, (err, result) => {
        if (err) {
            res.status(400).send(err)
        }
        res.status(200).send(result)
    })
})

module.exports = app;
