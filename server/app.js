const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Models = require('./models/');
const mailjet = require('node-mailjet')
    .connect(process.env.MJ_API, process.env.MJ_SECRET_KEY);
const app = express();

app.use(express.static('./client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

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
                res.status(200).json({
                    status: result.body.Messages[0].Status
                })
            })
            .catch((err) => {
                console.log(err.statusCode)
            })
    })
})

module.exports = app;
