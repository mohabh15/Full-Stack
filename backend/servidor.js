


//MONTAMOS EL SERVIDOR CON NODE JS

var cafecito = require("express");       //para traer la libreria de express
var app = cafecito();               //para crear una instancia de express


app.get('/', home); //obtiene el home y ejecuta la funcion home


function home(req, res) {
    res.send('Hello World!');
}


app.listen(3000);