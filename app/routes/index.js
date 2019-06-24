module.exports = (app) => {
    require('./note.routes.js')(app);
    require('./customer.routes.js')(app);
}