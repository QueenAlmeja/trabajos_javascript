/*
Debemos declarar 4 variables empleando la palabra reservada let y asignarle valores
segun el tipo de dato que sugiera los nombres empleados y realizar operaciones y validaciones
adicionales sobre estos valores
*/


// Parte 1: Declaracion de variables
let named = "Alejandra";
let LastName = "Sanchez";
let FavoriteSong = "Could it have been us";
let age = 30;
let FavoriteNumb = 12.8;
let IsWoman = true;
let EsAdulto = false;
let NoHayNada = null;

// Part 2: Operaciones y Validaciones

// a. Operaciones matematica entre numeros

console.log("La suma de la edad de la persona y su numero favorito es: ", age + FavoriteNumb);
//la operaciones matematicas tambien se podrian almacenar en variables Ej:

let sumario = age + FavoriteNumb;
let resta = age - FavoriteNumb;
let multiplicacion = age * FavoriteNumb;
let division = age / FavoriteNumb;
let modulo = age % FavoriteNumb;

console.log("El resultado de la suma es: ", sumario);
console.log("El resultado de la resta es: ", resta);
console.log("El resultado de la multiplicacion es: ", multiplicacion);
console.log("El resultado de la division es: ", division);
console.log("El resultado del modulo es: ", modulo);

//b. Concatenando str

console.log(named + " " + LastName + " " + "tiene actualmente" + " " + age + " " + "y el nombre de su cancion favorita actual es: " + FavoriteSong  )

//c Vericacion de valores booleanos

console.log("Alejandra es una mujer?: " + IsWoman)
console.log("Alejandra se considera una persona adultas: " + EsAdulto)

//d. Implementando condiciones

if (NoHayNada === null) {
    console.log("La variables NoHayNada tiene un valor nulla: " + NoHayNada)
} else if (NoHayNada != null) {
    console.log("La variables NoHayNada si hay un valor distinto a null " + NoHayNada)
}