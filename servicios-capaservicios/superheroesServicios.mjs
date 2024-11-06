import superheroesRepositorio from "../repositorios-persistencia/superheroesRepositorio.mjs";

const repositorio = new superheroesRepositorio()

export function obtenerSuperheroePorId(id){
    const superheroes = repositorio.obtenerTodos()
    return superheroes.find(hero => hero.id===id)
}

export function buscarSuperheroePorAtributo(atributo, valor){
    const superheroes = repositorio.obtenerTodos()
    return superheroes.filter(hero => 
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()))
}

export function obtenerSuperheroesMayoresDe30(){
    const superheroes = repositorio.obtenerTodos()
    return superheroes.find(hero => 
        hero.edad>30 && hero.planetaOrigen==='Tierra' && hero.poder.length>=2)
}