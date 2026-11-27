const c = document.getElementById("canvasMP4");
const ctx = c.getContext("2d");
c.width = innerWidth; c.height = innerHeight;
let t = 0;

// RUIDO RAYOS
let audioCtx;
function trueno(){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type="sawtooth"; o.frequency.value=40;
    g.gain.setValueAtTime(0.3, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime+0.8);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime+0.8);
  }catch(e){}
}

function personaje(x, y, color, correr, boca){
  ctx.fillStyle=color;
  // CUERPO
  ctx.fillRect(x-15, y, 30, 60);
  // CABEZA
  ctx.fillStyle="#ffcc99";
  ctx.fillRect(x-12, y-30, 24, 30);
  // BOCA - SE MUEVE
  ctx.fillStyle="#000";
  const abrir = boca ? Math.abs(Math.sin(t*8))*10 : 2;
  ctx.fillRect(x-5, y-8, 10, abrir);
  // BRAZOS - SE MUEVEN
  ctx.strokeStyle=color; ctx.lineWidth=6;
  const brazo = Math.sin(t*10)*20;
  ctx.beginPath(); ctx.moveTo(x-15, y+10); ctx.lineTo(x-35, y+20+brazo); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x+15, y+10); ctx.lineTo(x+35, y+20-brazo); ctx.stroke();
  // PIERNAS - CORREN
  ctx.strokeStyle="#222"; ctx.lineWidth=7;
  const pierna = correr ? Math.sin(t*12)*25 : 0;
  ctx.beginPath(); ctx.moveTo(x-7, y+60); ctx.lineTo(x-10+pierna, y+100); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x+7, y+60); ctx.lineTo(x+10-pierna, y+100); ctx.stroke();
}

function dibujar(){
  t+=0.05;
  // CIELO
  ctx.fillStyle = Math.random()<0.02 ? "#fff" : "#0a0a2e";
  if(Math.random()<0.02) trueno();
  ctx.fillRect(0,0,c.width,c.height);
  // RAYO
  if(Math.random()<0.03){
    ctx.strokeStyle="#ffff00"; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(c.width*0.5,0);
    ctx.lineTo(c.width*0.5+40,150); ctx.lineTo(c.width*0.5,250); ctx.stroke();
  }
  // PISO
  ctx.fillStyle="#111"; ctx.fillRect(0,c.height-100,c.width,100);
  // CENTINELA - INTENTA ALCANZARLO
  let cx = c.width*0.5 + Math.sin(t)*20;
  personaje(cx, c.height-250, "#ff0000", false, true);
  // 3 PERSONAJES - CORREN HACIA ÉL
  const avance = (Math.sin(t*0.5)+1)*30;
  personaje(cx-120+avance, c.height-220, "#00f", true, true);
  personaje(cx+120-avance, c.height-220, "#0a0", true, true);
  personaje(cx-200+avance, c.height-220, "#ff0", true, true);
  requestAnimationFrame(dibujar);
}
dibujar();
