const Model = require('../database');

module.exports.sendEmail = (emailData, cb) => {
    Model.Email.create(emailData)
        .then(data => {
            Model.Email.find(data).exec((err, result) => {
                if (err) {
                    cb(err)
                }
                cb(null, result)
            })
        })
}