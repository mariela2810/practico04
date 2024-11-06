import {obtenerSuperheroePorId, buscarSuperheroePorAtributo, 
        obtenerSuperheroesMayoresDe30} from "../servicios-capaservicios/superheroesServicios.mjs";
        
import {renderizarSuperheroe, renderizarListaSuperheroes} from "../vistas/responseVistas.mjs"

export function obtenerSuperheroePorIdControlador(req,res){
        const {id} = req.params
        console.log(id)
        const superheroe = obtenerSuperheroePorId(parseInt(id))
        console.log(superheroe)
        if (superheroe){
                console.log("encontro superheroe")
                res.send(renderizarSuperheroe(superheroe))
        } else {
                res.status(404).send({mensaje:"Superheroe no encontrado"})
        }
}

export function buscarSuperheroePorAtributoControlador(req,res){
        const {atributo,valor}=req.params
        const superheroes=buscarSuperheroePorAtributo(atributo,valor)
        if (superheroes.length >0){
                res.send(renderizarListaSuperheroes(superheroes))
        }else {
                res.status(404).send({mensaje:"No se encontraron superheroes con ese atributo"})
        }
}

export function obtenerSuperheroesMayoresDe30Controlador(req,res){
        const superheroes=obtenerSuperheroesMayoresDe30()
        res.send(renderizarListaSuperheroes(superheroes))
}