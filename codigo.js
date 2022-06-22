var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var boton = document.getElementById("botton1");
boton.addEventListener("click",dibujarlinea);   //cuando se clicke al boton se llamara a la funcion

var color="blue";
var xinicial = 150;
var yinicial = 150;
var xfinal = 200;
var yfinal = 200;

function dibujarlinea(color1, xinicial1, yinicial1, xfinal1, yfinal1)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


//dibujar cuando se presione una tecla

var teclas = {      //una variable con mas variables que en este caso son constantes
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keyup", dibujarteclado);

function dibujarteclado(evento)
{ 
    if(evento.keyCode == teclas.UP) 
    {
        xfinal--;
        dibujarlinea("red","6","7",xfinal,yfinal);
    }
}