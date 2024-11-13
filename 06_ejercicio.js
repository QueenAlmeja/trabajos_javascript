/*
Declara dos variables a las que asigenes valores numericos y con ellos:
a. Verifica si ambos numeros son mayores a 10
b.Muestre los resultados en la consola usando console.log()
*/

let PrimerValor = 12;
let SegundoValor = 63;

if (PrimerValor > 10 && SegundoValor > 10) {
    console.log("Los dos valores de las variables declaradas son mayores a 10")
    console.log("El valor de la primera variable es:"+ " " + PrimerValor + " " + "y el valor de la segunda variable es: "+ " " + SegundoValor)
} else if (PrimerValor < 10 && SegundoValor < 10) {
    console.log("Los dos valores de las variables declaradas son menores o iguales a 10")
} 

// Ejercicio extra! 

console.log("Hagamos un ejercicio extra:")
console.log("Comparemos dos variables con valores iguales, pero diferentes tipos:")

let TercerValor = "10"
let CuartoValor = 10

if (TercerValor == CuartoValor) {
    console.log("Los valores de las variables declaradas son iguales")
} else if (TercerValor === CuartoValor) {
    console.log("El tipo de dato almacenado en las variables no es del mismo tipo")
}

// Que bloque de codigo se ejecutara?
