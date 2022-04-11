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
let decimal = [45.895025, 56.788789, 78.413582]

for (let i = 1; i < decimal.length; i++) {
  console.log(`El Numero ${decimal[i]} redondeado es ${Math.round(decimal[i].toFixed(2))}`);
}
