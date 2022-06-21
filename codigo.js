var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var boton = document.getElementById("boton");
boton.addEventListener("click",dibujarlinea);   //cuando se clicke al boton se llamara a la funcion

var color="blue";
var xinicial = 0;
var yinicial = 0;
var xfinal = 300;
var yfinal = 300;

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal.yfinal);
    lienzo.stroke();
    lienzo.closePath();

}


//dibujar cuando se presione una tecla

var teclas = { //una variable con mas variables que en este caso son constantes
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keyup", dibujarteclado);

function dibujarteclado(evento)
{
    if(evento.keycodi == "ArrowUp") 
    {
        xfinal--;
        dibujarlinea("red","6","7",xfinal,yfinal);
    }
}