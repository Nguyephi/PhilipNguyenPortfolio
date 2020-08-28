const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
    name: String,
    email: String,
    message: String
})

module.exports = {
    emailSchema
}