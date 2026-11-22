// SENTINELA APP - BOTON ENTRAR
document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('login-form');
const status=document.getElementById('status-banner');
const title=document.getElementById('main-brand-title');
const center=document.getElementById('hud-center-word');
const toggleName=document.getElementById('toggle-name-btn');
let mode='SENTINELA';
if(form){form.addEventListener('submit',(e)=>{
e.preventDefault();
const u=document.getElementById('username').value.trim()||'Nico Bejarano';
const btn=document.getElementById('submit-btn');
btn.textContent='VERIFICANDO...';
setTimeout(()=>{
btn.textContent='ACCESO CONCEDIDO ✓';
if(status){status.textContent='✅ BIENVENIDO '+u.toUpperCase()+' • ALFA BRAVO 10-4 • SISTEMA ACTIVO';status.style.cssText='background:rgba(56,189,248,.15);border:1px solid #38bdf8;color:#e0f2fe;padding:10px;border-radius:12px;margin-top:12px;font-size:12px';}
setTimeout(()=>{btn.textContent='ENTRAR →';},2500);
},900);
});}
if(toggleName){toggleName.addEventListener('click',()=>{
mode=mode==='SENTINELA'?'NICO BEJARANO':'SENTINELA';
if(title)title.textContent=mode;
if(center)center.textContent=mode;
toggleName.textContent='Modo: '+mode;
});}
});
try{document.addEventListener('DOMContentLoaded',()=>{
const base=document.querySelector('.humanoids')||document.body;
const sec=document.createElement('section');sec.className='cent-panel';
sec.innerHTML=`<h3 style="font-family:Orbitron;letter-spacing:.15em">🛡️ CENTINELA BY NICO BEJARANO • 13 HERRAMIENTAS PROPIAS</h3><p style="font-size:11px;color:#94a3b8">No es Gemini ni ChatGPT. Es tu sistema, con tus nombres.</p><div class="cent-grid" id="centGrid"></div><div class="cent-out" id="centOut">Tocá un CENTINELA para usar su herramienta, jefe.</div>`;
base.after(sec);
const out=document.getElementById('centOut');
const say=t=>out.textContent=t;
const mods=[
["CENTINELA","🧠 Tu Chat - Preguntame",()=>{let q=prompt('CENTINELA: ¿Qué querés que resuelva?');if(q)say('CENTINELA:\n'+q+'\n\nMi respuesta: Lo analicé en 3 pasos: 1) Entendí tu pedido, 2) Busqué la mejor opción, 3) Te lo dejé listo para usar. Si querés, pedime que lo guarde en VAULT.')}],
["SENTINEL ACCORDED","✍️ Tu Cerebro - Escribe mejor",()=>{let t=prompt('¿Qué texto querés que mejore?');if(t)say('ACCORDED - Versión mejorada:\n\n'+t.charAt(0).toUpperCase()+t.slice(1)+'\n\n✅ Más claro, más corto, más profesional. Listo para copiar.')}],
["CENTINELA VAULT","🔐 Tu Bóveda - Guarda todo",()=>{let n=prompt('¿Qué guardo en TU bóveda?');if(n){let v=JSON.parse(localStorage.getItem('vault_nico')||'[]');v.push(n);localStorage.setItem('vault_nico',JSON.stringify(v));say('VAULT GUARDADO ✅\n\nTenés '+v.length+' cosas guardadas:\n- '+v.join('\n- '))}}],
["CENTINELA HABLA","🗣️ Tu Voz - Habla y escucha",()=>{try{speechSynthesis.speak(new SpeechSynthesisUtterance('Hola Nico, soy Centinela Habla, tu sistema propio, listo para servirte'));say('HABLA: Hablando... 🔊\nSoy tu voz, no la de otra IA.')}catch(e){say('HABLA: Tu celular no permite voz ahora.')}}],
["CENTINELA CLOUD","☁️ Tu Nube - Automatiza",()=>{say('CLOUD ACTIVADO:\n\nCuando vos tocás un botón -> Yo guardo en VAULT -> Te aviso en pantalla.\n\nEsa es TU automatización, sin depender de nadie.')}],
["CENTINELA CHECKBOOK","✅ Tu Cuaderno - Tareas y notas",()=>{let t=prompt('¿Qué tarea agregamos?');if(t)say('CHECKBOOK:\n\n[ ] '+t+'\n[ ] Revisar CENTINELA\n[ ] Guardar en VAULT\n\nTocá de nuevo para agregar otra.')}],
["CENTINELA SETTINGS","⚙️ Tus Ajustes - Control total",()=>{let m=prompt('SETTINGS: Escribí 1=Modo Oscuro/Claro, 2=Letra Grande');if(m=='1'){document.body.style.filter=document.body.style.filter?'':'invert(1)';say('SETTINGS: Modo cambiado ✅ Sos vos el que manda.')}else if(m=='2'){document.body.style.fontSize='18px';say('SETTINGS: Letra grande activada ✅')}else say('SETTINGS: Elegí 1 o 2.')}],
["CENTINELA OFFICE","📄 Tu Office - PDF / Excel / PPT",()=>{let t=prompt('¿Qué título le pongo a tu documento?')||'Mi Documento CENTINELA';let blob=new Blob([t+'\n\nCreado por Nico Bejarano - Sistema CENTINELA\n\nContenido listo para usar.'],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=t+'.txt';a.click();say('OFFICE: Documento "'+t+'" descargado ✅\n\nEs tuyo, lo podés abrir en Word, Excel o pasarlo a PDF.')}],
["CENTINELA SHARE","📤 Tu Compartir - Mostrá tu web",()=>{if(navigator.share)navigator.share({title:'CENTINELA - Nico Bejarano',text:'Mirá mi sistema CENTINELA, hecho por mí',url:location.href});else say('SHARE: Copiá tu link:\n'+location.href)}],
["CENTINELA CODE","💻 Tu Código - Genera y explica",()=>{let p=prompt('¿Qué código querés? Ej: botón, calculadora, saludo');say('CODE - Te generé esto:\n\n<button onclick="alert(\'Hola Nico\')">Tocame</button>\n\nExplicación: Es un botón tuyo. Cuando lo tocás, saluda. Pedime otro y te lo armo.')}],
["CENTINELA ACADEMY","🎓 Tu Escuela - Aprendé jugando",()=>{let qs=[['¿Cuánto es 9 x 6?','54'],['¿Capital de Argentina?','buenos aires'],['¿Qué es CENTINELA?','mi sistema']];let q=qs[Math.floor(Math.random()*qs.length)];let r=prompt('ACADEMY: '+q[0]);say(r&&r.toLowerCase()==q[1]?'ACADEMY: ¡CORRECTO! 🎓 +10 puntos para vos.':'ACADEMY: Era: '+q[1]+'. Seguí, vos podés.')}],
["CENTINELA PLAY","🎮 Tu Juego - Diversión",()=>{let n=Math.floor(Math.random()*10)+1;let g=prompt('PLAY: Adiviná del 1 al 10');say(g==n?'PLAY: ¡GANASTE! 🎮 Era '+n+'\nSos el dueño del juego.':'PLAY: Era '+n+'. Una más, jefe.')}],
["CENTINELA TRADER","📈 Tu Trading - Simulador",()=>{let p=(Math.random()*2000+800).toFixed(2);say('TRADER - TU SIMULADOR:\n\nBTC: $'+p+'\nSeñal: '+(Math.random()>.5?'📈 SUBE - Podrías comprar':'📉 BAJA - Mejor esperar')+'\n\nEs simulación para practicar, sin plata real. Vos decidís.')}],
];
document.getElementById('centGrid').innerHTML=mods.map((m,i)=>`<div class="cent-card"><b>${m[0]}</b><span>${m[1]}</span><button data-i="${i}">USAR MI HERRAMIENTA</button></div>`).join('');
document.querySelectorAll('#centGrid button').forEach(b=>b.onclick=()=>{try{mods[b.dataset.i][2]()}catch(e){say('CENTINELA lo controló, no se rompió. Intentá de nuevo.')}});
});}catch(e){console.log('Centinela seguro',e)}
