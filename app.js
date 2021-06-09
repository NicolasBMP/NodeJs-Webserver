require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Servir contenido estatico
//Identifica el contenido publico
app.use(express.static('public'));

//De no encontrar contenido, identifica el ruteo
const data = {
    title: 'NodeJs - ExpressJs',
    name: 'Nicolás Breña'
};
app.get('/', (req, res) => {
    res.render('home', data);
});

app.get('/Generic', (req, res) => {
    res.render('generic', data);
});

app.get('/Elements', (req, res) => {
    res.render('elements', data);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
    console.log(`El webserver esta corriendo en el puerto ${port}`);
});
