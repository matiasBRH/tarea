//Solicita un nombre, la edad y nuestra por consola el mensaje "Hola ___, tienes ___ años y el año que viene tendrás ___ años"
//Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.
function ej1() {
  let nombre = prompt("Ingresar el nombre");
  if (nombre != "") {
    let edad = parseInt(prompt("Ingresar la edad"));
    if (!isNaN(edad) && edad >= 0) {
      console.log(
        `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${
          edad + 1
        } años`
      );
    } else {
      console.log("La edad es incorrecta");
    }
  } else {
    console.log("El nombre es incorrecto");
  }
}

// Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
// de qué figura se quiere calcular el área, después solicita los datos
// que necesites para calcularlo. Utiliza switch para pedir los datos según la figura.

// triangulo = b * h/2
// rectangulo = b * h
function ej2() {
  let figura = prompt("Que figura calcular (triangulo(1) o rectanculo(2))?");
  figura.toLowerCase()
  switch (figura) {
    case "triangulo":
    case "1":
      let baseT = prompt("Ingresar la base");
      if (!isNaN(baseT) && baseT > 0) {
        let alturaT = prompt("Ingresar la altura");
        if (!isNaN(alturaT) && alturaT > 0) {
          console.log(`El area del triangulo es: ${(baseT * alturaT) / 2}`);
        } else {
          console.log("El dato es incorrecto");
        }
      } else {
        console.log("El dato es incorrecto");
      }

      break;
    case "rectangulo":
    case "2":
      let baseR = prompt("Ingresar la base");
      if (!isNaN(baseR) && baseR > 0) {
        let alturaR = prompt("Ingresar la altura");
        if (!isNaN(alturaR) && alturaR > 0) {
          console.log(`El area del rectangulo es: ${baseR * alturaR}`);
        } else {
          console.log("El dato es incorrecto");
        }
      } else {
        console.log("El dato es incorrecto");
      }

      break;

    default:
      console.log("La opcion es incorrecta");
      break;
  }
}

// Solicita un número e imprime todos los números pares e impares
// desde 1 hasta ese número con el mensaje "es par" o "es impar"
// Por ej, si el número es 5 el resultado debería ser:
// 1 - es impar
// 2 - es par
// 3 - es impar
// 4 - es par
// 5 - es impar
function ej3() {
  let numero = parseIntprompt("Ingresar un numero");
  if (!isNaN(numero) && numero >= 0) {
    for (let index = 1; index <= numero; index++) {
      if (index % 2 == 0) {
        console.log(`${index} es par`);
      } else {
        console.log(`${index} es impar`);
      }
    }
  } else{
    console.log("El numero no es correcto");
  }
  
}

// Escribe un programa que permita ir introduciendo una serie
// indeterminada de números mientras su suma no supere 50. Cuando esto
// ocurra, se debe mostrar el total acumulado y el contador de cuantos
// números se han introducido.
function ej4() {
  let suma = 0;
  let sumando = 0;
  let i = 0;
  while (suma <= 50) {
    sumando = parseFloat(prompt(`Ingresar un numero`));
    if (!isNaN(sumando)) {
      suma = suma + sumando;
      i++;
    } else {
      console.log("Dato no valido");
    }
  }
  console.log(`Total acumulado: ${suma}\nSe introdujeron ${i} numeros`);
}

// Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
// pares y el tercero impares, ambos arrays estarán vacíos [ ]

// Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
// Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
// Mostrar por consola: array de pares e impares
function ej5() {
  let numeros = [0, 0, 0, 0, 0];
  let parImpar = 0;
  let pares = [];
  let impares = [];

  // for (let numero of numeros) {
  //   numero=Math.ceil(Math.random()*100)
  //   console.log(numero)
  // }
  // console.log(numeros)

  for (let index = 0; index < numeros.length; index++) {
    numeros[index] = Math.ceil(Math.random() * 100);
    parImpar = numeros[index] * Math.ceil(Math.random() * 10);
    if (parImpar % 2 == 0) {
      pares.push(parImpar);
    } else {
      impares.push(parImpar);
    }
  }
  console.log(`${pares.length} numeros pares: ${pares}`);
  console.log(`${impares.length} numeros impares: ${impares}`); 
}

// Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

// let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

// function ordenarLenguajes() {
// //definir un nuevo arreglo
// //ordenarlos por orden alfabético
// //en mayusculas
// // en una lista ordenada
// //1-javascript
// //2-java
// }
function ej6() {
  let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"]
  // let funcionesOrdenadas = lenguajes
  // funcionesOrdenadas.sort()
  // console.log(lenguajes)

  let funcionesOrdenadas = [].concat(lenguajes).sort();
  console.log(`Lista Ordenada\n${funcionesOrdenadas}`);

  for (let lenguaje of lenguajes) {
    lenguaje=lenguaje.charAt(0).toUpperCase()+lenguaje.substring(1)
  }

  // for (let index = 0; index < lenguajes.length; index++) {
  //   lenguajes[index]=lenguajes[index].charAt(0).toUpperCase()+lenguajes[index].substring(1);
  // }
  console.log(`Lista original con mayusculas\n${lenguajes}`);
}

