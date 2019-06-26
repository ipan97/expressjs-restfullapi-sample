const ticketController = require('../controllers/ticket.controller.js');

module.exports = (app) => {
    app.post('/tickets', ticketController.create);
    app.get('/tickets', ticketController.findAll);
};