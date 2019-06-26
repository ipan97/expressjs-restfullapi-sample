const invoiceController = require('../controllers/invoice.controller.js');

module.exports = (app) => {
    app.post('/invoices', invoiceController.create);
    app.get('/invoices', invoiceController.findAll);
    app.get('/invoices/:id', invoiceController.findOne);
    app.put('/invoices/:id', invoiceController.update);
    app.delete('/invoices/:id', invoiceController.delete);
};