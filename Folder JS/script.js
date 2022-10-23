// Sofa vale 1000, Mesa vale 700, Television vale 650, Nevera vale 1200.
let productos = parseInt(
  prompt(
    "Elija el producto que desea comprar: 1- Sofa 2- Mesa 3- Television 4- Nevera"
  )
);
let seguirComprando = true;
let totalCompra = 0;
let decision;

  if (productos === 1) {
    totalCompra = totalCompra + 1000;
  } else if (productos === 2) {
    totalCompra = totalCompra + 700;
  } else if (productos === 3) {
    totalCompra = totalCompra + 650;
  } else if (productos === 4) {
    totalCompra = totalCompra + 1200;
  }

decision = parseInt(prompt(" Quieres seguir comprando? 1-Si 2-No"));
if (decision === 1) {
  productos = parseInt(
    prompt(
      "Elija el producto que desea comprar 1.Sofa 2.Mesa 3.Television 4.Nevera"
    )
  );
} else {
  seguirComprando = false;
}

const valorTotalConDescuento = descuento(totalCompra)
alert("El total de tu compra seria " + valorTotalConDescuento);


function descuento(valor){
  let descuento = 0
  if (valor <=1000){
    descuento = 20
  } else{
    descuento = 30
  }
  
  let totalDescuento = valor * (descuento/100)
  let valorFinal = valor - totalDescuento
  return valorFinal
}