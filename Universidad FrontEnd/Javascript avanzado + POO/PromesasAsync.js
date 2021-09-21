
//Async con promesas

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una función debe regresar si o si una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//-----------------------------------------------------------------------------------------------------//

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa );
}

funcionConPromesaYAwait();


//Espera la repsuesta de la promesa