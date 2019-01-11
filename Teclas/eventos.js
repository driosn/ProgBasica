var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mousedown", clickearMouse);
document.addEventListener("mouseup", soltarMouse)
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var estado = false;
var mouse_x;
var mouse_y;

dibujarLinea("Red", 0, 0, cuadrito.width, 0, papel);
dibujarLinea("Red", cuadrito.width, 0, cuadrito.width, cuadrito.height, papel);
dibujarLinea("Red", cuadrito.width, cuadrito.height, 0, cuadrito.height, papel);
dibujarLinea("Red", 0, cuadrito.height, 0, 0, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function clickearMouse(evento){
    estado = true;
    mouse_x = evento.layerX;
    mouse_y = evento.layerY;
}

function soltarMouse(evento){
    estado = false;
    mouse_x = evento.layerX;
    mouse_y = evento.layerY;
}

function dibujarMouse(evento){

  console.log(evento);

  var colorcito = "blue";
  if(estado){
    dibujarLinea(colorcito, mouse_x, mouse_y, evento.layerX, evento.layerY, papel);
    mouse_x = evento.layerX;
    mouse_y = evento.layerY;
  }
}
