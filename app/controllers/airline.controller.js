const Airline = require("../models/airline.model.js");

module.exports = {
    create: (req, res) => {
        let airline = new Airline({
            code: req.body.code,
            name: req.body.name,
            logo: req.body.logo,
            url: req.body.logo

        });
        airline
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Airline."
                });
            });
    },

    findAll: (req, res) => {
        Airline.find()
            .then(data => {
                if (!data) {
                    res.send({
                        message: `Airline not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving the Airline."
                });
            });
    },
    findOne: (req, res) => {
        Airline.findById(req.params.id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Airline not found with id ${req.params.id}`
                    });
                }
                res.send(data);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Airline not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Error retrieving airline with id ${req.params.id}`
                });
            });
    },
    update: (req, res) => {
        Airline.findByIdAndUpdate(req.params.id, {
            code: req.body.code,
            name: req.body.name,
            logo: req.body.logo,
            url: req.body.logo
        }).then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: `Airline not found with id ${req.params.id}`
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Airline not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Error updating airline with id ${req.params.id}`
            });
        });
    },
    delete: (req, res) => {
        Airline.findOneAndDelete(req.params.id).then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Airline not found with id ${req.params.id}`
                });
            }
            res.send({
                message: "Airline deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Airline not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Could not delete airline with id ${req.params.id}`
            });
        });
    }
};