module.exports = (app) => {
    require('./note.routes.js')(app);
    require('./customer.routes.js')(app);
    require('./ticket.routes.js')(app);
    require('./order.routes.js')(app);
    require('./airline.routes.js')(app);
}