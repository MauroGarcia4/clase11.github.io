// console.log("Hola soy el mensaje del log"); Cuando entras a la pagina, aprestas en inspeccionar, vas a la parte de console y te sale lo que esté atras de las ""
// alert("Hola soy el texto del alert"); Cuando entras a la pagina sale una alerta mostrando el texto que está adentro de los ""

// var Se utiliza para crear una variable en donde se guarden cosas
// let Funciona igual que el "var"
// const Se utiliza para crear una variable constante, no se puede modificar lo que está adentro

// var edad = 50; Se utiliza para darle el valor 50 a la variable edad
// console.log(edad); Se utliza para mostrar la variable dentro de la pagina (solo para mi) (inspeccionar)

// < Menor que <= Menor o igual
// > Mayor que >= Mayor o igual

// 1. Con el condicional IF simularás una heladería.

const helado = 100;

let topping = "Oreo";
let precio;
let precioFinal;

topping = "Oreo"
if (topping == "Oreo") {
    console.log("El topping cuesta 10 dolares.")
    precio = 10;
} else if (topping == "KitKat") {
    console.log("El topping cuesta 15 dolares.")
    precio = 15;
} else if (topping == "Kinder") {
    console.log("El topping cuesta 25 dolares.")
    precio = 25;
} else {
    console.log("No tenemos este topping")
    precio = 0;
}

precioFinal = precio + helado;

console.log("El precio final es de: " + precioFinal)

// 2. Con el condicional SWITCH simularás un pedido.

let menu = "Verdura"
switch (menu) {
    case "Carne":
        console.log("Se le ofrecerá como bebida vino tinto.")
        break;
    case "Pescado":
        console.log("Se le ofrecerá como bebida un vino blanco.")
        break;
    case "Verdura":
        console.log("Se le ofrecerá como bebida un agua fresca.")
        break;
    default:
        console.log("Elija por favor un menú.")
        break;
}

// 4. Estructura con while

let numero = 0;
while (numero < 11) {
    console.log("El numero es mas chico que 11.")
    numero = numero + 1
}