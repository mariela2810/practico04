import fs from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
import superheroesDataSource from './superheroesDataSource.mjs'

const filePath = ('./superheroes.txt')
const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)
console.log(filePath)

export default class superheroesRepositorio extends superheroesDataSource{
    constructor(){
        super()
        this.filePath = path.join(dirName, './superheroes.txt')
    }
    obtenerTodos(){
        //lee el txt en formato utf-8
        const data = fs.readFileSync(filePath, 'utf-8')
        console.log(data)
        return JSON.parse(data)
    }
}

