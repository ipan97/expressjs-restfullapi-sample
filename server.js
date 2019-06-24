const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

const mongoose = require('mongoose');

const dbConfig = require('./config/database.config.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({
        'message': 'Hello, World!'
    });
});

require('./app/routes')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});