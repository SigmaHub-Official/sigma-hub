const express = require('express');
const app = express();

// Front display setup
app.set('view engine', 'pug');
app.set('views','./views');

// Load home page
app.get('/', function(req, res){
    res.render("index")
});
