const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './public/templates/views');
const partialsPath = path.join(__dirname, './public/templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/cpp', (req, res) => {
  res.render('cpp.hbs');
});

app.get('/java', (req, res) => {
  res.render('java.hbs');
});

app.get('/sql', (req, res) => {
  res.render('sql.hbs');
});

app.get('/javascript', (req, res) => {
  res.render('javascript.hbs');
});

app.get('/php', (req, res) => {
  res.render('php.hbs');
});

app.listen(port);
