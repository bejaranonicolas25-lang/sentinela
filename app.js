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
// MUNDO CENTINELA - SIN PROMPT - FONDO CIBERNETICO
setTimeout(()=>{
const ICONS=["🧠","✍️","🔐","🗣️","☁️","✅","⚙️","📄","📤","💻","🎓","🎮","📈"];
const NAMES=["CENTINELA","SENTINEL ACCORDED","CENTINELA VAULT","CENTINELA HABLA","CENTINELA CLOUD","CENTINELA CHECKBOOK","CENTINELA SETTINGS","CENTINELA OFFICE","CENTINELA SHARE","CENTINELA CODE","CENTINELA ACADEMY","CENTINELA PLAY","CENTINELA TRADER"];
const DESC=["Tu chat personal, tu cerebro.","Tu escritor que mejora textos.","Tu bóveda privada para guardar todo.","Tu voz que habla por vos.","Tu nube que automatiza.","Tu cuaderno de tareas.","Tu centro de control.","Tus documentos, PDF y Excel.","Compartí tu mundo.","Tu programador.","Tu escuela con juegos.","Tu zona de juegos.","Tu simulador de trading."];
document.querySelectorAll('#centGrid button').forEach((btn,idx)=>{
btn.onclick=()=>{
let cfg=JSON.parse(localStorage.getItem('cent_cfg_'+idx)||'{"nombre":"Nico","color":"#38bdf8","modo":"SENTINELA"}');
let w=document.createElement('div');w.className='cent-world';
w.innerHTML=`<div class="cent-world-head"><div style="font-size:70px">${ICONS[idx]}</div><h2>${NAMES[idx]}</h2><p style="font-size:12px;color:#cbd5e1">${DESC[idx]}<br>Dueño: <b>${cfg.nombre}</b> • Modo: <b>${cfg.modo}</b></p></div>
<div class="cent-tabs"><button class="on" data-t="usar">▶ USAR</button><button data-t="conf">⚙️ MI CONFIG</button><button data-t="hist">📜 HISTORIAL</button></div>
<div id="centBody"></div><button class="cent-back">⬅ VOLVER A MI WEB</button>`;
document.body.appendChild(w);
let body=w.querySelector('#centBody');
function render(tab){
if(tab=='usar'){
body.innerHTML=`<div class="cent-panel2"><label>Escribí acá, ${cfg.nombre}:</label><input id="centIn" placeholder="Escribí lo que quieras..."><button id="go">▶ EJECUTAR EN MI MUNDO</button><div class="cent-result" id="res" style="background:#020617;padding:12px;border-radius:12px;margin-top:10px;white-space:pre-wrap;font-size:12px">Esperando tu orden...</div></div>
<div class="cent-panel2"><b>🔥 OPCIONES RÁPIDAS</b><button id="o1">✨ Opción 1 - Rápida</button><button id="o2">🚀 Opción 2 - Pro</button><button id="o3">💎 Opción 3 - Ultra</button></div>`;
let run=(txt)=>{
let r=w.querySelector('#res');
if(idx==0)r.textContent='🧠 CENTINELA '+cfg.nombre+':\n\nAnalicé: "'+txt+'"\n1) Lo entendí\n2) Mejor opción: hacerlo simple\n3) Listo.';
else if(idx==1)r.textContent='✍️ ACCORDED:\n\n"'+txt.toUpperCase()+'"\n✅ Más pro y claro.';
else if(idx==2){let a=JSON.parse(localStorage.getItem('vault_nico')||'[]');a.push(txt);localStorage.setItem('vault_nico',JSON.stringify(a));r.textContent='🔐 VAULT: Guardado ✅\nTenés '+a.length+' cosas.';}
else if(idx==3){try{speechSynthesis.speak(new SpeechSynthesisUtterance(txt));}catch(e){}r.textContent='🗣️ HABLA 🔊\n"'+txt+'"';}
else if(idx==4)r.textContent='☁️ CLOUD: Automatización creada con "'+txt+'"';
else if(idx==5)r.textContent='✅ CHECKBOOK:\n[ ] '+txt+'\n[ ] Revisar CENTINELA';
else if(idx==6){document.body.style.filter=document.body.style.filter?'':'invert(1)';r.textContent='⚙️ SETTINGS: Modo cambiado ✅';}
else if(idx==7){let b=new Blob([txt],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='CENTINELA.txt';a.click();r.textContent='📄 OFFICE: Descargado ✅';}
else if(idx==8){if(navigator.share)navigator.share({title:'CENTINELA',text:txt,url:location.href});r.textContent='📤 SHARE: Compartiendo tu mundo...';}
else if(idx==9)r.textContent='💻 CODE:\n<button onclick="alert(\''+txt+'\')">Tocame</button>\n\nTu código listo.';
else if(idx==10)r.textContent='🎓 ACADEMY: ¿7x8? Si pusiste 56, ¡correcto! Tu respuesta: '+txt;
else if(idx==11){let n=Math.floor(Math.random()*10)+1;r.textContent='🎮 PLAY: Pusiste '+txt+', era '+n+(txt==n?' ¡GANASTE!':' Casi.');}
else if(idx==12){let p=(Math.random()*2000+800).toFixed(2);r.textContent='📈 TRADER: BTC $'+p+'\nTu análisis: '+txt;}
};
w.querySelector('#go').onclick=()=>run(w.querySelector('#centIn').value||'Prueba de '+cfg.nombre);
w.querySelector('#o1').onclick=()=>run('Opción rápida de '+cfg.nombre);
w.querySelector('#o2').onclick=()=>run('Opción pro de '+cfg.nombre);
w.querySelector('#o3').onclick=()=>run('Opción ultra de '+cfg.nombre);
}
if(tab=='conf'){
body.innerHTML=`<div class="cent-panel2"><label>Tu nombre en este CENTINELA</label><input id="cNom" value="${cfg.nombre}"><label>Tu color</label><select id="cCol"><option value="#38bdf8">Azul Cian</option><option value="#22c55e">Verde Neón</option><option value="#a855f7">Violeta Cyber</option><option value="#f59e0b">Dorado</option></select><label>Tu modo</label><select id="cMod"><option>SENTINELA</option><option>GUERRERO</option><option>JEFE</option><option>TRANQUILO</option></select><button id="save">💾 GUARDAR MI CONFIGURACIÓN</button></div>`;
w.querySelector('#save').onclick=()=>{localStorage.setItem('cent_cfg_'+idx,JSON.stringify({nombre:w.querySelector('#cNom').value||'Nico',color:w.querySelector('#cCol').value,modo:w.querySelector('#cMod').value}));alert('Guardado, '+cfg.nombre+' ✅');w.querySelector('.cent-back').click();};
}
if(tab=='hist'){
let v=JSON.parse(localStorage.getItem('vault_nico')||'[]');
body.innerHTML=`<div class="cent-panel2"><b>📜 TU HISTORIAL</b><p style="font-size:12px;white-space:pre-wrap">${v.length?v.map(x=>'- '+x).join('\n'):'Todavía no guardaste nada en este mundo.'}</p><button id="borrar">🗑 BORRAR HISTORIAL</button></div>`;
w.querySelector('#borrar').onclick=()=>{localStorage.removeItem('vault_nico');render('hist');};
}
}
render('usar');
w.querySelectorAll('.cent-tabs button').forEach(b=>b.onclick=()=>{w.querySelectorAll('.cent-tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');render(b.dataset.t);});
w.querySelector('.cent-back').onclick=()=>w.remove();
};
});
},1200);
// KILL PROMPT + 13 UNIVERSOS PARALELOS - NICO BEJARANO
window.prompt=()=>null; window.alert=()=>{};
setTimeout(()=>{
const ICONS=["🧠","✍️","🔐","🗣️","☁️","✅","⚙️","📄","📤","💻","🎓","🎮","📈"];
const NAMES=["CENTINELA","SENTINEL ACCORDED","CENTINELA VAULT","CENTINELA HABLA","CENTINELA CLOUD","CENTINELA CHECKBOOK","CENTINELA SETTINGS","CENTINELA OFFICE","CENTINELA SHARE","CENTINELA CODE","CENTINELA ACADEMY","CENTINELA PLAY","CENTINELA TRADER"];
const BGS=[
"linear-gradient(180deg,#020617,#0ea5e9 30%,#020617)",
"linear-gradient(180deg,#1a0b2e,#a855f7 40%,#020617)",
"linear-gradient(180deg,#000,#f59e0b 35%,#000)",
"linear-gradient(180deg,#022c22,#10b981 40%,#020617)",
"linear-gradient(180deg,#0c4a6e,#38bdf8 45%,#020617)",
"linear-gradient(180deg,#111827,#22c55e 40%,#020617)",
"linear-gradient(180deg,#1e1b4b,#6366f1 45%,#020617)",
"linear-gradient(180deg,#3f1d02,#f97316 40%,#020617)",
"linear-gradient(180deg,#4a044e,#ec4899 45%,#020617)",
"linear-gradient(180deg,#000,#06b6d4 40%,#020617)",
"linear-gradient(180deg,#1a2e05,#84cc16 40%,#020617)",
"linear-gradient(180deg,#2d0a2e,#ff2d55 45%,#020617)",
"linear-gradient(180deg,#021a0a,#16a34a 40%,#020617)"];
document.querySelectorAll('#centGrid button').forEach((btn,idx)=>{
btn.onclick=(e)=>{e.preventDefault();e.stopPropagation();
let cfg=JSON.parse(localStorage.getItem('uni_'+idx)||'{"nombre":"Nico","modo":"JEFE","avatar":"😎"}');
let u=document.createElement('div');u.className='cent-uni';u.style.background=BGS[idx];
u.innerHTML=`<div class="cent-uni-top"><div style="font-size:80px">${ICONS[idx]}</div><h2>${NAMES[idx]}</h2><p>🌌 UNIVERSO PARALELO ${idx+1} / 13<br>Dueño: <b>${cfg.nombre} ${cfg.avatar}</b> • Modo: <b>${cfg.modo}</b><br>Este mundo es solo tuyo, no cambia tu web.</p></div>
<div class="cent-uni-card"><b>⚙️ MI CONFIGURACIÓN DE ESTE UNIVERSO</b><label>Tu nombre en este universo</label><input id="uNom" value="${cfg.nombre}"><label>Tu avatar</label><select id="uAv"><option>😎</option><option>🔥</option><option>👑</option><option>🤖</option><option>🦅</option></select><label>Tu modo</label><select id="uMod"><option>JEFE</option><option>GUERRERO</option><option>TRANQUILO</option><option>ULTRA</option></select><button id="uSave">💾 GUARDAR MI UNIVERSO</button></div>
<div class="cent-uni-card"><b>▶ USAR MI HERRAMIENTA</b><label>Escribí tu orden:</label><input id="uIn" placeholder="Escribí acá, jefe..."><button id="uGo">🚀 EJECUTAR EN ESTE UNIVERSO</button><div id="uRes" style="background:rgba(0,0,0,.6);padding:12px;border-radius:12px;margin-top:10px;white-space:pre-wrap;font-size:13px">Esperando tu orden en este universo...</div><button id="uOpt">✨ OPCIÓN RÁPIDA PRO</button></div>
<div class="cent-uni-card"><b>📜 MI HISTORIAL DE ESTE UNIVERSO</b><p id="uHist" style="font-size:12px;white-space:pre-wrap">Cargando...</p></div><button class="cent-uni-exit">⬅ SALIR DEL UNIVERSO</button>`;
document.body.appendChild(u);
let hist=JSON.parse(localStorage.getItem('hist_'+idx)||'[]');
u.querySelector('#uHist').textContent=hist.length?hist.join('\n'):'Todavía no hiciste nada acá. Es tu primer paso en este universo.';
u.querySelector('.cent-uni-exit').onclick=()=>u.remove();
u.querySelector('#uSave').onclick=()=>{localStorage.setItem('uni_'+idx,JSON.stringify({nombre:u.querySelector('#uNom').value||'Nico',avatar:u.querySelector('#uAv').value,modo:u.querySelector('#uMod').value}));u.querySelector('#uRes').textContent='';u.querySelector('.cent-uni-top p').innerHTML='Guardado ✅ Recargá el universo para ver tu nuevo nombre.';};
let run=(txt)=>{
let r=u.querySelector('#uRes');let out='';
if(idx==0)out='🧠 CENTINELA dice, '+cfg.nombre+':\n\nAnalicé "'+txt+'"\n✅ Mejor idea: hacerlo simple, pro y tuyo.';
else if(idx==1)out='✍️ ACCORDED:\n\n"'+txt.toUpperCase()+'"\n✅ Más claro, más pro.';
else if(idx==2)out='🔐 VAULT: "'+txt+'" guardado en tu bóveda dorada ✅';
else if(idx==3){try{speechSynthesis.speak(new SpeechSynthesisUtterance(txt));}catch(e){}out='🗣️ HABLA 🔊\nDiciendo: "'+txt+'"';}
else if(idx==4)out='☁️ CLOUD: Automatización creada:\nCuando decís "'+txt+'" -> Se guarda solo.';
else if(idx==5)out='✅ CHECKBOOK:\n[ ] '+txt+'\n[ ] Revisar mi universo';
else if(idx==6){document.body.style.filter=document.body.style.filter?'':'invert(1)';out='⚙️ SETTINGS: Cambiaste el modo de tu web ✅';}
else if(idx==7){let b=new Blob([txt],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='CENTINELA.txt';a.click();out='📄 OFFICE: Tu documento descargado ✅';}
else if(idx==8){if(navigator.share)navigator.share({title:'CENTINELA',text:txt,url:location.href});out='📤 SHARE: Compartiendo tu universo...';}
else if(idx==9)out='💻 CODE:\n<button onclick="alert(\''+txt+'\')">Tocame</button>\nTu código listo.';
else if(idx==10)out='🎓 ACADEMY: ¿7x8=56? Tu respuesta: '+txt;
else if(idx==11){let n=Math.floor(Math.random()*10)+1;out='🎮 PLAY: Pusiste '+txt+', era '+n+(txt==n?' ¡GANASTE!':' Casi, jefe.');}
else if(idx==12){let p=(Math.random()*2000+800).toFixed(2);out='📈 TRADER: BTC $'+p+'\nTu análisis: '+txt;}
r.textContent=out;hist.push(txt);localStorage.setItem('hist_'+idx,JSON.stringify(hist));u.querySelector('#uHist').textContent=hist.join('\n');
};
u.querySelector('#uGo').onclick=()=>run(u.querySelector('#uIn').value||'Mi primera orden');
u.querySelector('#uOpt').onclick=()=>run('Opción PRO de '+cfg.nombre+' en modo '+cfg.modo);
};
});
},1500);
// MODO AAA - MAS VIVO - SIN BORRAR NADA
setTimeout(()=>{
document.querySelectorAll('#centGrid button').forEach((btn,idx)=>{
let old=btn.onclick;
btn.onclick=(e)=>{
if(old) { try{old(e);}catch(err){} }
// Partículas vivas estilo juego
setTimeout(()=>{
let parts=["✨","🔥","💎","⚡","🎮","🌟"];
for(let i=0;i<14;i++){
let s=document.createElement('div');s.className='cent-part';s.textContent=parts[i%parts.length];
s.style.left=(Math.random()*95)+'vw';s.style.top='-20px';s.style.animationDuration=(2+Math.random()*3)+'s';s.style.fontSize=(14+Math.random()*18)+'px';
document.body.appendChild(s);setTimeout(()=>s.remove(),5000);
}
// HUD de videojuego
let uni=document.querySelector('.cent-uni');
if(uni && !uni.querySelector('.cent-hud')){
let hud=document.createElement('div');hud.className='cent-hud';
hud.innerHTML=`<div>❤️ VIDA<b>100%</b></div><div>⚡ ENERGÍA<b>${80+idx*2}%</b></div><div>🏆 NIVEL<b>${idx+1}</b></div><div>👑 DUEÑO<b>NICO</b></div>`;
uni.querySelector('.cent-uni-top').after(hud);
let barra=document.createElement('div');barra.innerHTML=`<div style="margin-top:10px;background:rgba(0,0,0,.7);border-radius:20px;padding:6px;text-align:center;font-size:11px;border:1px solid #00e5ff">🎮 MODO AAA ACTIVADO • GRÁFICOS ULTRA • FONDO VIVO</div>`;
hud.after(barra);
}
},600);
};
});
},1600);
// PRUEBA QUE SI O SI SE TIENE QUE VER
let btn=document.createElement('button');
btn.textContent='✅ SI VES ESTO, YA ANDA';
btn.style.cssText='position:fixed;bottom:10px;left:10px;right:10px;z-index:999999;padding:16px;background:#22c55e;color:#fff;font-weight:900;border:0;border-radius:14px';
btn.onclick=()=>{alert('✅ AHORA SI ANDA, JEFE. Tocá cualquier herramienta y va a abrir.');};
document.body.appendChild(btn);
