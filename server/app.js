import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/components/App.jsx';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from '../client/src/utils/theme.js'
import Models from './models/';
// import mailjet from 'node-mailjet';

// mailjet.connect(process.env MJ_API, process.env.MJ_SECRET_KEY);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const sheets = new ServerStyleSheets();
    const app = ReactDOMServer.renderToString(sheets.collect(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    ));

    const indexFile = path.resolve('./client/public/index.html');
    const css = sheets.toString();
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="./main.css" />
          <style id="jss-server-side">${css}</style>
          <title>Philip Nguyen Web Portfolio</title>
          <meta charset="UTF-8">
        </head>
        
        <body>
          <div id="root">${app}</div>
          <script src="./app.js"></script>
        </body>
        
        </html>`
        )
    });
});

app.use(express.static('./client/public'));

app.post('/api/sendemail', (req, res) => {
    Models.sendEmail(req.body, (err, result) => {
        if (err) {
            res.status(400).send(err)
        }
//         const request = mailjet
//             .post("send", { 'version': 'v3.1' })
//             .request({
//                 "Messages": [
//                     {
//                         "From": {
//                             "Email": result[0].email,
//                             "Name": result[0].name
//                         },
//                         "To": [
//                             {
//                                 "Email": "pronewgen92@gmail.com",
//                                 "Name": "Philip N."
//                             }
//                         ],
//                         "Subject": result[0].title,
//                         "TextPart": result[0].message,
//                     }
//                 ]
//             })
//         request
//             .then((result) => {
//                 res.status(200).json({
//                     status: result.body.Messages[0].Status
//                 })
//             })
//             .catch((err) => {
//                 console.log(err.statusCode)
//             })
    })
})

export default app;
