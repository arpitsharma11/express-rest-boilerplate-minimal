const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const routes = require('../api/routes/');
const error = require('../api/middlewares/error');

const app = express();

// Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(cors())

app.use('/api', routes);

app.use(error.notFound);

module.exports = app;