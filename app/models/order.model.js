const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    customerId: String,
    orderDate: Date,
    orderTimestamp: Date,
    status: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Order", orderSchema);
