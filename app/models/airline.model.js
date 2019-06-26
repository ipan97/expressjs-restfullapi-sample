const mongoose = require("mongoose");
const AirlineSchema = mongoose.Schema(
  {
    code: String,
    name: String,
    logo: String,
    url: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Airline", AirlineSchema);
