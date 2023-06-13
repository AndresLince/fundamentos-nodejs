const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pets', {
        titulo: 'Mascotas',
        pets: [
            {id: 1, name: 'name1', description: 'description1'},
            {id: 2, name: 'name2', description: 'description2'},
            {id: 3, name: 'name3', description: 'description3'},
        ]
    })
});

module.exports = router;