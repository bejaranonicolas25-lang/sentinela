const c = document.getElementById("canvasMP4");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = 400;
let t = 0;

function dibujar(){
  t += 0.05;
  // FONDO SEGURO - SI VES ESTO, YA ANDA
  ctx.fillStyle = "#0a0a2e";
  ctx.fillRect(0,0,c.width,c.height);

  // PISO
  ctx.fillStyle = "#111";
  ctx.fillRect(0, c.height-80, c.width, 80);

  // PERSONAJE ROJO - CENTINELA
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(c.width/2 - 15, c.height-200, 30, 60);
  ctx.fillStyle = "#ffcc99";
  ctx.fillRect(c.width/2 - 12, c.height-230, 24, 30);

  // PERSONAJE AZUL - CORRE
  let x = c.width/2 - 120 + Math.sin(t)*40;
  ctx.fillStyle = "#00f";
  ctx.fillRect(x-15, c.height-170, 30, 60);
  ctx.fillStyle = "#ffcc99";
  ctx.fillRect(x-12, c.height-200, 24, 30);

  // TEXTO PARA SABER QUE ANDA
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText("SI VES ESTO, YA ANDA JEFE", 20, 30);

  requestAnimationFrame(dibujar);
}
dibujar();
