/*
Declara dos variables con valores iniciales y luego intercambia sus valores

*/

let variable1 = 10;
let variable2 = 20;

console.log("Valor de variable1 antes de intercambio: " + variable1);
console.log("Valor de variable2 antes de intercambio: " + variable2);

// Intercambio de valores

let temporal = variable1;
variable1 = variable2;
variable2 = temporal;

console.log("Valor de variable1 después de intercambio: " + variable1); 
console.log("Valor de variable2 después de intercambio: " + variable2);

// podriamos usar operadores

console.log("Los siguientes ejercicios emplean operadores + o - para intercambia los valores de las variables iniciales");

let variable3 = 5;
let variable4 = 15;

console.log("Valor de variable1 antes de intercambio: " + variable3);
console.log("Valor de variable2 antes de intercambio: " + variable4);

variable4 = variable3;
variable3 += 30;

console.log("Valor de variable3 después de intercambio es " + variable3);
console.log("Valor de variable4 después de intercambio es " + variable4);

// aplicando el cambio s str

let word1 = "Comida";
let word2 = "Hamburguesas";
console.log("Los string iniciales de las variables son: " + word1 + " y " + word2);
console.log("Una buena " + word1 + " son las ", word2);

word1 = word2;
word2 = "Pizzas y Cervezas";

console.log("Los string después del intercambio son: " + word1 + " y " + word2);
console.log("Las " + word1 + " y las " + word2 + " son un buen plan para compartir entre amigos")