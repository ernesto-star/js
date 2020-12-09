//RECIBIR LOS DATOS DE LA ESTATURA
//RECIBIR LOS DATOS DEL PESO
//CALCULAR EL IMC
//COMPARAR LOS VALORES DEL IMC CON LOS DE LAS TABLAS Y DAR UN RESULTADO
var estadoimc = "";


function calcularImc(){
console.log("Ha introducido la estatura y el peso");
var estatura = document.getElementById("estatura").value; 
console.log("el valor de la estatura es " + estatura);
var peso = document.getElementById("peso").value;
console.log("el valor del peso es es " + peso);
var imc = peso/(estatura*estatura);
console.log("el valor del IMC es " + imc);
asignarEstado();
}

function asignarEstado(imc){
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
    console.log("el estado de tu IMC es" + estadoimc);

}