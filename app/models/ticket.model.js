const mongoose = require('mongoose');
const TicketSchema = mongoose.Schema({
    arrival: String,
    destination: String,
    price: mongoose.Schema.Types.Decimal128,
    numberOfInfant: Number
}, {
    timestamps: true
});
module.exports = mongoose.model('Ticket', TicketSchema);