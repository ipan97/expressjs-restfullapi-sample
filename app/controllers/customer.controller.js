const Customer = require('../models/customer.model.js');

module.exports = {
    create: (req, res) => {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Customer content can not be empty"
            });
        }

        let customer = new Customer({
            title: req.body.title || "Untitled Note",
            content: req.body.content
        });
        note.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Customer.'
            });
        });
    },

    findAll: (req, res) => {
        Customer.find().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the Customer.'
            });
        });
    },
    findOne: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}