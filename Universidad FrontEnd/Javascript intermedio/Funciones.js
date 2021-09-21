//Funciones

miFuncion(4, 2);

//Declaración de la función
function miFuncion(a, b){
    console.log("Suma: " + (a + b));   
}

//Llamando a la función
miFuncion(2, 3);

//Declaración de la función
function miFuncion(a, b){
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//--------------------------------------------------------------------------------------------------------//

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//--------------------------------------------------------------------------------------------------------//

//Self invoking - se llama asi misma

(function (a, b){
   console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

//--------------------------------------------------------------------------------------------------------//


//Declaración de la función
function miFuncion(a, b){
    console.log(arguments.length);   
    return a +b;
}
//Funciones como objetos
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
//--------------------------------------------------------------------------------------------------------//

//Funciones tipo flecha

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

const sumarFuncionTipoFlecha = (a, b) => a + b;  
//Esta funcion flecha es equivalente a function (a, b){return a + b};
//Function es reemplazado y a traves de la flecha, ya no necesitamos el return y colocamos los argumentos

resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

//--------------------------------------------------------------------------------------------------------//

//Parametros y argumentos

//Declaración Función de tipo Expresión
let sumar = function (a = 4, b = 5){
    console.log(arguments[0]); //Imprime un 3, que es el primer parametro
    console.log(arguments[1]); //Imprime un 6
    console.log(arguments[2]); // finalmente un 7
    return a + b + arguments[2];
};

//Si en function (a, b), lo dejamos de esta manera, no imprime el resultado de 5 + 4, pero si los definimos,
//Al imprimir resultado = sumar() -- console.log(resultado);
//Por mas que los argumentos no esten definidos,imprime 4 + 5 por default
//Pero si les añadimos parametros, resultado = sumar(3, 6, 7), entonces se reemplazan los argumentos

resultado = sumar(3, 6, 7);
console.log(resultado);

//--------------------------------------------------------------------------------------------------------//

//Suma de todos los argumentos

let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

//--------------------------------------------------------------------------------------------------------//

//Paso por valor y Paso por referencia
//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto( persona );
console.log( persona );
//--------------------------------------------------------------------------------------------------------//