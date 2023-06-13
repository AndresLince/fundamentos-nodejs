const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/WebRoutes'));

app.use((req, res) => {
    res.status(404).render('404', { titulo: "Titulo pagina 404" });
});

app.listen(port, () => {
    console.log(`Server running at ${ port }`);
});
