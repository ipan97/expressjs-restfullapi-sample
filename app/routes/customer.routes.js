const customerController = require('../controllers/customer.controller.js');

module.exports = (app) => {
    app.post('/customers', customerController.create);
    app.get('/customers', customerController.findAll);
    app.get('/customers/:customerId', customerController.findOne);
    app.put('/customers/:customerId', customerController.update);
    app.delete('/customers/:customerId', customerController.delete);
};