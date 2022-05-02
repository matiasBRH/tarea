
class Producto{
  constructor(codigo,nombre,precio){
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
    
  }

  imprimeDatos() {
    console.log("########################################")
    console.log(`Codigo: ${this.codigo}`)
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Precio: ${this.precio.toFixed(2)}`)
  }
}

producto1 = new Producto("846975184526","Gaseosa Cola Pepsi 2.25 Lt",256.00)
producto2 = new Producto("884874624841","Gaseosa Coca-Cola Sabor Original 2,25 Lt",240.00)
producto3 = new Producto("811549124874","Agua Tonica Cunnington 2,25 Lt",141.00)
let arrayProductos = [producto1,producto2,producto3]
arrayProductos.forEach(producto => {
  producto.imprimeDatos()
});

