// // //Ejercicio 6 - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
let numero6_1 = parseFloat(prompt("Ingresar el primer numero:"));
if (isNaN(numero6_1)) {
  console.log("El dato ingresado no es un numero");
} else {
  let numero6_2 = parseFloat(prompt("Ingresar el segundo numero:"));
  if (isNaN(numero6_2)) {
    console.log("El dato ingresado no es un numero");
  } else {
    console.log(
      `La suma del numero ${numero6_1} y el numero ${numero6_2} es ${
        numero6_1 + numero6_2
      }`
    );
  }
}

// // //Ejercicio 7 - Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres
let numero7_1 = parseFloat(prompt("Ingresar el primer numero:"));
if (isNaN(numero7_1)) {
  console.log("El dato ingresado no es un numero");
} else {
  let numero7_2 = parseFloat(prompt("Ingresar el segundo numero:"));
  if (isNaN(numero7_2)) {
    console.log("El dato ingresado no es un numero");
  } else {
    let numero7_3 = parseFloat(prompt("Ingresar el tercer numero:"));
    if (isNaN(numero7_3)) {
      console.log("El dato ingresado no es un numero");
    } else {
      console.log(
        `El mayor numero entre ${numero7_1}, ${numero7_2} y ${numero7_3} es: ${Math.max(
          numero7_1,
          numero7_2,
          numero7_3
        )}`
      );
    }
  }
}

// // //Ejercicio 8 - Escribe un programa que pida un número y diga si es divisible por 2
let numero8 = parseFloat(prompt("Ingresar un numero entero"));
if (Number.isInteger(numero8)) {
  if (numero8 % 2 == 0) {
    console.log(`El numero ${numero8} es divisible por 2`);
  } else {
    console.log(`El numero ${numero8} no es divisible por 2`);
  }
} else {
  console.log("El numero ingresado no es un entero");
}

// //Ejercicio 9 - Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase = prompt("Ingresar una frase");

console.log(`Las vocales que aparecen en la frase ${frase} son:`);

if (frase.includes("a")) {
  console.log(" a");
}
if (frase.includes("e")) {
  console.log(" e");
}
if (frase.includes("i")) {
  console.log(" i");
}
if (frase.includes("o")) {
  console.log(" o");
}
if (frase.includes("u")) {
  console.log(" u");
}

// // Ejercicio 10 - Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
let numero10 = parseFloat(prompt("Ingresar un numero entero"));
if (Number.isInteger(numero10)) {
  if (numero10 % 2 == 0) {
    console.log(`El numero ${numero10} es divisible por 2`);
  } else if (numero10 % 3 == 0) {
    console.log(`El numero ${numero10} es divisible por 3`);
  } else if (numero10 % 5 == 0) {
    console.log(`El numero ${numero10} es divisible por 5`);
  } else if (numero10 % 7 == 0) {
    console.log(`El numero ${numero10} es divisible por 7`);
  } else {
    console.log(`El numero ${numero10} no es divisible por 3,4,5 o 7`);
  }
} else {
  console.log("El numero ingresado no es un entero");
}

//Ejercicio 11 - Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
let numero11 = parseInt(prompt("Ingresar un numero entero"));
// no funciona?
// switch (true) {
//   case numero11 % 2 == 0:
//     console.log(`El numero ${numero11} es divisible por 2`);
//     break;
//   case numero11 % 3 == 0:
//     console.log(`El numero ${numero11} es divisible por 3`);
//     break;
//   case numero11 % 5 == 0:
//     console.log(`El numero ${numero11} es divisible por 5`);
//     break;
//   case numero11 % 7 == 0:
//     console.log(`El numero ${numero11} es divisible por 7`);
//     break;
//   default:
//     break;
// }
if (Number.isInteger(numero11)) {
  if (numero11 % 2 == 0) {
    console.log(`El numero ${numero11} es divisible por 2`);
  }
  if (numero11 % 3 == 0) {
    console.log(`El numero ${numero11} es divisible por 3`);
  }
  if (numero11 % 5 == 0) {
    console.log(`El numero ${numero11} es divisible por 5`);
  }
  if (numero11 % 7 == 0) {
    console.log(`El numero ${numero11} es divisible por 7`);
  }
} else {
  console.log("El numero ingresado no es un entero");
}
