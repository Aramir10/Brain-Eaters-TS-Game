var moveX = 50;
var moveY = 50;
document.addEventListener("keyup", heroMove);
var moveHero = {
    url: "hero.png",
    loadOk: false
};
console.log(hero);
var arrowMove = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
function heroMove(event) {
    var mov = 20;
    console.log(event);
    switch (event.keyCode) {
        case arrowMove.UP:
            moveY = moveY - mov;
            context.drawImage(hero.imagen, moveX, moveY);
            dibujar(moveHero, moveX, moveY);
            console.log("up");
            break;
        case arrowMove.DOWN:
            moveY = moveY + mov;
            context.drawImage(hero.imagen, moveX, moveY);
            dibujar(moveHero, moveX, moveY);
            console.log("down");
            break;
        case arrowMove.LEFT:
            moveX = moveX - mov;
            context.drawImage(hero.imagen, moveX, moveY);
            dibujar(moveHero, moveX, moveY);
            console.log("left");
            break;
        case arrowMove.RIGHT:
            moveX = moveX + mov;
            context.drawImage(hero.imagen, moveX, moveY);
            dibujar(moveHero, moveX, moveY);
            console.log("right");
            break;
        default:
            alert("use the arrows onnly ");
            break;
    }
}
