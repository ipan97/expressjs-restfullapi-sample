const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
  name: String,
  arrival: String,
  destination: String,
  price: mongoose.Schema.Types.Decimal128,
  numberOfInfant: Number,
  infantPrice: mongoose.Schema.Types.Decimal128,
  bought: Number,
  numberOfChild: Number,
  arrived: Date
});

const OrderSchema = mongoose.Schema(
  {
    customerId: String,
    orderDate: Date,
    orderTimestamp: Date,
    status: String,
    tickets: [TicketSchema]
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Order", OrderSchema);
