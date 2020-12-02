
/*edad = window.prompt("Dime tu edad: ");

if (edad < 18) {window.alert("Eres menor de edad");
}else{
    window.alert("Eres mayor de edad");
var edad=0;

}*/




const MAYORIA_DE_EDAD= 18;
function informarMayorEdad()
{console.log("ha tocado el botón");

// recoger el valor de la caja de texto, la edad

var caja_edad = document.getElementById("edad");
console.log("El id  de la caja es " + caja_edad.id);
console.log("El valor  de la caja es " + caja_edad.value);
var edad=caja_edad.value;

//si mayor que límite
        //informar mayor
if(edad>=MAYORIA_DE_EDAD)
{
    console.log("Es mayor de edad");
}
//si no informar menor 
 
else{
    console.log("Es menor de edad");
}
//si es un texto
   //informar error
//si es un número
   
         

}

