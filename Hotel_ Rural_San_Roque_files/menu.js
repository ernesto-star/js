
function estoyEnMovil ()
{
    let esmovil = false;

        console.log("agente = " + window.navigator.userAgent);
        let agente = window.navigator.userAgent;

        esmovil = agente.match(/android/i)||agente.match(/iphone/i)||
        agente.match(/ipad/i)||agente.match(/ipod/i)||
        agente.match(/opera mini/i)||agente.match(/iemobile/i)||
        agente.match(/blackberry/i);


    return esmovil;
}


var mostrar_galeria = false;
var mostrando_galeria = false;




function menuNuevoSeleccionado(divtocado) {
    console.log("ID tocado = " + divtocado.id);
    let nuevadir;
    let id_div_tocado = divtocado.id;
    console.log("Id tocado = " + id_div_tocado);
    if (id_div_tocado == 'notemuevas') {
        console.log("Se quiere desplzar a la misma página. simplemente cerramos el menú");
        descubrirMenuFlotante ();
    } else if (id_div_tocado == 'galerianm') {
        tapafachada();
        mostrar_galeria = true;
        descubrirMenuFlotante ();
    } else {
        nuevadir = id_div_tocado.substr(0, id_div_tocado.length - 2);
        console.log("nueva_dir = " + nuevadir);
        if (nuevadir == 'contacto') {
            nuevadir = nuevadir + ".php";
        } else {
            nuevadir = nuevadir + ".html";
        }
        let location_actual = window.location.href;
        let pos = location_actual.lastIndexOf("/");
        let base_location_actual = location_actual.substr(0, pos);
        console.log(location_actual);
        window.location.href = base_location_actual + "/" + nuevadir;
    }

}



//onload=animaMenu;

function animaMenu() {
    let img_menu = document.getElementById("oculta").firstChild;
    img_menu.style.animation = 'shake 1.8s';

    img_menu.onclick = descubrirMenuFlotante;
}


function descubrirMenuFlotante() {

    let div_menu_flotante = document.getElementById("menunuevo");
    let img_menu = document.getElementById("oculta").firstChild;


    if (div_menu_flotante.className === 'menu_nuevo_visible') {
        //se oculta el menú
        div_menu_flotante.className = 'menu_nuevo_no_visible';
        img_menu.style.transform = 'rotate(0deg)';
        
        if (mostrar_galeria) //quiere mostrar galeria
        {
            img_menu.style.transform = 'rotate(-180deg)';
            img_menu.src = 'imagenes/logos/salirgaleria.png';
            img_menu.alt = 'salir';
            img_menu.title = 'Salir';
            img_menu.opacity = '0.60';
            mostrando_galeria = true;
        }
       
          
    }
    else {

        div_menu_flotante.className = 'menu_nuevo_visible';
        img_menu.style.transform = 'rotate(-90deg)';
        
        if (mostrando_galeria) //venía de mostrar galeria
        {
            img_menu.src = 'imagenes/logos/menuredondocolor.svg';
            //img_menu.style.transform = 'rotate(90deg)';
            img_menu.alt = 'mostrar menu';
            img_menu.title = 'Mostrar menú';
            img_menu.opacity = '0.60';
            mostrar_galeria = false;
            mostrar_galeria = false;

            descubrefachada();
        }
        
        
    }


}

