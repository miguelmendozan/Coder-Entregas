// clase de productos
class Productos {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}
const producto1 = new Productos(1, "Tabla", 270, "./assets/skate-inicial.jpg");
const producto2 = new Productos(2, "Ruedas", 80, "./assets/ruedas-skate.jpg");
const producto3 = new Productos(3, "Trucks", 250, "./assets/trucks.jpg");
const producto4 = new Productos(
  4,
  "Rodamientos",
  50,
  "./assets/Rodamientos.jpg"
);
const producto5 = new Productos(5, "Zapatos", 300, "./assets/shoes.jpg");
const producto6 = new Productos(6, "Camisa", 150, "./assets/Shirt.jpeg");
const producto7 = new Productos(7, "Gorra", 90, "./assets/gorra.jpg");
const producto8 = new Productos(8, "Chaleco", 200, "./assets/chaleco.jpg");
const producto9 = new Productos(
  9,
  "Tabla completa",
  450,
  "./assets/full-skate.jpg"
);
const producto10 = new Productos(
  10,
  "Buso",
  150,
  "./assets/buso-independent.jpg"
);

//creando arreglo productos
const productosArray = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
];
//buscar elementos del DOM

const divProductos = document.querySelector("#divProductos");
const divTotal = document.querySelector("#divTotal");

productosArray.forEach((producto) => {
  divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProducto">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <img src="${producto.imagen}" alt="Skate" class="img-fluid">
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}" type="button" class="btn btn-warning">Agregar</button>
    </div>
    </div>
    `;
});

//carrito de compra
const carrito = [];
const botonesAgregar = document.querySelectorAll(".btn-warning");

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );
    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };
    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);
    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    guardarCarritoLocalStorage();
  };
});

const botonFinalizar = document.querySelector("#finalizar");
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);

  swal(
    "Gracias por tu compra!",
    "El total de tu compra es " + totalCompra,
    "success"
  );
};

function guardarCarritoLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
