const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('entrance.hbs');
});

app.get('/category', (req, res) => {
    res.render('category.hbs');
});

app.get('/coffe', (req, res) => {
    res.render('coffe.hbs');
});

app.get('/juice', (req, res) => {
    res.render('juice.hbs');
});

app.get('/smoothie', (req, res) => {
    res.render('smoothie.hbs');
});

app.get('/tea', (req, res) => {
    res.render('tea.hbs');
});

app.get('/frappe', (req, res) => {
    res.render('frappe.hbs');
});

app.get('/dessert', (req, res) => {
    res.render('dessert.hbs');
});

app.get('/payment', (req, res) => {
    res.render('payment.hbs');
});

app.listen(3000);