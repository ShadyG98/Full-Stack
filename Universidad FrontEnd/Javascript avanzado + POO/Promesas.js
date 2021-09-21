let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

//La promesa sirve para determinar si se encuentran errores en el codigo o s funciona bien
//El then evalua el codigo, y si es verdadero, se manda valor; si no, error como falso.


//-----------------------------------------------------------------------------------------------//


//SetTimeOut

let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000); //Esta en milisegundos, son 3 segundos
    console.log('fin promesa');
});

promesa.then(valor => console.log(valor));

//-----------------------------------------------------------------------------------------------//
