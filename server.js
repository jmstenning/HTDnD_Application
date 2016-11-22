// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// configuration
const db = require('./config/db');
const port = process.env.PORT || 8001;
//mongoose.connect(db);
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);
app.listen(port);

// print string to console to say that test server is running
console.log('HTDnD running on port' + port);

// expose app to user
exports = module.exports = app;
