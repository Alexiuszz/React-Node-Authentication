const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema for data object structure
const companySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    CEO: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    hash: {
        type: String
    },
    email: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Company = mongoose.model('company', companySchema);

module.exports = Company;