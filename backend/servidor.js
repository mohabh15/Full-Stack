





var express = require("express");       //para traer la libreria de express
var app = express();                    //para crear una instancia de express


app.get('/', home); //obtiene el home y ejecuta la funcion home


function home(req, res) {
    res.send('Hello World!');
}


app.listen(3000);