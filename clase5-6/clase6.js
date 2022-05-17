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

 