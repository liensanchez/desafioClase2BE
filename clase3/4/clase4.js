//llamamos a File System module
const fs = require ('fs')

//clase contenedor
class Contenedor {
  constructor(nombre){
    this.nombre = nombre
  }

  //Recibe un objeto 
  async save(item){
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    }catch(e){
      data = []
    }

    const lastItem = data [data.length -1]

    let id = 1

    if(lastItem){
      id = lastItem.id + 1
    }
    item.id = id

    //lo guarda en el archivo, devuelve el id asignado.
    data.push(item)
    return fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(data, null, 2))
  }

  //Recibe un id y devuelve el objeto con ese id
  async getById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data.find(item => item.id === id)
  }

  //Devuelve un array con los objetos presentes en el archivo.
  async getAll () {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    return data
  }

  //Elimina del archivo el objeto con el id buscado.
  async deleteById (id) {
    let data
    try {
      data = await fs.promises.readFile(`./${this.nombre}`)
      data = JSON.parse(data)
    } catch (e) {
      data = []
    }

    const productIndex = data.findIndex(item => item.id === id)

    if (productIndex === -1) {
      return
    }

    data.splice(productIndex, 1)

    return fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(data, null, 2))
  }

  //Elimina todos los objetos
  async deleteAll () {
    return fs.promises.writeFile(`./${this.nombre}`, '')
  }
 }

 module.exports = Contenedor

 //funcion IFEE
 ;(async () => {
  const contenedor = new Contenedor('productos.txt')
  const newProduct = {
    title: 'cable',
    price: 210.0,
    thumbnail: 'https://image.com'
  }

  const newProduct2 = {
    title: 'cargador',
    price: 810.0,
    thumbnail: 'https://image.com'
  }
  
  const newProduct3 = {
    title: 'pendrive',
    price: 1810.0,
    thumbnail: 'https://image.com'
  }
  
 
  await contenedor.save(newProduct)
  await contenedor.save(newProduct2)
  await contenedor.save(newProduct3)

  const product = await contenedor.getById(1)
  console.log(product)


  const products = await contenedor.getAll()
  console.log(products)

  await contenedor.deleteById(19)

  await contenedor.deleteAll()
})()




  /*//=================================================================REPASO FUNCIONES
  //funcion tradicional
  const mostrar = function (params){
    console.log(`Log ${params}`)
  }

  //nueva sintaxis que es igual
  const mostrar2 = params =>{
    console.log(`Log ${params}`)
  }
  //como usamos un solo parametro, se puede usar sin parentesis puede ser const mostrar2 =(params)=

  //como es una sola linea se puede poner sin { llaves en un solo renglon, sin utilizar la palabra RETURN XQ LO HACE AUTOMATICAMERNTE
  const mostrar3 = params => console.log(`Log ${params}`)


  //en funcion flecha se usa const y no function
  const promediar = (a,b)=>{
    //en funcion flecha se puede o no retornar, pero en el ejemplo anterior retorna automaticamente
    return (a+b)/2
  }

  console.log(promediar (10,450))

    //cuando retorna un bojeto este debe ir dentro de un parentesis porque si ponemos {} seria una funcion
  const getPersona = () => ({nombre:'Juan', edad:34})

    //es equivalente a la de arriba pero hay q poner return y se utilizan llaves{} porque es el comienzo de la funcion
  const getPersona2 = () => {
    return {nombre:'Juan', edad:34}
  }

  console.log(getPersona()) */

  /*//================================================================================CALLBACKS

    //es una funcion que se pasa como parametro
  
  const ejecutar = unaFuncion => unaFuncion()
    //const ejecutar = (unaFuncion<unaFuncion es un param>) => {
    //  return unaFuncion()
    //} 
  const saludar = () => console.log('saludos')
    //const saludar = () => {
    //  return console.log('saludos')
    //} 

    //ejecutar(saludar)

  function escribirYLoguear(texto, callbackParaLoguear) {
      // simulamos escribir en un archivo
    console.log(texto)
      // al finalizar, ejecutamos el callback
    callbackParaLoguear('archivo escrito con éxito')
    }

    escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
     const fecha = new Date().toLocaleDateString()
     console.log(`${fecha}: ${mensajeParaLoguear}`)
  })

  const operacion = (a,b,accion) =>{
    return accion (a,b)
  }

  const suma = (a,b) => a+b //esta seria la accion

  const resultado = operacion(2,4, suma) //asignamos valores a y b y asignamos accion

  console.log(resultado)

  const operacionT = (a,b,accion, callback) =>{
    return setTimeout(()=>{
      const resultado = accion (a,b)
      callback(null,resultado)
    },1000)
  }

  operacionT(2,4,suma,(error,resultado)=>{
    if (error != null){
      console.error(error)
      return
    }else{
      console.log (`el resultado es : ${resultado}`)
    }
  })

  //=========================================================================PROMISES
  //estados
    //pending
    //fulfilled
    //rejected

  function dividir (dividendo,divisor){
    return new Promise((resolve,reject) => {
      if (divisor==0){
        reject(`imposible`)
      }else{
        resolve(dividendo/divisor)
      }
    })
  }

  //pasamos parametros
  dividir(10,5)
    //si es fulfilled .then, si pusimos divisor un numero que no sea 0
  .then((resultado)=> {
    console.log(`resultado: ${resultado}`)
    return dividir(resultado, 3) //ahora a ese resultado lo divido en 3
  })
    //ahora se devuelve el 2resultado y nos evitamos el callback hell, esto es un encandenamiento
  .then((segundoResultado)=>{
    console.log(`segundo resultado ${segundoResultado}`)
  })
   //si es rejected .catch, si pusimos divisor 0
  .catch((error)=> {
    console.error(error) //o console.log(`error ${error}`)
  }

  //=======================================================================SINCRONICA VS ASINCRONICA

  const funA = () => {
    console.log(1)
    funB()
    console.log(2)
  }

  const funB = () => {
    console.log('3 - asincronico')
  }

  funA())

  const escribirArch = require ('./escribirArch.js')

  console.log('inicio del prog')

  //con callback
  //escribirArch('asincrono', (err) => {
   // if (err){
     //  console.error(err)
    //}else{
      //console.log('Funcion asincrona de 2seg no bloqueante anterior de fin prog')
    //}
  //})

  //con promise
  escribirArch('asincrono')
    
    .then(resp =>{
      console.log('Funcion asincrona no bloqueante')
    })
    .catch(er=>{
      console.error(er)
    })

    
  console.log('fin prog')*/

  //==============================================================================SETTIMEOUT/SETINTERBAL
    /*
    //declaramos funcion flecha
  const logger = () => {
    let count = 0
      //establecemos el interval
    return setInterval(() =>{
      console.log('Logueando...')
    },1000)
  }

  const interval = logger()

    //se vuelve a llamar a timeout
  setTimeout(() => {
      //retiramos el interval para que no siga al infinito
    clearInterval(interval)
    console.log('Logueado')
  }, 10000)*/

  //=================================================================================ARCHIVOS-sincronico
  /*
  const fs = require('fs')

  const data = fs.readFileSync('desafioClase2BE/archivo.txt', 'utf-8')

  console.log(data)


  //como el archivo noo esxiste, crea uno nuevo
  fs.writeFileSync('desafioClase2BE/archivo2.txt','Esto es una prubea\n')//tiene al final un \n pero podemos usar template string

  //se escribe con template string
  const contenido = `Esto es una prubea2` 

  //como el archivo existe, lo reescribe
  fs.writeFileSync('desafioClase2BE/archivo2.txt',contenido)//asi evitamos los caracteres raros

  const contenido2 = `
                      esto es el agregado` //esto se pone asi para poner el salto de linea

  //aca agregamos el contenido2
  fs.appendFileSync('desafioClase2BE/archivo2.txt', contenido2)

  //borrar archivo
  //fs.unlinkSync('desafioClase2BE/archivo2.txt')


  //errores

  //con esto no se rompe y puedo seguir trabajando
  try{
    const data2 = fs.readFileSync('desafioClase2BE/archivo4.txt', 'utf-8') //archivo inexistente
    console.log(data2)
  } catch (err){
    console.error(err.message)
  }

  //este console log se muestra aunque eeste luego de un error
  console.log('luego del error')*/

  //DESADFIO======================================================
  /*

  const fs = require('fs')

  const fecha = Date()

  fs.writeFileSync('desafioClase2BE/fyh.txt',fecha)

  try {
    const fyhLectura = fs.readFileSync('desafioClase2BE/fyh.txt', 'utf-8')
    console.log(fyhLectura)
  } catch (error) {
    console.error(error.message)
  }

  */

  //=================================================================================ARCHIVOS-Asincronico-callbacks
  /*

    //se escribe sin el sync xq es asincronico default
 const fs = require('fs')

  const contenido = `Esto es una prueba
  Segunda linea`

  const contenidoExtra = `
  ESTO ES UN AGREGADO`

  fs.readFile('./test-input-callbacks.txt', 'utf-8' , (err, data) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(data)
    fs.writeFile('./test-output-callbacks.txt', contenido, err => {
      console.log('archivo generado')
      fs.appendFile('./test-output-callbacks.txt', contenidoExtra, err => {
        console.log('archivo actualizado')
        fs.unlink('./test-output-callbacks.txt', err => {
          console.log('archivo borrado')
          fs.mkdir('./nuevacarpeta', err => {
            console.log('carpeta creada')
            fs.readdir('./', (err, nombres) => {
              console.log(nombres)
            })
          })
        })
      })
    })
  }
  })

  //funcion IFEE
  ;(async ()=>{
    const resultado = await dividir (10,2)
    console.log ('resultado')
  })
  */
  
  //=================================================================================ARCHIVOS-Asincronico-PROMISES
                                                                                    //NO ES NECESARIO ASYNC

/*

  const fs = require ('fs')

  const contenido = `Esto es una prubea promises` 

  const conetenidoExtra = `Esto es un contenido extra de 
  Promises`

  //hay q poner un objeto fs.promises
  fs.promises.readFile('desafioClase2BE/archivoPromises.txt', 'utf-8')

  //.then la data q recibimos NO ES NECESARIO ASYNC
  .then(data=>{
    console.log(data)
    //escribiendo el arch
    return fs.promises.writeFile('desafioClase2BE/archivoPromises.txt', contenido)
  })
  //variable q no vamos a utilizar
  .then((_)=>{
    return fs.promises.appendFile('desafioClase2BE/archivoPromises.txt', conetenidoExtra)
  })

  //renombrando
  .then(()=>{
    return fs.promises.rename('desafioClase2BE/archivoPromises.txt', 'desafioClase2BE/archivoPromisesNuevo.txt')
  })
  
  .catch(err=>{
    console.error(err)
  }) 
  */