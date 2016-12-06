var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
console.log(context);
var map = {
    url: "tile.png",
    loadOk: false
};
var zombie = {
    url: "zombie.gif",
    loadOk: false
};
var cantidad = aleatorio(1, 10);
map.imagen = new Image();
map.imagen.src = map.url;
map.imagen.addEventListener("load", loadMap);
zombie.imagen = new Image();
zombie.imagen.src = zombie.url;
zombie.imagen.addEventListener("load", loadZombie);
function loadMap() {
    map.loadOk = true;
    dibujar();
}
function loadZombie() {
    zombie.loadOk = true;
    dibujar();
}
function dibujar() {
    if (map.loadOk) {
        context.drawImage(map.imagen, 0, 0);
    }
    if (zombie.loadOk) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 10);
            var x = x * 60;
            var y = y * 40;
            context.drawImage(zombie.imagen, x, y);
        }
    }
}
function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
