// Clase + propiedades 
class pasteleria {
    constructor(imagen,descripcion, nombre, precio){
        this.imagen = imagen,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = precio
    }
    //Metodo
    mostrarTortas(){
        console.log(`La torta ${this.nombre} tiene un precio de $${this.precio}`)
    }
}
//Objetos
const torta1 = new pasteleria("multimedia/alfacookies.jpg","Alfacookies", "descripcion", 2300)
const torta2 = new pasteleria("multimedia/brownie.jpg","MegaBrownie", "descripcion", 3600)
const torta3 = new pasteleria("multimedia/cheesecake.jpg","Cheesecake", "descripcion", 3080)
const torta4 = new pasteleria("multimedia/chocooreo.jpg","ChocoOreo", "descripcion", 2900)
const torta5 = new pasteleria("multimedia/chocotorta.jpg","Chocotorta", "descripcion", 3620)

//Array de Objetos
const carrito = [torta1,torta2,torta3,torta4,torta5]

//Plantillas

let divProductos = document.getElementsByClassName("card")
function mostrarTortas(){

    carrito.forEach((torta)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =`<div class="card " style="width: 18rem; ">
        <img src="${torta.imagen}" class="card-img-top " alt="brownie ">
        <div class="card-body ">
            <h5 class="card-title ">${torta.nombre}</h5>
            <p class="card-text ">${descripcion}</p>
            <p class="card-text ">${precio}</p>
            <div class="boton boton__position">
                <button type="button" class="custom-btn btn-2">Agregar al Carrito</button>
            </div>
        </div>
    </div>`
    divProductos.appendchild(nuevoProducto)
    })
    let btnAgregar = document.getElementsByClassName("custom-btn")
    btnAgregar.forEach((carritoBoton)=>{
        carritoBoton.addEventListener("click", ()=>{console.log (`Agregado al Carrito`)})
    })
}
/*
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
*/

