// CENTINELA - CANVAS.JS LIMPIO - NICO BEJARANO - SIN PARCHES
(function(){
const NOMBRES=["CENTINELA","SENTINEL ACCORDED","CENTINELA VAULT","CENTINELA HABLA","CENTINELA CLOUD","CENTINELA CHECKBOOK","CENTINELA SETTINGS","CENTINELA OFFICE","CENTINELA SHARE","CENTINELA CODE","CENTINELA ACADEMY","CENTINELA PLAY","CENTINELA TRADER"];
const EMOJIS=["🧠","✍️","🔐","🗣️","☁️","✅","⚙️","📄","📤","💻","🎓","🎮","📈"];
const DESCS=["Analiza lo que escribís","Reescribe más claro y pro","Guarda tus secretos","Habla lo que escribís","Crea tu automatización","Tu checklist","Cambia modo claro/oscuro","Descarga tu texto","Comparte tu idea","Crea tu código","Aprendé jugando","Adiviná el número","Precio BTC y análisis"];
const AGENTES=["🕵️ AGENTE 01 - VIGILANTE","✍️ AGENTE 02 - ESCRITOR","💻 AGENTE 03 - PROGRAMADOR","🎓 AGENTE 04 - PROFESOR","📈 AGENTE 05 - TRADER"];

function css(){
if(document.getElementById('cent-css')) return;
let s=document.createElement('style');s.id='cent-css';
s.textContent='body{margin:0;background:#020617;color:#fff;font-family:system-ui} .cent-wrap{max-width:520px;margin:0 auto;padding:16px;padding-bottom:80px} .cent-top{display:flex;justify-content:space-between;gap:8px} .cent-top button{flex:1;padding:12px;border:0;border-radius:12px;font-weight:900;cursor:pointer} .cent-card{background:#0f172a;border:1px solid #1e293b;border-radius:16px;padding:16px;margin:12px 0} .cent-card h3{margin:0} .cent-btn{width:100%;padding:14px;margin-top:12px;background:#3b82f6;color:#fff;border:0;border-radius:12px;font-weight:900;cursor:pointer} .cent-btn-agente{background:#22c55e} .cent-uni{position:fixed;inset:0;z-index:9999999;background:#020617;color:#fff;overflow:auto;padding:20px} .cent-uni input{width:100%;padding:12px;border-radius:10px;color:#000;box-sizing:border-box} .cent-uni button{width:100%;padding:14px;margin-top:10px;border:0;border-radius:10px;font-weight:900;cursor:pointer}';
document.head.appendChild(s);
}

function abrirUniverso(i){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';
u.innerHTML='<div style="text-align:center"><div style="font-size:80px">'+EMOJIS[i]+'</div><h1>'+NOMBRES[i]+'</h1><p>Universo '+(i+1)+' / 13 • Dueño: Nico Bejarano</p></div><div style="background:#111827;padding:16px;border-radius:14px"><b>▶ USAR</b><br><br><input id="x" placeholder="Escribí acá, jefe..."><button id="go" style="background:#22c55e;color:#fff">🚀 EJECUTAR</button><div id="r" style="background:#000;padding:12px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Esperando tu orden...</div></div><button id="salir" style="background:#ef4444;color:#fff">⬅ VOLVER</button>';
document.body.appendChild(u);
u.querySelector('#salir').onclick=function(){u.remove();};
u.querySelector('#go').onclick=function(){
let v=u.querySelector('#x').value||'Mi orden';
let r=u.querySelector('#r');
if(i===2){let a=JSON.parse(localStorage.getItem('vault_nico')||'[]');a.push(v);localStorage.setItem('vault_nico',JSON.stringify(a));r.textContent='🔐 VAULT GUARDADO ✅\nTenés '+a.length+' guardados.';}
else if(i===3){try{speechSynthesis.speak(new SpeechSynthesisUtterance(v));}catch(e){}r.textContent='🗣️ HABLA 🔊\nDiciendo: "'+v+'"';}
else if(i===5){r.textContent='✅ CHECKBOOK:\n[ ] '+v;}
else if(i===6){document.body.style.filter=document.body.style.filter?'':'invert(1)';r.textContent='⚙️ SETTINGS: Modo cambiado ✅';}
else if(i===7){let b=new Blob([v],
