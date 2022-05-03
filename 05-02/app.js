class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write("<b>----------Datos del Producto----------</b>");
    document.write(`<br><b>Codigo:</b> ${this.codigo}`);
    document.write(`<br><b>Nombre:</b> ${this.nombre}`);
    document.write(`<br><b>Precio:</b> ${this.precio.toFixed(2)}`);
  }
}

// producto1 = new Producto("846975184526", "Gaseosa Cola Pepsi 2.25 Lt", 256.0);
// producto2 = new Producto("884874624841", "Gaseosa Coca-Cola Sabor Original 2,25 Lt",240.0);
// producto3 = new Producto("811549124874", "Agua Tonica Cunnington 2,25 Lt", 141.0);
// let arrayProductos = [producto1, producto2, producto3];
// arrayProductos.forEach((producto) => {
//   producto.imprimeDatos();
// });

let productos=[]

function agregarProducto(){
  for (let index = 0; index < 3; index++) {
   
    let codigo=new Date().getTime()
    let nombre=prompt('Ingrese el nombre del producto')
    let precio=prompt('Ingrese el precio del producto')

    productos.push(new Producto(codigo,nombre,precio))  
    
  }

function mostrarDatos(){
  productos.forEach(function (producto){
    producto.imprimeDatos
  })
}
}

/*
3- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor(isbn, titulo, autor, numpag) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numpag = numpag;
  }
  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numpag} páginas`
    );
  }
  compararPaginas(libro) {
    if (this.numpag > libro.numpag) {
      let cantidadPaginaDif = this.numpag - libro.numpag;
      return `El libro ${this.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${libro.titulo}`;
    }
    if (this.numpag < libro.numpag) {
      let cantidadPaginaDif = libro.numpag - this.numpag;
      return `El libro ${libro.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${this.titulo}`;
    }

    return "Ambos libro tienen la misma cantidad de páginas";
  }
}

let libro1 = new Libro(
  "987-566-131-7",
  "Cómo hacer amigos",
  "Dale Carnegie",
  303
);

let libro2 = new Libro("978-987-1949-58-8", "PHP desde cero", "Users", 192);