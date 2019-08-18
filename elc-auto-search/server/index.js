const express = require('express')
const app = express();
const PORT = 5000;
const reload = require('reload')
const url = require('url')
const bodyParser = require("body-parser");
const fs = require('fs')
var cors = require('cors');
var helmet = require('helmet')


const compression = require('compression')

var router = require('./routes/router');


app.use(express.static('public'));
app.use(helmet())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())

app.use('/', router);


app.listen(PORT, (res)=>{
  console.log('app started');
})

reload(app, {verbose:true})