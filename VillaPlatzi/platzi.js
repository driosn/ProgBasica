var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.jpg",
  cargaOK: false
};

var vaca = {
  url: "vaca.jpg",
  cargaOK: false
};

var pollo = {
  url: "pollo.jpg",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.jpg",
  cargaOK: false
};

var cantidad_vacas = aleatorio(0,36);
var cantidad_pollos = aleatorio(0, 36-cantidad_vacas);

var vaca_x = new Array();
var vaca_y = new Array();
var pollo_x = new Array();
var pollo_y = new Array();
var cerdo_x = aleatorio(0, 5); cerdo_x *= 80;
var cerdo_y = aleatorio(0, 5); cerdo_y *= 80;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

document.addEventListener("keydown", controlFlechas);



function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar();
}


function dibujar(){
  if(fondo.cargaOK){
      papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
    for(var i=0; i<cantidad_vacas; i++){
      vaca_x[i] = aleatorio(0, 5); vaca_x[i] *= 80;
      vaca_y[i] = aleatorio(0, 5); vaca_y[i] *= 80;
      papel.drawImage(vaca.imagen, vaca_x[i], vaca_y[i]);
    }
  }
  if(pollo.cargaOK){
    for(var i=0; i<cantidad_pollos; i++){
      pollo_x[i] = aleatorio(0, 5); pollo_x[i] *= 80;
      pollo_y[i] = aleatorio(0, 5); pollo_y[i] *= 80;
      papel.drawImage(pollo.imagen, pollo_x[i], pollo_y[i]);
    }
  }
  if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen, cerdo_x, cerdo_y);
  }
}

function redibujar(mov_x, mov_y){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
      for(var i=0; i<cantidad_vacas; i++){
        papel.drawImage(vaca.imagen, vaca_x[i], vaca_y[i]);
      }
  }
  if(pollo.cargaOK){
      for(var i=0; i<cantidad_pollos; i++){
        papel.drawImage(pollo.imagen, pollo_x[i], pollo_y[i]);
      }
  }
  if(cerdo.cargaOK){
      papel.drawImage(cerdo.imagen, mov_x, mov_y);
  }
}

function controlFlechas(evento){
  var movimiento = 10;
  console.log(cerdo.imagen);
  console.log(evento);

  switch (evento.keyCode) {
    case teclas.UP:
      cerdo_y -= movimiento;
      redibujar(cerdo_x, cerdo_y);
      break;
    case teclas.DOWN:
      cerdo_y += movimiento;
      redibujar(cerdo_x, cerdo_y);
      break;
    case teclas.LEFT:
      cerdo_x -= movimiento;
      redibujar(cerdo_x, cerdo_y);
      break;
    case teclas.RIGHT:
      cerdo_x += movimiento;
      redibujar(cerdo_x, cerdo_y);
      break;
    default:
      console.log("Soi un hester eg :v");
      break;

  }
}


function aleatorio(min, max){
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
