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
            <p class="card-text ">Precio:$${torta.precio}</p>
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
        
    console.log(`La torta ${torta.nombre} ha sido agregada al carrito.`)
    carrito.push(torta)
    console.log(carrito);

    let tortaAgregada = productosEnCarrito.find((elem) => (elem.id == torta.id))
        console.log(tortaAgregada)
        console.log(productosEnCarrito);
    
        if (tortaAgregada == undefined){
            productosEnCarrito.push(torta)
            console.log(productosEnCarrito);
    //Cargar al storage
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    Swal.fire({
        title: "Ha agregado el producto",
        text: `El producto ${torta.nombre} ha sido agregado al carrito`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        confirmButtonText:"Entendido",
    })
}else{
    console.log(`El producto ${torta.nombre} ya se encuentra en el carrito`)
    Swal.fire({
                title: "Producto ya agregado",
                text: `El producto ${torta.titulo} ya se encuentra en el carrito`,
                icon: "info",
                timer:4000,
                confirmButtonText:"Aceptar",
                confirmButtonColor: 'green',
                
            })
}       
}
mostrarTortas();

function cargarProductosCarrito(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.nombre}</h4>
                    
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
    `
      
})
productosDelStorage.forEach((productoCarrito, indice)=>{
    //Capturar boton
    document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener('click', () => {
        //Cartel:
        Toastify({
            text: `${productoCarrito.nombre} ha sido eliminado`,
            duration: 2500,
            gravity: "bottom",
            position: "left",
            style:{
                background: "linear-gradient(to right, #00b09b, #96c92d)",
                color: "white", 
            }
            
            }).showToast();

            console.log(`Producto ${productoCarrito.nombre} eliminado`)
        //Eliminar del DOM
        let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
        console.log(cardProducto);
        cardProducto.remove()

        //Eliminar del array compras
        productosEnCarrito.splice(indice, 1)
        console.log(productosEnCarrito)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        cargarProductosCarrito(productosEnCarrito)
    })  

})
//Total
compraTotal(...productosDelStorage)
}

function compraTotal(...productosTotal) {
    acumulador = 0;

    acumulador = productosTotal.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    
    console.log(acumulador)
    
    acumulador > 0 ? parrafoCompra.innerHTML = `Importe de su compra es ${acumulador}`: parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
   
   
}
function finalizarCompra(){
    Swal.fire({
        title: 'Está seguro de realizar la compra',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    })
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: 'green',
            text: `Muchas gracias por su compra. `,
            footer: `<p>Nos comunicaremos con usted para su entrega</p>`
        })
        productosEnCarrito = []
        localStorage.removeItem('carrito')
        //TOTAL
        console.log(`El total de su compra es ${acumulador}`)
        
        cargarProductosCarrito(productosEnCarrito)
        }
        else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    }
    botonCarrito.addEventListener('click', () => {
        cargarProductosCarrito(productosEnCarrito)
    })
    botonFinalizarCompra.addEventListener('click',()=>{
        finalizarCompra()
    })