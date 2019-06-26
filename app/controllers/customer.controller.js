const Customer = require("../models/customer.model.js");

module.exports = {
    create: (req, res) => {
        if (!req.body.nationalId) {
            return res.status(400).send({
                message: "Customer nationalId can not be empty"
            });
        }

        let customer = new Customer({
            nationalId: req.body.nationalId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender,
            address: req.body.address,
            passportNumber: req.body.passportNumber

        });
        customer
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Customer."
                });
            });
    },

    findAll: (req, res) => {
        Customer.find()
            .then(data => {
                if (!data) {
                    res.send({
                        message: `Customer not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving the Customer."
                });
            });
    },
    findOne: (req, res) => {
        Customer.findById(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Customer not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Customer not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Error retrieving customer with id ${req.params.id}`
                });
            });
    },
    update: (req, res) => {
        Customer.findByIdAndUpdate(req.params.id, {
            nationalId: req.body.nationalId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender,
            address: req.body.address,
            passportNumber: req.body.passportNumber
        }).then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: `Customer not found with id ${req.params.id}`
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Customer not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Error updating customer with id ${req.params.id}`
            });
        });
    },
    delete: (req, res) => {
        Customer.findOneAndDelete(req.params.id).then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Customer not found with id ${req.params.id}`
                });
            }
            res.send({
                message: "Customer deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Customer not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Could not delete customer with id ${req.params.id}`
            });
        });
    }
};