const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

class Dni {
   
        constructor(numero,letra) {
          this.numero = numero;
          this.letra = "";
        }

        calculaLetra ()
        {
            let resto = (this.numero % 23);
            console.log ("resto es de tipo " + typeof resto);
            console.log ("Resto " + resto);
            let letradni = LETRAS_DNI.charAt(resto);
            console.log (this.toString());
            return letradni;
        }
        esDniValido()
        {   
            let esvalido = false;
            //comparar la letra del DNI con la claculada
            let letra_calculada=this.calculaLetra();
            if(this.letra == letra_calculada){
                esvalido=true;
            }
            return esvalido;


        }
      
}



function calcularLetraDni2 ()
{
    var ndni = document.getElementById("dni").value;
    let dni = new Dni (ndni,"");
    var l = dni.calculaLetra();
    let dni2 = new Dni (ndni,);
    console.log ("La letra del dni es = " + l);
    let valido=dni2.esDniValido();
    console.log("El dni es" + valido);
}

function prepararNumero (letra, numero)
{
    let dni_num = '';//inicio a cadena vacía
        
        console.log("TIPO NUMERO = " +typeof numero);
        dni_num = letra+numero;

    return dni_num;
}

function mostrarResultado (letra_resultado)
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
    el_div.innerHTML="Tu letra es " + letra_resultado;
}

function calcularLetraDni ()
{
    calcularLetraDni2();
    console.log ("Ha introducido un dni");
    //tenemos que obtener el dni introducido
    var dni = document.getElementById("dni").value;
    console.log ("dni es de tipo " + typeof dni);
    console.log ("Ha introducido " + dni);
    console.log (isNaN(dni));
    var l =  document.querySelector('[name="prefijo"]:checked');
    //parseInt
    console.log (l.value);
    var resto = (dni % 23);
    console.log ("resto es de tipo " + typeof resto);
    console.log ("Resto " + resto);
    let letradni = LETRAS_DNI.charAt(resto);
    console.log ("Tu letra etradni");
    //CREAR UN NUEVO ELEMENTO
    var nuevo_elemento_div = document.createElement("div");
    nuevo_elemento_div.innerHTML="Tu letra es " + letradni;
    //Y AÑADIRLO AL HTML
    var etiqueta_body = document.getElementById("cuerpo");
    etiqueta_body.appendChild(nuevo_elemento_div);

}
function validarDni(){
    var dni = document.getElementById("dni").value;
    var letra = document.getElementById("letra").value;
    let dni = new Dni (dni,letra);
    var l = dni.validar();
    console.log ("El resultado es" + l);

}
// console.log ("Ha introducido " + dni);//AMBITO
// console.log ("Ha introducido " + LETRAS_DNI);