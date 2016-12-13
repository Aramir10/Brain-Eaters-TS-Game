
let moveX = 50;

let moveY = 50;



document.addEventListener("keydown", heroMove);

let moveHero = {

  url : "hero.png",
  loadOk : false

}

console.log(hero);



let arrowMove = {

  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGTH : 39

}

function heroMove(event)

  {

     let mov = 20;

     console.log(event);

     switch (event.keyCode) {

       case arrowMove.UP:

         moveY = moveY - mov;

         dibujar(moveX, moveY);

         console.log("up");

       break;

       case arrowMove.DOWN:

          moveY = moveY + mov;

          dibujar(moveX, moveY);

          console.log("down");

       break;

       case arrowMove.LEFT:

          moveX = moveX - mov;

          dibujar(moveX, moveY);

          console.log("left");

       break;

       case arrowMove.RIGHT:

          moveX = moveX + mov;

          dibujar(moveX, moveY);

          console.log("right");

       break;

       default:

          alert ("use the arrows onnly ");

       break;

     }

  }
	heroMove();
