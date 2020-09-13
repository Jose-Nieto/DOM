var celdas;
var cambio;
var datos;
var boton;
function Gtablas(){
    var filas=document.getElementById("filas").value;
    var columnas=document.getElementById("columnas").value;
    var Generar=document.getElementById("Tabla");
    Generar.innerHTML="";
    var tabla=" <table>";

    for (var i= 1; i<=filas; i++){
        tabla+="<tr>";
        for(var j=1;j<=columnas; j++)

   {

    tabla+="<td>-</td>";
   } 
   tabla+="</tr>";
}
tabla+="</table>";


Generar.innerHTML=tabla;
celdas=document.querySelectorAll("tr td");


}

boton=document.getElementById("enviar");

boton.addEventListener('click', function(){

    cambio=document.getElementById("ModFilas").value;
    datos=document.getElementById("Sus").value;
    celdas[cambio-1].innerHTML=datos;
})

