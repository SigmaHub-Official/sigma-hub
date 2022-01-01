const express = require('express');
const http = require('http');
const app = express();
const serverless = require('serverless-http');

console.log("Index.js is running");

// Static files
app.use('/static', express.static('public'));
app.use(express.json());


// Front display setup
app.set('view engine', 'pug');
app.set('views','./views');



// Load home page
app.get('*/sigma-hub', function(req, res){
    res.render("index");
});
