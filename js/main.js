class Producto {
  constructor(nombre, precio, detalle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = cantidad;
    this.disponible = true;
  }

  sumarIva() {
    return this.precio * 1.2;
  }

  Vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.2 * 1.25;
  }
}

var arrayProductos = [];
do {
  var comprobacion = prompt(
    "Ingrese un nombre del producto o fin para terminar de agregar"
  );
  if (
    comprobacion === "fin" ||
    comprobacion === "FIN" ||
    comprobacion === "Fin"
  ) {
    break;
  } else {
    nombreP = comprobacion;
    var precioP = prompt("Ingrese el precio del producto");
    var detalleP = prompt("Ingrese el detalle del producto");
    var cantidadP = prompt("Ingrese la cantidad comprada del producto");
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
  }
} while (
  comprobacion != "fin" ||
  comprobacion != "FIN" ||
  comprobacion != "Fin"
);

console.log(arrayProductos);

//document.write("<h3> El precio de costo del producto a calcular es: "+precioCostoM+"</h3>")

for (var producto of arrayProductos) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
  document.write("<li><h3> Precio: " + producto.precio + "</h3></li>");
  document.write(
    "<li><h3> Precio con IVA es: " + producto.sumarIva() + "</h3></li></ul><br>"
  );
  console.log(producto.nombre);
  console.log(producto.detalle);
  console.log(producto.cantidad);
  console.log(producto.sumarIva());
}

//POCO STOCK - MENOS DE 4 PRODUCTOS//

var pocoStock = arrayProductos.filter((producto) => producto.cantidad <= 4);
console.log("Productos con Poco stock, comprar nuevamente: ");
console.log(pocoStock);
document.write(
  "<h3> Lista de productos con poco Stock (menos de 4 unidades): </h3>"
);

for (var producto of pocoStock) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
}

//BUSCAR UN PRODUCTO ESPECIFICO POR NOMBRE INGRESADO//

var ingresado = prompt("Ingresar el producto que quiero buscar");
var prodIngresado = arrayProductos.filter((producto) =>
  producto.nombre.includes(ingresado)
);
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

for (var producto of prodIngresado) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
  document.write("<li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
}

//ORDENADOS POR CANTIDAD//

var ordenadosCantidad = []; //Declaramos el array ordenadosCantidad en una nueva posición de memoria
ordenadosCantidad = arrayProductos.map((elemento) => elemento);
ordenadosCantidad.sort(function (a, b) {
  return a.cantidad - b.cantidad;
});
console.log("Ordenados por cantidad Ascendente: ");
console.log(ordenadosCantidad);
document.write("<h3> Lista de productos ordenados por cantidad: </h3>");

for (var producto of ordenadosCantidad) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
  document.write(
    "<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>"
  );
}

//ORDENADOS POR PRECIO

var ordenadosPrecio = []; //Declaramos el array ordenadosPrecio en una nueva posición de memoria
ordenadosPrecio = arrayProductos.map((elemento) => elemento);
var ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function (a, b) {
  return a.precio - b.precio;
});
console.log("Ordenados por Precios Ascendentes");
console.log(ordenadosPrecio);
document.write(
  "<h3> Lista de Productos ordenados por Precio ascendente: </h3>"
);

for (var producto of ordenadosPrecio) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
  document.write("<li><h3> Precio " + producto.precio + "</h3></li></ul><br>");
}
