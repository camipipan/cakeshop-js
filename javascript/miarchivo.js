// Clase + propiedades 
class pasteleria {
    constructor(id, imagen, nombre, precio){
        this.id =id,
        this.imagen = imagen,
        this.nombre = nombre,
        this.precio = precio
    }
    //Metodo
    mostrarTortas(){
        console.log(`La torta ${this.nombre} tiene un precio de $${this.precio}`)
    }
}
//Objetos
const torta1 = new pasteleria(1,"../multimedia/alfacookies.png","Alfacookies", 2300)
const torta2 = new pasteleria(2,"../multimedia/brownie.png","MegaBrownie", 3600)
const torta3 = new pasteleria(3,"../multimedia/cheesecake.png","Cheesecake", 3080)
const torta4 = new pasteleria(4,"../multimedia/chocooreo.png","ChocoOreo", 2900)
const torta5 = new pasteleria(5,"../multimedia/chocotorta.png","Chocotorta", 3620)
const torta6 = new pasteleria(6,"../multimedia/redvelvet.png","Red Velvet", 3220)
const torta7 = new pasteleria(7,"../multimedia/tortacookie.png","Torta AlfaCookie", 3310)
const torta8 = new pasteleria(8,"../multimedia/triplechocolate.png","Torta 100% Chocolate", 3580)


//Array de Objetos
let catalogo = []
let carrito = []


//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito")
let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")


//Evento botonCarrito
botonCarrito.addEventListener('click', () => {

    cargarProductosCarrito(carrito)
    
})

if(localStorage.getItem("catalogo")){
    //array que declaramos vacio
    catalogo = JSON.parse(localStorage.getItem("catalogo"))
    console.log(catalogo)
}else{
    console.log(`primera vez que carga catalogo`)
    catalogo.push(torta1,torta2,torta3,torta4,torta5,torta6,torta7,torta8)
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
}
console.log(catalogo)
// Iniciar Array Carrito
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    console.log(`primera vez`)
    localStorage.setItem("carrito", [])
} 


//Plantillas

function mostrarTortas(){
divProductos.innerHTML = ""
    catalogo.forEach((torta)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =`<div id="${torta.id} class="card " style="width: 18rem; ">
        <img src="${torta.imagen}" class="card-img-top " alt="${torta.nombre}">
        <div class="card-body ">
            <h5 class="card-title ">${torta.nombre}</h5>
            <p class="card-text ">${torta.precio}</p>
            <div class="boton boton__position">
                <button type="button" id="agregarBtn${torta.id}" class="custom-btn btn-2">Agregar al Carrito</button>
            </div>
        </div>
    </div>`
    divProductos.appendChild(nuevoProducto)

    let btnAgregar = document.getElementById(`agregarBtn${torta.id}`)
        console.log(btnAgregar);
        //invocar agregarAlCarrito
        btnAgregar.addEventListener("click", () =>{agregarAlCarrito(torta)})
        })
}
function agregarAlCarrito(torta){
        
    console.log(`La torta ${torta.nombre} ha sido agregado al carrito.`)
    carrito.push(torta)
    console.log(carrito);
    //Cargar al storage
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
}
mostrarTortas();

