const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo dinámico" });
});

app.get('/', (req, res) => {
    res.send('Mi respuesta desde express v.2');
});

app.get('/service', (req, res) => {
    res.render('service', { titulo: "Titulo pagina servicio" });
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server running at ${ port }`);
});
