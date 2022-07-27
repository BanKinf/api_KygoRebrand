const express = require('express');
const app = express();
const cors = require('cors');


// App Config
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());

//Import Routes
const scraperRoutes = require('./routes/scraper.routes');

//Routes
app.use('/api/scraper', scraperRoutes);

module.exports = app;