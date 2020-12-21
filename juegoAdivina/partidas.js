

onload = mostrarTablaResultados;
let array_partidas;
function mostrarTablaResultados ()
{
    console.log("mostrando resultados");
    let array_partidas_json = localStorage.getItem("array_partidas");
        if (array_partidas_json!=null) 
        {
            console.log("Hay partidas que mostrar");
            console.log("Partidas = " + array_partidas_json);
            let array_partidas = JSON.parse(array_partidas_json);//EXISTE --> LO CARGO
            mostrarTabla(array_partidas);
        } else {
            console.log("NO Hay partidas que mostrar");
        }
}

function mostrarTabla(array_partidas) 
{
    for (partida of array_partidas) {
        console.log (partida.nombre);
        console.log (partida.intentos);
        mostrarPartida (partida);
        
    }
    
}

function mostrarPartida (partida)
{
    
    //TODO CREAR 2 TDS --createElement
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    //METERLE EN LOS INNERHTML EL NOMBRE E INTENTOS
    celda1.innerHTML=partida.nombre;
    celda2.innerHTML=partida.intentos;
    //CREAR UN TR
    let fila=document.createElement("tr");
    //AÑADIR LOS TDS AL TR --appendChild
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    //AÑADIR EL TR A LA TABLA
    tabla=document.getElementById("tabla");
    tabla.appendChild(fila);
    
    

}

function ordenarArraysNombre(){

array_partidas.sort(function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

}

function ordenarArraysIntentos(){

    array_partidas.sort(function (a, b) {
        if (a.intentos > b.intentos) {
          return 1;
        }
        if (a.intentos < b.intentos) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    
    }


    