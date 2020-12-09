//RECIBIR LOS DATOS DE LA ESTATURA
//RECIBIR LOS DATOS DEL PESO
//CALCULAR EL IMC
//COMPARAR LOS VALORES DEL IMC CON LOS DE LAS TABLAS Y DAR UN RESULTADO
var estadoimc = "";
var peso =0;
var estatura=0;
var imc=0;
var imagen ="";
function mostrarResultado (estadoimc)
{
    //SI NO EXISTE EL DIV
        //CREA
    //ACTUALIZAR EL INNER

    let el_div = document.querySelector('div');
    if (el_div==null) {
        //CREAR UN NUEVO ELEMENTO
        console.log("No existe el div");
        el_div = document.createElement("div");
        var etiqueta_body = document.getElementById("cuerpo");
        etiqueta_body.appendChild(el_div);
        console.log("div creado");
    } 
    el_div.innerHTML="El estado de tu IMC es  " + estadoimc ;
    /*el_div.innerHTML=imagen + estadoimc;*/
     
    
}



function calcularImc(){
console.log("Ha introducido la estatura y el peso");
estatura = document.getElementById("estatura").value; 
console.log("el valor de la estatura es " + estatura);
peso = document.getElementById("peso").value;
console.log("el valor del peso es es " + peso);
var imc = Math.round(peso/(estatura*estatura));
var estadoimc;
console.log("el valor del IMC es " + imc);
//asignarEstado();


    if(imc<16){
        estadoimc="DESNUTRIDO";
    }else if(imc>=16 && imc<18){
        estadoimc="DELGADO";
    }else if(imc>=18 && imc<25){
        estadoimc="IDEAL";
    }else if(imc>=25 && imc<31){
        estadoimc="SOBREPESO";
    }else{
        estadoimc="OBESO";
    }
    console.log("el estado de tu IMC es: " + estadoimc);
    mostrarResultado (estadoimc);
}