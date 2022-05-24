const express = require('express')

const fs = require ('fs')

const app = express()

//si la variable es de configuracion va toda en mayus
const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`funcionando en ${PORT}`)
})

//errores con express
server.on("error", error => console.log(`error: ${error}`))

app.get('/1', (req, res) => {
  res.send ({mensaje: 'hola'})
})

//DESAFIO============================================================

const moment = require('moment')

const hoy = moment().format("DD MM YYYY hh:mm:ss")

let vistas = 1

app.get('/', (req,res)=>{
  res.send("<h1 style='color:blue;'>Bienvenidos al servidor express</h1>")
})

app.get('/visitas', (req, res) => {
  vistas+=1
  res.send (`la cantidad de visitas es ${vistas} `)
})

app.get('/fyh', (req, res)=>{
  res.send(hoy)
})

//ENTREGA===========================================================

let productos = fs.readFileSync('./productos.txt', 'utf-8')

productos = JSON.parse(productos)

app.get('/productos', (req, res)=>{
  res.send(productos)
})

app.get('/productosrandom', (req, res)=>{
  let productoRandom = productos[Math.floor(Math.random()*productos.length)]
  res.send(productoRandom)
})