const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema({
    nationalId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    gender: String,
    address: String,
    passportNumber: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Customer', NoteSchema);