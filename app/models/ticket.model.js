const mongoose = require('mongoose');
const TicketSchema = mongoose.Schema({
    name: String,
    arrival: String,
    destination: String,
    price: mongoose.Schema.Types.Decimal128,
    numberOfInfant: Number,
    infantPrice: mongoose.Schema.Types.Decimal128,
    stock: Number,
    bought: Number,
    numberOfChild: Number,
    arrived: Date
}, {
    timestamps: true
});
module.exports = mongoose.model('Ticket', TicketSchema);