const mongoose = require('mongoose');
const AirlineSchema = mongoose.Schema({
    name: String,
    logo: String,
    url: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Airline', NoteSchema);