window.onload = function () {
 
    inicio ();
    animaMenu();//functión en menu.js
    if (this.location.href.includes ('ofertas'))
    {
        //si estamos en la página de ofertas pintamoso el precio
        dibujarTarifas();
    }
    if (this.location.href.includes ('contacto') && (this.estoyEnMovil()))
    {
        //si estamos en la página de ofertas pintamoso el precio
        document.getElementById("logosmovil").style.display= 'block';
    }
    if (this.location.href.includes ('comollegar'))
    {
        gestionarMapaPorCookies();
    }

    //document.getElementById("botonancla").focus(new Boolean(true));
    
}
           


 var siguiente = 1;
 var actual = 0;
 var id_interval = 0;
 var reproduccion_automatica = 1;


function inicio ()
{

 var lista_imagenes = document.getElementById('imagenes').getElementsByTagName('li');
 var n_imagenes = lista_imagenes.length;
 var leyenda = document.getElementById('textoleyenda');
 var texto_leyenda;



    id_interval = setInterval(cambia_imagenes2, 4000);
    leyenda = document.getElementById('textoleyenda');
    texto_leyenda = lista_imagenes[actual].firstChild.alt;
    leyenda.innerHTML = texto_leyenda;

var boton_play = document.getElementById('imagenes').getElementsByTagName('boton_play');	

	boton_play.opacity = 0;


setMarcador (actual);

}




function play_pause()
{
	var img_btn = document.getElementById('boton_play_pause');

	if (reproduccion_automatica == 1)
	{
		clearInterval(id_interval);
		img_btn.src = "imagenes/botonplay.png"
		reproduccion_automatica = 0;
	} else
		{
			cambia_imagenes2 ();
			id_interval = setInterval(cambia_imagenes2, 4000);
			img_btn.src = "imagenes/botonpause.png"
			reproduccion_automatica = 1;
		}

	
       
	
}

function setMarcador (actual)
{
var int_aux = actual+1;
var marcador = document.getElementById('contenido_marcador');
var tamanio = document.getElementById("imagenes").childElementCount;
	
	marcador.innerHTML = int_aux + " de " + tamanio; 

}


function foto_anterior()
{

var lista_imagenes = document.getElementById('imagenes').getElementsByTagName('li');
var n_imagenes = lista_imagenes.length;
var leyenda = document.getElementById('textoleyenda');
var texto_leyenda;
 

	siguiente = actual;
	actual--;

	if (actual == -1) 
            {
                actual = n_imagenes - 1;
            } 
        
        
   
        lista_imagenes[actual].className = 'selected';
        lista_imagenes[siguiente].className = 'noselected';
	
	setMarcador (actual);

	//nuevo
	texto_leyenda = lista_imagenes[actual].firstChild.alt;
	leyenda.innerHTML = texto_leyenda;
	//nuevo
 	if (reproduccion_automatica == 1)
		{
			var img_btn = document.getElementById('boton_play_pause');
			clearInterval(id_interval);
			img_btn.src = "imagenes/botonplay.png"
			reproduccion_automatica = 0;
			
		}
	
            
}


function foto_siguiente()
{

var lista_imagenes = document.getElementById('imagenes').getElementsByTagName('li');
 var n_imagenes = lista_imagenes.length;
 var leyenda = document.getElementById('textoleyenda');
 var texto_leyenda;
    
        lista_imagenes[actual].className = 'noselected';
        lista_imagenes[siguiente].className = 'selected';

	//nuevo
	texto_leyenda = lista_imagenes[siguiente].firstChild.alt;
	leyenda.innerHTML = texto_leyenda;
	//nuevo
        
        actual = siguiente;
        siguiente++;
        if (siguiente == n_imagenes) 
            {
                siguiente = 0;
            } 
	if (reproduccion_automatica == 1)
		{
			var img_btn = document.getElementById('boton_play_pause');
			clearInterval(id_interval);
			img_btn.src = "imagenes/botonplay.png"
			reproduccion_automatica = 0;
			
		}
	setMarcador (actual);
            
}



 function cambia_imagenes2() 
    {

 var lista_imagenes = document.getElementById('imagenes').getElementsByTagName('li');
 var n_imagenes = lista_imagenes.length;
 var leyenda = document.getElementById('textoleyenda');
 var texto_leyenda;
    
        lista_imagenes[actual].className = 'noselected';
        lista_imagenes[siguiente].className = 'selected';

	//nuevo
	texto_leyenda = lista_imagenes[siguiente].firstChild.alt;
	leyenda.innerHTML = texto_leyenda;
	//nuevo
        
        actual = siguiente;
        siguiente++;
        if (siguiente == n_imagenes) 
            {
                siguiente = 0;
            } 
	setMarcador (actual);
     }
//hace visible la galería
function tapafachada()
{
    var cuerpo = document.getElementById('cuerpo');
    /*cuerpo.style.zIndex = -3;
    cuerpo.style.opacity = 0;*/
	
    cuerpo.className = 'nuevo_invisible';

    var bloque = document.getElementById('lonuevo');
    bloque.className = 'nuevo_visible';
}

//hace visible la capa principal
function descubrefachada()
{
    console.log ("en descubre fachada");
    var cuerpo = document.getElementById('cuerpo');
    //cuerpo.style.zIndex = 5; //necesario echarlo para atrás o no van los botones
    //cuerpo.style.opacity = 1;//necesario porque si no la imagen se superpone

    cuerpo.className = 'nuevo_visible';

    var bloque = document.getElementById('lonuevo');
    bloque.className = 'nuevo_invisible';
    
}

function numeroFotoAleatorio()
{
    var fecha = new Date();
    var milisegundos = fecha.getMilliseconds();
    var nfoto = milisegundos % 10;//4 es el número de fotos que tengo
    return (nfoto + 1); //devuelvo el resto, que deberá estár entre 0 y 3, más uno, entre 1 y 4, el número de fotos que tengo!
}

function dameFlor()
{
    document.getElementById('colcent3').style.backgroundImage= "url('imagenes/flores/"+numeroFotoAleatorio()+".jpg')";

   // var colcent3 = document.getElementById('colcent3');
   // var img = document.createElement("IMG");
   // img.setAttribute("src", "imagenes/flores/"+numeroFotoAleatorio()+".jpg");
   // img.setAttribute("width", "100%");
   // img.setAttribute("height", "100%");
   // img.setAttribute("alt", "Flor rotativa");
   // colcent3.appendChild(img);
}
//así es más genérico!!!! y puedo colocar una foto en la sección que quiero, adaptando el estio al momento 
function dameFlorParam (seccion)
{
    document.getElementById(seccion).style.backgroundImage= "url('imagenes/flores/"+numeroFotoAleatorio()+".jpg')";

    document.getElementById(seccion).style.backgroundSize='cover';
    document.getElementById(seccion).style.backgroundRepeat='no-repeat';
    document.getElementById(seccion).style.backgroundPosition='center';

}
function aopinar()
{
    window.open("https://maps.google.com/?cid=13388071632227063885", "_blank");
}

function maslugares()
{
    window.open("http://www.turismocastillayleon.com/es/arte-cultura-patrimonio/rutas-culturales/valle-tietar-ofrecer", "_blank");
}

function cambiaimagen(obj, ruta)
{
   obj.setAttribute("src", ruta);
}


function veravisolegal()
{
    window.open("http://www.hrsanroque.com/legal/wwwavisolegal.pdf", "_blank");
}

function verPrivacidadSegundaCapa()
{
    window.open("http://www.hrsanroque.com/legal/wwwprivacidad2.pdf", "_blank");
}
                      
