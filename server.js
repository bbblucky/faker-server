const express = require('express');
const faker = require('faker');
const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.get('/', function (req, res) {
    let property = req.query.property || 'name.findName';
    var attribute = property.split('.')[0];
    var method = property.split('.')[1];
    let locale = req.query.locale || 'en_US';
    faker.locale = locale;
    let result = faker[attribute][method]();
    res.end(JSON.stringify(result, true, 2));

})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);