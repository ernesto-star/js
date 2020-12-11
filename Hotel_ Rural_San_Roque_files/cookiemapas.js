
function mostrarMapa() {
    
    let div_mapa = document.getElementById("mapa");
    let iframe_mapa = document.createElement("iframe");
    iframe_mapa.src = "https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d389249.5323459927!2d-4.379887107149598!3d40.34208043765083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e6!4m5!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!3m2!1d40.4167754!2d-3.7037902!4m5!1s0xd404247b8b8053d%3A0xb9cbfc376a60d84d!2sCentro+de+Turismo+Rural+San+Roque%2C+Lugar+Los+Guijuelos%2C+S%2FN%2C+05440+Piedralaves%2C+%C3%81vila!3m2!1d40.2987!2d-4.726658!5e0!3m2!1ses!2ses!4v1422190236823";
    iframe_mapa.width = "100%";
    iframe_mapa.height = "100%";
    iframe_mapa.frameBorder = 0;
    iframe_mapa.style.border = 0;


    
    
    
    div_mapa.appendChild(iframe_mapa);
    document.getElementById("cubremapa").remove();
    
    div_mapa.style.opacity = 1;
    div_mapa.style.backgroundColor = "transparent";
}

function aceptaCookieGMaps ()
{
    window.localStorage.setItem("mapa_aceptada", 'true');
    mostrarMapa();
}

function gestionarMapaPorCookies() {
    console.log ("comprobando cookie");
    if (window.localStorage.getItem("mapa_aceptada")=='true') {
        console.log ("cookie aceptada ... mostrando mapa");
        mostrarMapa();

    } else {
        console.log("cookie NO aceptada ...mostrando cubre aviso");
        document.getElementById("cubremapa").style.display = 'block';

    }
}