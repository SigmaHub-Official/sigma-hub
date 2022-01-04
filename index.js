const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;


app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res) {
    res.render("index");
}
);


app.get("*", function(req, res) {
    res.render('404');
})

app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}`));