const mongoose = require("mongoose");
const InvoiceSchema = mongoose.Schema(
  {
    orderId: String,
    numberOfChild: Number,
    numberOfInfant: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Invoice", InvoiceSchema);
