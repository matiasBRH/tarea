console.log("Tarea 1:");
let numeroRandom = Math.ceil(Math.random() * 100);
console.log(
  `La raiz cuadrada del numero aleatorio ${numeroRandom} es: ${Math.sqrt(numeroRandom)}`
);
console.log(
  `El numero aleatorio ${numeroRandom} elevado a la 5º potencia es: ${Math.pow(
    numeroRandom,
    5
  )}`
);

console.log("\nTarea 2:");
let numerosLista = [120, 250, 78, 96, -38, 45.72, 1450, 2380];
console.log(`El numero maximo de la lista es ${Math.max(...numerosLista)}`);
console.log(`El minimo numero de la lista es ${Math.min(...numerosLista)}`);

console.log("\nTarea 3:");
let decimal1 = 45.895025
let decimal2 = 56.788789
let decimal3 = 78.413582
console.log(`El Numero ${decimal1} redondeado es ${Math.round((parseFloat(decimal1.toFixed(2))))}`);
console.log(`El Numero ${decimal2} redondeado es ${Math.round((parseFloat(decimal2.toFixed(2))))}`);
console.log(`El Numero ${decimal3} redondeado es ${Math.round((parseFloat(decimal3.toFixed(2))))}`);