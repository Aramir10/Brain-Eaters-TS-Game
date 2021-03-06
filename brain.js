var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
console.log(context);
var map = {
    url: "tile.png",
    loadOk: false,
    imagen: map
};
var zombie = {
    url: "zombie.gif",
    loadOk: false,
    imagen: zombie
};
var taco = {
    url: "taco.png",
    loadOk: false,
    imagen: taco
};
var hero = {
    url: "hero.png",
    loadOK: false,
    imagen: hero
};
var cantidad = aleatorio(1, 2);
var cantidad2 = aleatorio(1, 3);
map.imagen = new Image();
map.imagen.src = map.url;
map.imagen.addEventListener("load", loadMap);
zombie.imagen = new Image();
zombie.imagen.src = zombie.url;
zombie.imagen.addEventListener("load", loadZombie);
taco.imagen = new Image();
taco.imagen.src = taco.url;
taco.imagen.addEventListener("load", loadTaco);
hero.imagen = new Image();
hero.imagen.src = hero.url;
hero.imagen.addEventListener("load", loadHero);
function loadMap() {
    map.loadOk = true;
    dibujar();
}
function loadZombie() {
    zombie.loadOk = true;
    dibujar();
}
function loadTaco() {
    taco.loadOk = true;
    dibujar();
}
function loadHero() {
    hero.loadOk = true;
    moveHero.loadOk = true;
    dibujar();
}
function dibujar() {
    if (map.loadOk) {
        context.drawImage(map.imagen, 0, 0);
    }
    if (zombie.loadOk) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(4, 10);
            var y = aleatorio(4, 10);
            x = x * 60;
            y = y * 40;
            context.drawImage(zombie.imagen, x, y);
        }
        for (var v = 0; v < cantidad2; v++) {
            var x = aleatorio(3, 7);
            var y = aleatorio(3, 10);
            x = x * 60;
            y = y * 40;
            context.drawImage(taco.imagen, x, y);
        }
    }
    if (moveHero.loadOk == true) {
        context.drawImage(hero.imagen, moveX, moveY);
    }
}
function aleatorio(min, maxi) {
    return Math.floor(Math.random() * (maxi - min + 1)) + min;
}
