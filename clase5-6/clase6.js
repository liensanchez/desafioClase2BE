//==============================ADMINISTRADOR DE PAQUETES NPM


//PRIMER DESAFIO
//NUMEROS ALEATORIOS
/*
//funcion q genera nuemros
const generarNumeros = () => {

  //hacemos array donde vamos a meter los numeros
  const numeros = []

  //generamos bucle 
  for(let i=1; i<=9999; i++){
    //recupero array/ redondeamos /agregamos el resultado
    numeros.push(Math.round(Math.random()*20))
  }

  return numeros
}

//llamamos la funcions
const numeros = generarNumeros()

//inicializamos obj vacio
const numerosObj = {}

//volvemos a iterar , se puede hacer un for each
for (let i = 0 ; i<9999 ; i++){
  //obtenemos el numero q corresponde a cada indice
  const numero = numeros[i]
  //validacion, in dentro de un obj q sea igual a, cuando encuentra un numero q ya esta pasa a numerosObj
  if(!(numero in numerosObj) ){
    //lo inicializamos en 0
    numerosObj[numero] = 0
  }

  //lo aumentamos 
  numerosObj[numero]++
}

console.log(numerosObj)

//ARRAY DE OBJETOS

const productos =[
  { id:1, nombre:'Escuadra', precio:323.45 },
  { id:2, nombre:'Calculadora', precio:234.56 },
  { id:3, nombre:'Globo Terráqueo', precio:45.67 },
  { id:4, nombre:'Paleta Pintura', precio:456.78 },
  { id:5, nombre:'Reloj', precio:67.89 },
  { id:6, nombre:'Agenda', precio:78.90 }
]

*/
//ARRAY DE OBJETOS
/* */

 //==============================MOMENT
 /*
  const moment = require ('moment')

  const hoy = moment()

  const nacimiento = moment('16/12/1999', 'DD/MM/YYYY')
  
  const anios = hoy.diff(nacimiento, 'years')

  const dias = hoy.diff(nacimiento, 'days')

  console.log(`pasaron ${dias} dias`)

  console.log(`pasaron ${anios} años`)

*/

//==============================SERVIDORES WEB

//asi se crea el serv web
const http = require ('http')

const moment = require ('moment')

const hoy = moment().hour()
//recibe 2 params peticion y respuesta q podemos nombrar como queremos
const servidor = http.createServer((peticion, respuesta) =>{
    //termina la peticion y envia datos al cliente    
  const saludo = (hoy) => {
    if (hoy >= 6 ) {
      respuesta.end('Buenos dias')
      console.log('buenos dias')
    } else if ( hoy >= 17 ) {
      respuesta.end('Buenas tardes')
      console.log('buenos tardes')
    } else{
      respuesta.end('Buenas noches')
      console.log('buenos noches')
    } 
  }
  saludo()

})

//el puerto 8080 es generico luego es const nombre .listen, 
const conexionServidor = servidor.listen(8080, () =>{

  //se puede hardcodear el puerto 8080 pero se puede poner asi
  console.log(`servidor Http escuchando en el puerto ${conexionServidor.address().port}`)
})

//=====================DESAFIO 

/*const moment = require ('moment')

const hoy = moment().format('h-m')
//recibe 2 params peticion y respuesta q podemos nombrar como queremos
const servidor = http.createServer((peticion, respuesta) =>{
    //termina la peticion y envia datos al cliente    
  const saludo = (hoy) => {
    if (hoy => 6 ) {
      respuesta.end('Buenos dias')
    } else if ( hoy => 13 ) {
      respuesta.end('Buenas tardes')
    } else if (hoy => 20 ) {
      respuesta.end('Buenas noches')
    } 
  }

saludo()
}) */



