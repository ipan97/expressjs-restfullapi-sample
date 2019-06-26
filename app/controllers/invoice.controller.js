const Invoice = require("../models/invoice.model.js");

module.exports = {
  create: (req, res) => {
    let invoice = new Invoice({
      orderId: String,
      ticketId: String,
      numberOfChild: Number,
      numberOfInfant: String
    });
    invoice
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Invoice."
        });
      });
  },

  findAll: (req, res) => {
    Invoice.find()
      .then(data => {
        if (!data) {
          res.send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving the Invoice."
        });
      });
  },
  findOne: (req, res) => {
    Invoice.findById(req.params.id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Error retrieving invoice with id ${req.params.id}`
        });
      });
  },
  update: (req, res) => {
    Invoice.findByIdAndUpdate(req.params.id, {
      orderId: String,
      ticketId: String,
      numberOfChild: Number,
      numberOfInfant: String
    })
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        res.send(data);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Error updating invoice with id ${req.params.id}`
        });
      });
  },
  delete: (req, res) => {
    Invoice.findOneAndDelete(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        res.send({
          message: "Invoice deleted successfully!"
        });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: `Invoice not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Could not delete invoice with id ${req.params.id}`
        });
      });
  }
};
