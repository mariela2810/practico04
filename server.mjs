import express from 'express'
import {obtenerSuperheroePorIdControlador, buscarSuperheroePorAtributoControlador, 
        obtenerSuperheroesMayoresDe30Controlador} 
from './controladores/superheroesControlador.mjs'

const app = express()
const PORT = 3005

app.get('/superheroes/id/:id', obtenerSuperheroePorIdControlador)
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoControlador)
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controlador)

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto ${PORT}')
})