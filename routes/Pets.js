const express = require('express');
const pet = require('../models/mascota');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const pets = await pet.find();
        res.render('pets', {
            titulo: 'Mascotas',
            pets: pets
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;