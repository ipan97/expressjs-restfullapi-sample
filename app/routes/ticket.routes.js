const ticketController = require('../controllers/ticket.controller.js');

module.exports = (app) => {
    app.post('/tickets', ticketController.create);
    app.get('/tickets', ticketController.findAll);
    app.get('/tickets/:id', ticketController.findOne);
    app.put('/tickets/:id', ticketController.update);
    app.delete('/tickets/:id', ticketController.delete);
};