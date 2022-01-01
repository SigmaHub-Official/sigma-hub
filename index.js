const express = require('express');
const app = express();
const serverless = require('serverless-http');
const router = express.Router();

console.log("Index.js is running");

// Static files
app.use('/static', express.static('public'));
app.use(express.json());


// Front display setup
app.set('view engine', 'pug');
app.set('views','./public/views');



// Load home page
app.get('/', function(req, res){
    res.render("index");
});
