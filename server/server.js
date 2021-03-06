const express = require("express");
const path = require("path");
const items = require('./data.json');
const app = express();


app.set('view engine', 'html');
app.set('views', './');
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => res.render('index'));

app.get('/list', (req, res) => res.send(items));

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));