const Ticket = require("../models/ticket.model.js");

module.exports = {
    create: (req, res) => {
        let ticket = new Ticket({
            arrival: req.body.arrival,
            destination: req.body.destination,
            price: req.body.price
        });
        ticket.save();
        res.send(ticket);
    },
    findAll: (req, res) => {
        Ticket.find().then(data => {
            res.send(data)
        });
    }
};