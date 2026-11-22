// SENTINELA / NS-5 APOCALYPSE - TU MOTOR
(function(){
const canvas=document.getElementById('sentinela-canvas'); if(!canvas) return;
const ctx=canvas.getContext('2d',{alpha:false});
let width=0,height=0,dpr=1,time=0;
const state={alertMode:false,lightningAlpha:0,nextLightning:180};
const embers=[],ashes=[],searchlights=[],skylineBuildings=[];
function resizeCanvas(){dpr=Math.min(window.devicePixelRatio||1,2);width=window.innerWidth;height=window.innerHeight;canvas.width=Math.floor(width*dpr);canvas.height=Math.floor(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);buildSkyline();initParticles();}
function buildSkyline(){skylineBuildings.length=0;const horizonY=height*0.64;let x=-20;while(x<width+40){const bWidth=26+Math.random()*54;const bHeight=(height*0.14)+Math.random()*(height*0.28);skylineBuildings.push({x,y:horizonY-bHeight,w:bWidth,h:bHeight+height*0.4,hasFire:Math.random()>0.58,fireOffset:Math.random()*Math.PI*2});x+=bWidth-4+Math.random()*14;}}
function initParticles(){embers.length=0;ashes.length=0;searchlights.length=0;const ec=width<600?55:95,ac=width<600?40:75;for(let i=0;i<ec;i++)embers.push(createEmber(true));for(let i=0;i<ac;i++)ashes.push(createAsh(true));searchlights.push({baseX:width*0.18,baseY:height*0.65,angle:-0.35,speed:0.0045,range:0.45,width:55},{baseX:width*0.82,baseY:height*0.65,angle:0.32,speed:-0.0038,range:0.42,width:65});}
function createEmber(r){return{x:Math.random()*width,y:r?Math.random()*height:height+15,size:1.1+Math.random()*2.6,speedY:0.65+Math.random()*1.9,driftX:(Math.random()-0.5)*0.9,phase:Math.random()*Math.PI*2,alpha:0.45+Math.random()*0.55};}
function createAsh(r){return{x:Math.random()*width,y:r?Math.random()*height:-10,size:1.5+Math.random()*3,speedY:0.35+Math.random()*0.95,driftX:0.3+Math.random()*0.8,phase:Math.random()*Math.PI*2,alpha:0.15+Math.random()*0.25};}
function drawBolt(x,y,ey){ctx.strokeStyle='rgba(180,220,255,0.8)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(x,y);let cx=x,cy=y;while(cy<ey){cx+=(Math.random()-0.5)*30;cy+=30;ctx.lineTo(cx,cy);}ctx.stroke();}
function drawWorld(){const horizonY=height*0.64;const skyGrad=ctx.createLinearGradient(0,0,0,horizonY+80);skyGrad.addColorStop(0,'#02050c');skyGrad.addColorStop(0.32,'#060d1f');skyGrad.addColorStop(0.62,'#141929');skyGrad.addColorStop(0.84,'#3b1512');skyGrad.addColorStop(1,'#8c280e');ctx.fillStyle=skyGrad;ctx.fillRect(0,0,width,height);
const sunX=width*0.5+Math.sin(time*0.002)*30;const sunGrad=ctx.createRadialGradient(sunX,horizonY,10,sunX,horizonY,Math.max(width,height)*0.55);sunGrad.addColorStop(0,'rgba(255,135,45,0.55)');sunGrad.addColorStop(0.35,'rgba(220,55,20,0.28)');sunGrad.addColorStop(0.7,'rgba(30,12,24,0.08)');sunGrad.addColorStop(1,'rgba(2,5,12,0)');ctx.fillStyle=sunGrad;ctx.fillRect(0,0,width,height);
state.nextLightning--;if(state.nextLightning<=0){state.lightningAlpha=0.35+Math.random()*0.35;state.nextLightning=220+Math.floor(Math.random()*340);}
if(state.lightningAlpha>0.01){ctx.fillStyle=state.alertMode?`rgba(255,60,90,${state.lightningAlpha*0.45})`:`rgba(140,210,255,${state.lightningAlpha*0.45})`;ctx.fillRect(0,0,width,horizonY);if(state.lightningAlpha>0.22)drawBolt(width*0.5,0,horizonY*0.85);state.lightningAlpha*=0.86;}
searchlights.forEach((beam,idx)=>{const a=beam.angle+Math.sin(time*beam.speed*16+idx)*beam.range;const len=height*0.85;const endX=beam.baseX+Math.sin(a)*len;const endY=beam.baseY-Math.cos(a)*len;const bg=ctx.createLinearGradient(beam.baseX,beam.baseY,endX,endY);const col=state.alertMode?'255,50,80':'125,211,252';bg.addColorStop(0,`rgba(${col},0.16)`);bg.addColorStop(1,`rgba(${col},0)`);ctx.save();ctx.fillStyle=bg;ctx.beginPath();ctx.moveTo(beam.baseX-6,beam.baseY);ctx.lineTo(beam.baseX+6,beam.baseY);ctx.lineTo(endX+beam.width,endY);ctx.lineTo(endX-beam.width,endY);ctx.closePath();ctx.fill();ctx.restore();});
for(let i=0;i<6;i++){const cloudX=((i*width*0.25+time*(0.15+i*0.04))%(width+320))-160;const cloudY=height*(0.12+(i%3)*0.14);const cloudR=140+(i%3)*65;const cGrad=ctx.createRadialGradient(cloudX,cloudY,15,cloudX,cloudY,cloudR);cGrad.addColorStop(0,'rgba(15,22,38,0.52)');cGrad.addColorStop(1,'rgba(5,10,20,0)');ctx.fillStyle=cGrad;ctx.beginPath();ctx.arc(cloudX,cloudY,cloudR,0,Math.PI*2);ctx.fill();}
skylineBuildings.forEach(b=>{ctx.fillStyle='#050a16';ctx.fillRect(b.x,b.y,b.w,b.h);if(b.hasFire){ctx.fillStyle=`rgba(255,${100+Math.floor(Math.sin(time*0.01+b.fireOffset)*50)},0,0.6)`;ctx.fillRect(b.x+4,b.y+4,6,6);}});
embers.forEach(e=>{e.y-=e.speedY;e.x+=e.driftX+Math.sin(time*0.01+e.phase)*0.4;if(e.y<-10){Object.assign(e,createEmber());}ctx.fillStyle=`rgba(255,120,30,${e.alpha})`;ctx.beginPath();ctx.arc(e.x,e.y,e.size,0,Math.PI*2);ctx.fill();});
ashes.forEach(a=>{a.y+=a.speedY;a.x+=a.driftX;if(a.y>height+10){Object.assign(a,createAsh());}ctx.fillStyle=`rgba(200,200,200,${a.alpha})`;ctx.beginPath();ctx.arc(a.x,a.y,a.size,0,Math.PI*2);ctx.fill();});
}
function animate(t){time=t;drawWorld();requestAnimationFrame(animate);}
window.addEventListener('resize',resizeCanvas);resizeCanvas();requestAnimationFrame(animate);
window.SENTINELA_STATE=state;
window.toggleAlert=function(){state.alertMode=!state.alertMode;document.body.classList.toggle('alert-mode',state.alertMode);const b=document.getElementById('toggle-protocol-btn');if(b)b.textContent=state.alertMode?'Protocolo: Rojo V.I.K.I.':'Protocolo: Azul Cian';};
document.addEventListener('click',function(e){if(e.target&&e.target.id==='toggle-protocol-btn')window.toggleAlert();});
})();
// PARCHE PARTE 1 - CENTINELA PRO - NO BORRA LO ANTERIOR
try{
const ICONS=["🧠","✍️","🔐","🗣️","☁️","✅","⚙️","📄","📤","💻","🎓","🎮","📈"];
const TITLES=["CENTINELA","SENTINEL ACCORDED","CENTINELA VAULT","CENTINELA HABLA","CENTINELA CLOUD","CENTINELA CHECKBOOK","CENTINELA SETTINGS","CENTINELA OFFICE","CENTINELA SHARE","CENTINELA CODE","CENTINELA ACADEMY","CENTINELA PLAY","CENTINELA TRADER"];
document.querySelectorAll('#centGrid button').forEach((btn,idx)=>{
btn.onclick=()=>{
let m=document.createElement('div');m.className='cent-modal';
m.innerHTML=`<div class="cent-box"><span class="cent-icon">${ICONS[idx]}</span><h2>${TITLES[idx]}</h2><p>Sistema propio de Nico Bejarano.<br>Escribí acá abajo y tocá EJECUTAR.</p><input id="centIn" placeholder="Escribí acá, jefe..."><button id="centGo">▶ EJECUTAR HERRAMIENTA</button><div class="cent-result" id="centRes">Listo para trabajar...</div><button class="cent-close" id="centX">✖ CERRAR</button></div>`;
document.body.appendChild(m);
m.querySelector('#centX').onclick=()=>m.remove();
m.onclick=(e)=>{if(e.target==m)m.remove()};
m.querySelector('#centGo').onclick=()=>{
let v=m.querySelector('#centIn').value||'Prueba de Nico';
let res=m.querySelector('#centRes');
if(idx==0)res.textContent='🧠 CENTINELA:\n\nAnalicé: "'+v+'"\n\n1) Entendí tu pedido\n2) Mejor opción: hacerlo simple y pro\n3) Listo para usar.';
else if(idx==1)res.textContent='✍️ ACCORDED:\n\nVersión mejorada:\n"'+v.toUpperCase()+'"\n\n✅ Más claro y profesional.';
else if(idx==2){let arr=JSON.parse(localStorage.getItem('vault_nico')||'[]');arr.push(v);localStorage.setItem('vault_nico',JSON.stringify(arr));res.textContent='🔐 VAULT GUARDADO ✅\n\nTenés '+arr.length+' guardados:\n- '+arr.join('\n- ');}
else if(idx==3){try{speechSynthesis.speak(new SpeechSynthesisUtterance(v));}catch(e){}res.textContent='🗣️ HABLA: Diciendo 🔊\n"'+v+'"';}
else if(idx==4)res.textContent='☁️ CLOUD:\n\nAutomatización creada:\nCuando escribís "'+v+'" -> Se guarda en VAULT -> Te avisa.';
else if(idx==5)res.textContent='✅ CHECKBOOK:\n\n[ ] '+v+'\n[ ] Revisar CENTINELA\n[ ] Guardar en VAULT';
else if(idx==6){document.body.style.filter=document.body.style.filter?'':'invert(1)';res.textContent='⚙️ SETTINGS: Modo cambiado ✅';}
else if(idx==7){let b=new Blob([v+'\n\nCreado por Nico Bejarano - CENTINELA'],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='CENTINELA.txt';a.click();res.textContent='📄 OFFICE: Documento descargado ✅';}
else if(idx==8){if(navigator.share)navigator.share({title:'CENTINELA',text:v,url:location.href});res.textContent='📤 SHARE: Compartiendo tu link...';}
else if(idx==9)res.textContent='💻 CODE:\n\n<button onclick="alert(\''+v+'\')">Tocame</button>\n\nEse es tu código generado.';
else if(idx==10)res.textContent='🎓 ACADEMY:\n\nPregunta: ¿Cuánto es 7x8?\nSi escribiste 56, ¡correcto!';
else if(idx==11){let n=Math.floor(Math.random()*10)+1;res.textContent='🎮 PLAY: Adivinaste '+v+', el número era '+n+(v==n?' ¡GANASTE!':' Casi, jefe.');}
else if(idx==12){let p=(Math.random()*2000+800).toFixed(2);res.textContent='📈 TRADER:\n\nBTC: $'+p+'\nTu análisis: "'+v+'"\nSeñal: '+(Math.random()>.5?'📈 SUBE':'📉 BAJA');}
};
};
});
}catch(e){console.log('Parche 1 seguro',e)}
// ARREGLO - ESPERA A QUE APAREZCAN LOS BOTONES
setTimeout(()=>{
const ICONS=["🧠","✍️","🔐","🗣️","☁️","✅","⚙️","📄","📤","💻","🎓","🎮","📈"];
const TITLES=["CENTINELA","SENTINEL ACCORDED","CENTINELA VAULT","CENTINELA HABLA","CENTINELA CLOUD","CENTINELA CHECKBOOK","CENTINELA SETTINGS","CENTINELA OFFICE","CENTINELA SHARE","CENTINELA CODE","CENTINELA ACADEMY","CENTINELA PLAY","CENTINELA TRADER"];
document.querySelectorAll('#centGrid button').forEach((btn,idx)=>{
btn.onclick=()=>{
let m=document.createElement('div');m.className='cent-modal';
m.innerHTML=`<div class="cent-box"><span class="cent-icon">${ICONS[idx]}</span><h2>${TITLES[idx]}</h2><p>Sistema propio de Nico Bejarano.</p><input id="centIn" placeholder="Escribí acá, jefe..."><button id="centGo">▶ EJECUTAR</button><div class="cent-result" id="centRes">Listo para trabajar...</div><button class="cent-close" id="centX">✖ CERRAR</button></div>`;
document.body.appendChild(m);
m.querySelector('#centX').onclick=()=>m.remove();
m.onclick=(e)=>{if(e.target==m)m.remove()};
m.querySelector('#centGo').onclick=()=>{
let v=m.querySelector('#centIn').value||'Prueba de Nico';
let res=m.querySelector('#centRes');
if(idx==0)res.textContent='🧠 CENTINELA:\nAnalicé: "'+v+'"\nListo para usar.';
else if(idx==1)res.textContent='✍️ ACCORDED:\n"'+v.toUpperCase()+'"\n✅ Más claro y profesional.';
else if(idx==2){let a=JSON.parse(localStorage.getItem('vault_nico')||'[]');a.push(v);localStorage.setItem('vault_nico',JSON.stringify(a));res.textContent='🔐 VAULT GUARDADO ✅\nTenés '+a.length+' guardados.';}
else if(idx==3){try{speechSynthesis.speak(new SpeechSynthesisUtterance(v));}catch(e){}res.textContent='🗣️ HABLA: Diciendo 🔊 "'+v+'"';}
else if(idx==4)res.textContent='☁️ CLOUD: Automatización creada con "'+v+'"';
else if(idx==5)res.textContent='✅ CHECKBOOK:\n[ ] '+v;
else if(idx==6){document.body.style.filter=document.body.style.filter?'':'invert(1)';res.textContent='⚙️ SETTINGS: Modo cambiado ✅';}
else if(idx==7){let b=new Blob([v],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='CENTINELA.txt';a.click();res.textContent='📄 OFFICE: Descargado ✅';}
else if(idx==8){if(navigator.share)navigator.share({title:'CENTINELA',text:v,url:location.href});res.textContent='📤 SHARE: Compartiendo...';}
else if(idx==9)res.textContent='💻 CODE:\n<button onclick="alert(\''+v+'\')">Tocame</button>';
else if(idx==10)res.textContent='🎓 ACADEMY: ¿7x8? Si pusiste 56, correcto.';
else if(idx==11){let n=Math.floor(Math.random()*10)+1;res.textContent='🎮 PLAY: Era '+n+(v==n?' ¡GANASTE!':' Casi.');}
else if(idx==12){let p=(Math.random()*2000+800).toFixed(2);res.textContent='📈 TRADER: BTC $'+p;}
};
};
});
},1000);
// CADA COSA EN PANTALLA = UNA FUNCION DISTINTA - NICO
setTimeout(()=>{
function buscar(txt){return [...document.querySelectorAll('*')].find(e=>e.children.length==0 && e.textContent.trim().includes(txt));}
function abrir(titulo,icono,color,html){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';u.style.background=color;
u.innerHTML=`<div class="cent-uni-top"><div style="font-size:80px">${icono}</div><h2>${titulo}</h2><p>Dueño: <b>Nico Bejarano</b></p></div><div class="cent-uni-card">${html}</div><button class="cent-uni-exit">⬅ VOLVER</button>`;
document.body.appendChild(u);u.querySelector('.cent-uni-exit').onclick=()=>u.remove();return u;
}
// 1 - AGENTE 01
let a1=buscar('AGENTE 01');if(a1){let c=a1.closest('div,button,span')||a1;c.classList.add('ns-click');c.onclick=()=>{let u=abrir('AGENTE 01','🕵️','linear-gradient(180deg,#020617,#0ea5e9)','<b>🕵️ TU ESPÍA PERSONAL</b><p>Te cuida la web 24hs.</p><input id="x" placeholder="¿Qué querés que vigile?"><button id="go">▶ ACTIVAR VIGILANCIA</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Esperando orden...</div>');u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🕵️ AGENTE 01 ACTIVADO ✅\n\nVigilando: "'+(u.querySelector('#x').value||'Toda tu web')+'"\nEstado: TODO SEGURO\nSi algo pasa, te aviso acá.';};};}
// 2 - AGENTE 02
let a2=buscar('AGENTE 02');if(a2){let c=a2.closest('div,button,span')||a2;c.classList.add('ns-click');c.onclick=()=>{let u=abrir('AGENTE 02','🥷','linear-gradient(180deg,#1a0b2e,#a855f7)','<b>🥷 TU SOMBRA</b><p>Tu segundo agente, más rápido.</p><input id="x" placeholder="¿Qué misión le das?"><button id="go">▶ ENVIAR MISIÓN</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Listo para misión...</div>');u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🥷 AGENTE 02 EN MISIÓN ✅\n\nMisión: "'+(u.querySelector('#x').value||'Proteger a Nico')+'"\nTiempo: 2 min\nResultado: MISIÓN CUMPLIDA 🏆';};};}
// 3 - NS-5 SENTINELA - El robot blanco
let s1=buscar('NS-5 SENTINELA');if(s1){let card=s1.closest('div');let padre=card;for(let i=0;i<4;i++){if(padre.parentElement)padre=padre.parentElement;}padre.classList.add('ns-click');padre.onclick=()=>{let u=abrir('NS-5 SENTINELA','🤖','linear-gradient(180deg,#022c22,#00e5ff)','<b>🤖 TU ROBOT PRINCIPAL</b><p>Ojos Cian • ACTIVO • Te habla.</p><input id="x" placeholder="Hablale a SENTINELA..."><button id="go">▶ HABLAR</button><button id="voz">🔊 QUE HABLE</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">SENTINELA: Hola jefe, estoy activo...</div>');u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🤖 SENTINELA:\n\nEntendí: "'+(u.querySelector('#x').value||'Hola')+'"\nMi respuesta: Lo hago ya, jefe. Vos mandás.';};u.querySelector('#voz').onclick=()=>{try{speechSynthesis.speak(new SpeechSynthesisUtterance('Hola Nico, soy Sentinela, tu robot principal, listo para servirte'));}catch(e){}u.querySelector('#r').textContent='🤖 SENTINELA HABLANDO 🔊';};};}
// 4 - NS-5 V.I.K.I. - El robot ASIMO
let v1=buscar('V.I.K.I.');if(v1){let card=v1.closest('div');let padre=card;for(let i=0;i<4;i++){if(padre.parentElement)padre=padre.parentElement;}padre.classList.add('ns-click');padre.onclick=()=>{let u=abrir('NS-5 V.I.K.I.','🧠','linear-gradient(180deg,#2d0a2e,#ff2d55)','<b>🧠 INTELIGENCIA CENTRAL • MODO ROJO</b><p>⚠️ Está en ALERTA, ella controla todo.</p><input id="x" placeholder="¿Qué orden le das a V.I.K.I.?"><button id="go">▶ DAR ORDEN A V.I.K.I.</button><button id="calma">😌 CALMAR A V.I.K.I.</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">V.I.K.I.: Estoy en ALERTA... esperando tu orden, Nico.</div>');u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🧠 V.I.K.I.:\n\nOrden recibida: "'+(u.querySelector('#x').value||'Controlar todo')+'"\nAnalizando 1000 datos...\n✅ Listo. Todo bajo tu control.';};u.querySelector('#calma').onclick=()=>{u.querySelector('#r').textContent='😌 V.I.K.I. CALMADA ✅\n\nPasó de 🔴 ALERTA a 🟢 TRANQUILA\nAhora te obedece solo a vos.';};};}
// 5 - TITULO UNIDADES
let t1=buscar('UNIDADES NS-5');if(t1){t1.classList.add('ns-click');t1.onclick=()=>{abrir('UNIDADES NS-5','🤖','linear-gradient(180deg,#020617,#38bdf8)','<b>🤖 TODAS TUS UNIDADES</b><p>• SENTINELA: Tu robot bueno<br>• V.I.K.I.: Tu cerebro central<br>• AGENTE 01 y 02: Tus espías<br><br>Todos trabajan para <b>Nico Bejarano</b>.</p><button class="ns-btn" onclick="document.querySelector(\'.cent-uni-exit\').click()">ENTENDIDO, JEFE</button>');};}

},1800);
// ARREGLO TOTAL - CLICK POR PANTALLA - SI O SI FUNCIONA
(function(){
window.prompt=()=>null;
function abrir(titulo,icono,color,html){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';u.style.background=color;
u.innerHTML=`<div class="cent-uni-top"><div style="font-size:80px">${icono}</div><h2>${titulo}</h2><p>Dueño: <b>Nico Bejarano</b></p></div><div class="cent-uni-card">${html}</div><button class="cent-uni-exit">⬅ VOLVER</button>`;
document.body.appendChild(u);
u.querySelector('.cent-uni-exit').onclick=()=>u.remove();
return u;
}
// BOTON DE PRUEBA - Si ves esto, el código anda
let test=document.createElement('button');
test.textContent='🧪 PROBAR SI ANDA';
test.style.cssText='position:fixed;top:10px;right:10px;z-index:99999;padding:10px;border-radius:12px;border:0;background:#22c55e;color:#fff;font-weight:900';
test.onclick=()=>{abrir('PRUEBA OK','✅','linear-gradient(180deg,#022c22,#22c55e)','<b>✅ ¡ANDA, JEFE!</b><p>Si ves esto, el sistema ya funciona.<br>Ahora tocá AGENTE 01, AGENTE 02, SENTINELA o V.I.K.I. en tu web y tienen que abrir.</p><button class="ns-btn" onclick="document.querySelector(\'.cent-uni-exit\').click()">CERRAR PRUEBA</button>');};
document.body.appendChild(test);

document.addEventListener('click',function(e){
let t=e.target.closest('div,button,section,article')||e.target;
let txt=(t.innerText||'').toUpperCase();
let full=document.body.innerText.toUpperCase();
// Detectamos por donde tocaste
let x=e.clientX, y=e.clientY;
let el=document.elementFromPoint(x,y);
let textoEl=(el?el.innerText||'':'')+' '+(el&&el.parentElement?el.parentElement.innerText||'':'')+' '+(el&&el.parentElement&&el.parentElement.parentElement?el.parentElement.parentElement.innerText||'':'');
textoEl=textoEl.toUpperCase();

if(textoEl.includes('AGENTE 01')){
let u=abrir('AGENTE 01','🕵️','linear-gradient(180deg,#020617,#0ea5e9)','<b>🕵️ TU ESPÍA PERSONAL</b><p>Te cuida 24hs.</p><input id="x" placeholder="¿Qué querés que vigile?"><button id="go">▶ ACTIVAR VIGILANCIA</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Esperando...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🕵️ AGENTE 01 ACTIVADO ✅\nVigilando: "'+(u.querySelector('#x').value||'Toda tu web')+'"\nEstado: TODO SEGURO';};
}
else if(textoEl.includes('AGENTE 02')){
let u=abrir('AGENTE 02','🥷','linear-gradient(180deg,#1a0b2e,#a855f7)','<b>🥷 TU SOMBRA</b><p>Tu segundo agente.</p><input id="x" placeholder="¿Qué misión le das?"><button id="go">▶ ENVIAR MISIÓN</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Listo...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🥷 AGENTE 02 EN MISIÓN ✅\nMisión: "'+(u.querySelector('#x').value||'Proteger a Nico')+'"\nResultado: MISIÓN CUMPLIDA 🏆';};
}
else if(textoEl.includes('V.I.K.I.')){
let u=abrir('NS-5 V.I.K.I.','🧠','linear-gradient(180deg,#2d0a2e,#ff2d55)','<b>🧠 INTELIGENCIA CENTRAL • MODO ROJO</b><p>Está en ALERTA.</p><input id="x" placeholder="¿Qué orden le das?"><button id="go">▶ DAR ORDEN</button><button id="calma">😌 CALMAR A V.I.K.I.</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">V.I.K.I.: Estoy en ALERTA...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🧠 V.I.K.I.: Orden recibida "'+(u.querySelector('#x').value||'Controlar todo')+'"\n✅ Listo. Todo bajo tu control.';};
u.querySelector('#calma').onclick=()=>{u.querySelector('#r').textContent='😌 V.I.K.I. CALMADA ✅\nPasó de 🔴 ALERTA a 🟢 TRANQUILA';};
}
else if(textoEl.includes('NS-5 SENTINELA') || textoEl.includes('SENTINELA') && !textoEl.includes('CENTINELA')){
let u=abrir('NS-5 SENTINELA','🤖','linear-gradient(180deg,#022c22,#00e5ff)','<b>🤖 TU ROBOT PRINCIPAL</b><p>Ojos Cian • ACTIVO</p><input id="x" placeholder="Hablale a SENTINELA..."><button id="go">▶ HABLAR</button><button id="voz">🔊 QUE HABLE</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">SENTINELA: Hola jefe...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🤖 SENTINELA:\nEntendí: "'+(u.querySelector('#x').value||'Hola')+'"\nLo hago ya, jefe.';};
u.querySelector('#voz').onclick=()=>{try{speechSynthesis.speak(new SpeechSynthesisUtterance('Hola Nico, soy Sentinela, tu robot principal'));}catch(e){}u.querySelector('#r').textContent='🤖 HABLANDO 🔊';};
}
},true);
})();
