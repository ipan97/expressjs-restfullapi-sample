const Ticket = require("../models/ticket.model.js");

module.exports = {
    create: (req, res) => {
        let ticket = new Ticket({
            arrival: req.body.arrival,
            destination: req.body.destination,
            price: req.body.price,
            numberOfInfant: req.body.numberOfInfant,
            stock: req.body.stock,
            bought: req.body.bought,
            numberOfChild: req.body.numberOfChild,
            arrived: req.body.arrived
        });
        ticket
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the ticket."
                });
            });
    },

    findAll: (req, res) => {
        Ticket.find()
            .then(data => {
                if (!data) {
                    res.send({
                        message: `Ticket not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving the Ticket."
                });
            });
    },
    findOne: (req, res) => {
        Ticket.findById(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Ticket not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Ticket not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Error retrieving ticket with id ${req.params.id}`
                });
            });
    },
    update: (req, res) => {
        Ticket.findByIdAndUpdate(req.params.id, {
            arrival: req.body.arrival,
            destination: req.body.destination,
            price: req.body.price,
            numberOfInfant: req.body.numberOfInfant,
            stock: req.body.stock,
            bought: req.body.bought,
            numberOfChild: req.body.numberOfChild,
            arrived: req.body.arrived
        }).then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: `Ticket not found with id ${req.params.id}`
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Ticket not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Error updating Ticket with id ${req.params.id}`
            });
        });
    },
    delete: (req, res) => {
        Ticket.findOneAndDelete(req.params.id).then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Ticket not found with id ${req.params.id}`
                });
            }
            res.send({
                message: "Ticket deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Ticket not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Could not delete ticket with id ${req.params.id}`
            });
        });
    }
};