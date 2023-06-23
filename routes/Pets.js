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

router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const deletedPet = await pet.findByIdAndDelete({ _id: id});
        if (deletedPet) {
            res.json({
                status: 200,
                message: 'Mascota eliminada correctamente'
            });
        } else {
            res.json({
                status: 404,
                message: 'Mascota no encontrada'
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            message: 'Error al eliminar la mascota'
        });
    }
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const petDb = pet.findByIdAndUpdate(id, body, {
            useFindAndModify: false
        });

        if (petDb) {
            return res.json({
                status: 200,
                message: 'Mascota actualizada correctamente'
            });
        }
        return res.json({
            status: 404,
            message: 'Mascota no encontrada'
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            message: 'Error al actualizar la mascota'
        });
    }
})

module.exports = router;