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

router.get('/create', (req, res) => {
    res.render('create',{
        titulo: 'Crear mascota'
    })
});

router.post('/', async(req, res) => {
    const body =  req.body;
    try {
        await pet.create(body);
        res.redirect('/pets');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;