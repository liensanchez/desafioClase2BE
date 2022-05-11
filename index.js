/*funcion
function suma (a, b){
  return a + b
}*/

/* funcion como variable
const suma = function(a, b){
  return a + b
}*/


//funciones IIFE se ejecutan inmediatamente despeus de q se declara
//en la linea anterior al IIFE va ; o al comienzo ;(function)

/*;(function(nombre){
  console.log(nombre)
})('Lien')*/

/*function crearGritarNombre(nombre){
  const signos = '!!!!'
  return function (){
    console.log(`${nombre}${signos}`)
  }
}

const gritar = crearGritarNombre('Lien')

gritar()*/

//DESAFIO

//1

/*function mostrarLista(lista){
  if (lista=='') {
    console.log('lista vacia')
  }else{
    console.log(`${lista}`)
  }
}

const datosLista = mostrarLista('')

const datosEnLista = mostrarLista('LIEN')*/

//1 CORRECION
/*function mostrarLista (lista){
  if (lista.lenght !== 0){
    console.log (lista)
    return
  }

  console.log('Lista vacia')
  return
}

mostrarLista(['item1','item2'])
mostrarLista([])*/
//2
/*;(function (lista){
  if (lista.lenght == 0){
    console.log('lista vacia')
    return
  }
  console.log(lista)
  return
})

*/

console.log ('hello world')