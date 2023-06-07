const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi respuesta desde express v.2')
});

app.get('/service', (req, res) => {
    res.send('Estas en la pagina de servicios')
});

app.listen(port, () => {
    console.log(`Server running at ${ port }`)
});
