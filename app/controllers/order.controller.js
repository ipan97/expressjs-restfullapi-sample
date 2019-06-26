const Order = require("../models/order.model.js");

module.exports = {
    create: (req, res) => {
        if (!req.body.nationalId) {
            return res.status(400).send({
                message: "Order nationalId can not be empty"
            });
        }

        let order = new Order({
            customerId: req.body.customerId,
            orderDate: req.body.orderDate,
            orderTimestamp: req.body.orderTimestamp,
            status: req.body.status
        });
        order
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the order."
                });
            });
    },

    findAll: (req, res) => {
        Order.find()
            .then(data => {
                if (!data) {
                    res.send({
                        message: `Note not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving the Order."
                });
            });
    },
    findOne: (req, res) => {
        Order.findById(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Order not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Order not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Error retrieving Order with id ${req.params.id}`
                });
            });
    },
    update: (req, res) => {
        Order.findByIdAndUpdate(req.params.id, {
            customerId: req.body.customerId,
            orderDate: req.body.orderDate,
            orderTimestamp: req.body.orderTimestamp,
            status: req.body.status
        }).then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: `Order not found with id ${req.params.id}`
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Order not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Error updating Order with id ${req.params.id}`
            });
        });
    },
    delete: (req, res) => {
        Order.findOneAndDelete(req.params.id).then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Order not found with id ${req.params.id}`
                });
            }
            res.send({
                message: "Order deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Order not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Could not delete note with id ${req.params.id}`
            });
        });
    }
};