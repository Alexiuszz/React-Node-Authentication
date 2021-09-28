const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema for data object structure
const courierSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    hash: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Courier = mongoose.model('courier', courierSchema);

module.exports = Courier;