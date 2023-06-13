const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo dinámico" });
});

router.get('/service', (req, res) => {
    res.render('service', { titulo: "Titulo pagina servicio" });
});

module.exports = router;