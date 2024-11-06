import { json } from 'body-parser'
import express from 'express'
import fs from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

//obtengo la ruta donde esta el archivo tareas
const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
const __filePath = path.join(__dirName, './tareas.txt')
const app = expres()
const port = 3005
try {
    //lee el txt en formato utf-8
    const data = fs.readFileSync(__filePath, 'utf-8')
    //convierte el archivo en un array json
    const tareas = JSON.parse(data)
    //instanciar cada tarea
    return tareas.map(tareaData => new Tarea{
        tareaData.id 
        tareaData.titulo 
        tareaData.descripcion
        tareaData.completado 
    })
} catch (error) {
    console.log.error('Error al leer el archivo de tareas:', error)
    return[]
}
