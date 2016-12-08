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
   url:"taco.jpg",
   loadOk:false
 }

 let  cantidad = aleatorio(1, 10);

 map.imagen = new Image();
 map.imagen.src = map.url;
 map.imagen.addEventListener("load", loadMap);

 zombie.imagen = new Image();
 zombie.imagen.src = zombie.url;
 zombie.imagen.addEventListener("load", loadZombie);

 taco.imagen = new Image();
 taco.imagen.src = taco.url;
 taco.imagen.addEventListener("load", loadTaco);


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



 function dibujar()
 {

   if(map.loadOk)
   {
     context.drawImage(map.imagen, 0, 0);
   }
   if(taco.loadOk)
   {
     context.drawImage(map.imagen, 10, 10);
   }
   if(zombie.loadOk)
   {
     console.log(cantidad);
     for(let v=0; v < cantidad; v++)
     {
       let x = aleatorio(0, 7);
       let y = aleatorio(0, 10);
        x = x * 60;
        y = y * 40;
       context.drawImage(zombie.imagen, x, y);

     }
     for(let v=0; v < cantidad; v++)
     {
       let x = aleatorio(0, 7);
       let y = aleatorio(0, 10);
        x = x * 60;
        y = y * 40;
      
      context.drawImage(taco.imagen, x, y);
     }
   }
 }
 function aleatorio(min, maxi)
 {
   var resultado;
   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
   return resultado;
 }

//
//  let img = new Image();
// // random tacos!!!
//
//  img.src = "zombie.gif";
// canvas.img = new Image();
// canvas.img.src = canvas.url;
//  // when all images loaded, start drawing
//  window.addEventListener('load', (load_backG) => {
// 		 context.drawImage(img, 0, 0);
//  });
