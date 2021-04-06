const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema for data object structure
const riderSchema = new Schema({
    vehicleType: {
        type: String,
        required: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
    },
    riderName: {
        type: String,
    },
    riderId: {
        type: String,
        required: true,
    },
    riderGender: {
        type: String
    },
    riderPhone: {
        type: Number
    },
}, { timestamps: true });

const Rider = mongoose.model('rider', riderSchema);

module.exports = Rider;