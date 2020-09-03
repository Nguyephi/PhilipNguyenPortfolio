const express = require('express');
const bodyParser = require('body-parser');
const Models = require('./models/');
const mailjet = require('node-mailjet')
    .connect('437b0575f7a8c2c5357aba7deb08e22b', 'dad3a8d10343f38fb9cf558de8f82665');
const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/sendemail', (req, res) => {
    Models.sendEmail(req.body, (err, result) => {
        if (err) {
            res.status(400).send(err)
        }
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": result[0].email,
                            "Name": result[0].name
                        },
                        "To": [
                            {
                                "Email": "pronewgen92@gmail.com",
                                "Name": "Philip N."
                            }
                        ],
                        "Subject": result[0].title,
                        "TextPart": result[0].message,
                    }
                ]
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })
        res.status(200).send(result)
    })
})

module.exports = app;
