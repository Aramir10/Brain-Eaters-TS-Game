
let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
 let context = canvas.getContext("2d");
 console.log(context);


 let map =
{
 url: "tile.png",
 loadOk:false
}
 // get zombie image

 let zombie=
 {
url:"zombie.gif",
loadOk:false
 };

 let taco=
 {
   url:"taco.png",
   loadOk:false
 }

 let hero =
 {
   url:"hero.png",
   loadOK:false
 }


//ramdom zombie and taco generator
 let  cantidad = aleatorio(1, 3);
 let  cantidad2 = aleatorio(1, 2);



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

   dibujar();
 }




 // drawing imgs
 function dibujar()
 {

   if(map.loadOk)
   {
     context.drawImage(map.imagen, 0, 0);
     context.drawImage(hero.imagen, 10, 10);
   }


   if(zombie.loadOk)
   {
     console.log(cantidad);
     for(let v=0; v < cantidad; v++)
     {
       let x = aleatorio(0, 10);
       let y = aleatorio(0, 10);
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
   }
 }


///// random zombie and taco generator function

 function aleatorio(min, maxi)
 {

   return Math.floor(Math.random() * (maxi - min + 1)) + min;
}
