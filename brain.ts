
let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
 let context = canvas.getContext("2d");
 console.log(context);


 let map =
{
 url: "tile.png",
 loadOk:false,
 imagen:map
}
 // get zombie image

 let zombie=
 {
url:"zombie.gif",
  loadOk:false,
 imagen:zombie
 };

 let taco=
 {
   url:"taco.png",
   loadOk:false,
   imagen:taco
 }

 let hero =
 {
   url:"hero.png",
   loadOK:false,
   imagen:hero
 }


//ramdom zombie and taco generator
 let  cantidad = aleatorio(1, 2);
 let  cantidad2 = aleatorio(1, 3);



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


/// obje or gamecasting

 function loadMap()
 {
   map.loadOk = true;
   dibujar();
 }
 function loadZombie()
 {
   zombie.loadOk = true;
   dibujar();
 }
 function loadTaco()
 {
   taco.loadOk = true;
   dibujar();
 }
 function loadHero()
 {
   hero.loadOk = true;
   moveHero.loadOk =true;
   dibujar();
 }


 // drawing imgs
 function dibujar()
 {

   if(map.loadOk)
   {
     context.drawImage(map.imagen, 0, 0);
   }

   if(zombie.loadOk)
   {
     console.log(cantidad);
     for(let v=0; v < cantidad; v++)
     {
       let x = aleatorio(4, 10);
       let y = aleatorio(4, 10);
        x = x * 60;
        y = y * 40;
       context.drawImage(zombie.imagen, x, y);


     }

     for(let v=0; v < cantidad2; v++)
     {
       let x = aleatorio(3, 7);
       let y = aleatorio(3, 10);
        x = x * 60;
        y = y * 40;

      context.drawImage(taco.imagen, x, y);
    }
     //////////////// comented this

        }

        if(moveHero.loadOk == true)
        {
        context.drawImage(hero.imagen, moveX, moveY);
        }
 }

 // function zombieWalk(){
 //   for (let i=40 ; i < 900; i++){
 //   setInterval(context.drawImage(zombie, i,450),5000);
 //
 // }
 // }
 // zombieWalk();


///// random zombie and taco generator function

 function aleatorio(min, maxi)
 {

   return Math.floor(Math.random() * (maxi - min + 1)) + min;
}
