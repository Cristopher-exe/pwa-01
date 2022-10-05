console.log('hola mundo');
//funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    return numero + 1;
}

//Llamar la funcion.
let Resultado = fcnSumarUno (5);

//Desplegar el resultado en consola
console.log("Resultado:",Resultado)

//funcion que recibe un numero y le suma uno.
function fcnSumarUno( numero, fcnResultadoCallBack ){
    setTimeout(function(){
      //return numero + 1; 
      //fcnResultadoCallBack( numero + 1 );
    }, 800);
}

//llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //Desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});
