// Clase + propiedades 
class pasteleria {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
    //Metodo
    mostrarTortas(){
        console.log(`La torta ${this.nombre} tiene un precio de $${this.precio}`)
    }
}
//Objetos
const torta1 = new pasteleria(1, "Lemon Pie", 2300)
const torta2 = new pasteleria(2, "Red Velvet", 3600)
const torta3 = new pasteleria(3,"MegaBrownie", 3080)
const torta4 = new pasteleria(4, "Cheesecake", 2900)
const torta5 = new pasteleria(5, "Chocotorta", 3620)

//Array de Objetos
const carrito = [torta1,torta2,torta3,torta4,torta5]
console.log(carrito)

function masTortas(){
    let nombreIngresado = prompt("Ingrese el nombre de la torta que eligió")
    let precioIngresado = parseInt(prompt("Ingrese el precio de la torta"))
    let agregar = new pasteleria(carrito.length+1,nombreIngresado,precioIngresado)
    console.log(agregar)
    carrito.push(agregar)
}

function catalogo(){
    alert("Podes ver nuestro catálogo")
    for(let torta of carrito){
        //console.log(torta.nombre +" "+ torta.precio)
        torta.mostrarTortas()
    }
}
function preguntar(){
    alert("Bienvenidos a Cake Shop")
    let opcion =parseInt(prompt(`Ingrese el numero correspondiente
    0-Salir
    1-Ver catálogo
    2-Agregar una torta`))
    menu(opcion)
}
function menu(opciones){
    switch(opciones){
        case 0:
            salir = true
            alert(`Gracias por visitar Cake Shop`)
        break
        case 1:
            catalogo()
        break
        case 2:
            masTortas()
        break
        default:
            alert(`Ingrese una opción correcta`)
    }
}

let salir
while(salir != true){
    preguntar()
}