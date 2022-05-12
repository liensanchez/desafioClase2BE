  /*funcion
  function suma (a, b){
    return a + b
  }

  funcion como variable
  const suma = function(a, b){
    return a + b
  }


  //funciones IIFE se ejecutan inmediatamente despeus de q se declara
  //en la linea anterior al IIFE va ; o al comienzo ;(function)

  ;(function(nombre){
    console.log(nombre)
  })('Lien')

  function crearGritarNombre(nombre){
    const signos = '!!!!'
    return function (){
      console.log(`${nombre}${signos}`)
    }
  }

  const gritar = crearGritarNombre('Lien')

  gritar()

  //DESAFIO


  function mostrarLista(lista){
    if (lista=='') {
      console.log('lista vacia')
    }else{
      console.log(`${lista}`)
    }
  }

  const datosLista = mostrarLista('')

  const datosEnLista = mostrarLista('LIEN')

  //1 CORRECION
    //declaramos la funcion
  function mostrarLista (lista){
      //if lista 
    if (lista.lenght !== 0){
      console.log (lista)
      return
    }

    console.log('Lista vacia')
    return
  }

  mostrarLista(['item1','item2'])
  mostrarLista([])


2

  //creamos funcion donde vamos a asignar doble o triple
function crearMultiplicador (a){

    //que retorna una funcion anonima y recibe el numero que queremos multiplicar
  return function(b){
    return a*b
  }
}

const duplicar = crearMultiplicador (2)
const triplicar= crearMultiplicador (3)

console.log(duplicar(4))



//CONSTRUCTOR

    //la primera letra en myusculas
  class Cliente{
    constructor (nombre, edad){
      this.nombre = nombre
      this.edad = edad
    }

    static saludoCorto = 'hola'

      //funcion dentro de clase
    saludoCompleto(){
      console.log(`Buenas tardes, ${this.nombre}`)
    }

    static saludoEstatico(){
      console.log(Cliente.saludoCorto)
    }
  }

  const p = new Cliente('Pepe', 40)

  console.log(p)

    // es una funcion dentro de clase por eso se llama con ()
  p.saludoCompleto()


    //metodo estatico hay q hacer referencia a la clase
    //p.saludoEstatico NO FUNCIONA
  console.log(Cliente.saludoCorto)
  

  //DESAFIO CLASES

  class Contador{

    static cuentaGlobal = 0

    constructor (nombre){
        //instancia nombre
      this.nombre = nombre
        //instancia contar
      this.cuenta = 0
    }

    obtenerResponsable(){
      return this.name
    }

    obtenerCuentaIndividual(){
      return this.cuenta
    }

    obtenerCuentaGlobal(){
      return this.cuentaGlobal
    }

    contar(){
      this.cuenta += 1
      Contador.cuentaGlobal +=1
    }

  }*/

  class Usuario{
    constructor(nombre,apellido,libros=[],mascotas, mascotasCantidad){
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
      this.mascotasCantidad = 0
    }

    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }

    getBookNames(){
      return this.libros
    }


  }

  const a = new Usuario('Juan Manuel', 'de Rosas', [nombre='1984',autor='George Orwell'])

  console.log(a.getBookNames())
  console.log(a.getFullName())