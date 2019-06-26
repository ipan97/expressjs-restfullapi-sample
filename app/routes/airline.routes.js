const airlineController = require('../controllers/airline.controller.js');

module.exports = (app) => {
    app.post('/airlines', airlineController.create);
    app.get('/airlines', airlineController.findAll);
    app.get('/airlines/:id', airlineController.findOne);
    app.put('/airlines/:id', airlineController.update);
    app.delete('/airlines/:id', airlineController.delete);
};