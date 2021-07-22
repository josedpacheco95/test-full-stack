const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static");
const morgan = require('morgan');


require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true , limit: '10mb'}));
app.use(bodyParser.json({ limit: '10mb' }));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


//Middleware
app.use(morgan('dev'));
//Rutas
const router = require('./api/api')();
app.use('/api', router);



app.use(serveStatic(`${__dirname}/../dist`))

const puerto = process.env.PORT || 3000
app.listen(puerto)
console.log('corriendo')
