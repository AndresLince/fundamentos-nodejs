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
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    let petDb = null;
    let dbError = false;
    try {
        petDb = await pet.findOne({ _id: id });
        res.render('detail', {
            pet: petDb,
            titulo: 'Detalle de mascota'
        });
    } catch (error) {
        dbError = true;
        console.log(error);
    }
    console.log('error', dbError);
    res.render('detail', {
        pet: petDb,
        titulo: 'Detalle de mascota',
        error: dbError,
        errorMessage: 'No se encontro la mascota con ese id'
    });

});

module.exports = router;