const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema for data object structure
const merchantSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String
    },
    googleId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    CEO: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Merchant = mongoose.model('merchant', merchantSchema);

module.exports = Merchant;