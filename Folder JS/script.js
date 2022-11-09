let productos = parseInt(
  prompt(
    "Elija el producto que desea comprar: 1- Tabla 2- Ruedas 3- Trucks 4- Rodamientos"
  )
);
let seguirComprando = true;
let totalCompra = 0;
let decision;

//Arreglo de productos
const arrayProducts = [];

// Clase
class NewProduct {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
const tabla = new NewProduct(1, "Tabla", 450, 50);
arrayProducts.push(tabla);
const ruedas = new NewProduct(2, "Ruedas", 150, 25);
arrayProducts.push(ruedas);
const trucks = new NewProduct(3, "Trucks", 300, 30);
arrayProducts.push(trucks);
const rodamientos = new NewProduct(4, "Rodamientos", 80, 100);
arrayProducts.push(rodamientos);

// Array carrito
const carrito = [];

if (seguirComprando === true){
  const product = arrayProducts.find((prod) => prod.id === productos);
  if (product) {
    carrito.push(product);
  }
}

decision = parseInt(prompt(" Quieres seguir comprando? 1-Si 2-No"));
if (decision === 1) {
  productos = parseInt(
    prompt(
      "Elija el producto que desea comprar: 1- Tabla 2- Ruedas 3- Trucks 4- Rodamientos"
    )
  );
} else {
  seguirComprando = false;
}

carrito.forEach((prod) => {
  totalCompra = totalCompra + prod.price;
});

alert('El total de tu compra es ' + totalCompra)

