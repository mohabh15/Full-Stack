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


//crear objetos nuevos

var imagen = new Image();      //instancia del obejetivo o classe image
imagen.src = "imagen.png";      //ruta de la imagen
imagen.addEventListener("load", dibujarimagen);     //cuando se cargue la imagen se llamara a la funcion para que dibuje encima de la imagen i no antes


function dibujarimagen()
{
    lienzo.drawImage(imagen,0,0);
}



//crear una classe
class pakiman
{
    constructor(x,y,vida,velocidad)
    {
        this.x = x;
        this.y = y;
        this.vida = vida;
        this.velocidad = velocidad;
        this.imagen= new Image();
        imagen.src = "imagen.png";
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}