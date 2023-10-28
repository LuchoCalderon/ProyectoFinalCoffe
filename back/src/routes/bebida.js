const express = require('express');
const drinkSchema = require("../models/bebida");

const router = express.Router();


//Agregar pelicula
router.post('/bebida', (req, res) =>{
    const film = drinkSchema(req.body);
    film
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Traer todas las peliculas
router.get('/bebida', (req, res) =>{
    drinkSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

//Traer una pelicula
router.get('/bebida/:id', (req, res) =>{
    const { id } = req.params;
    drinkSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Actualizar una pelicula
router.put('/bebida/:id', (req, res) =>{
    const { id } = req.params;
    const { nombre, categoria, descripcion} = req.body;
    drinkSchema
        .updateOne({_id: id },{$set: {nombre, categoria, descripcion}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


//Borrar una pelicula
router.delete('/bebida/:id', (req, res) =>{
    const { id } = req.params;
    drinkSchema
        .remove({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});


module.exports = router;