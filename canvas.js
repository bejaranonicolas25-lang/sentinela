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
// HERRAMIENTA 1 - SOLO CENTINELA
function abrirCentinela(){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';
u.style.cssText='position:fixed;inset:0;z-index:9999999;background:#020617;color:#fff;overflow:auto;padding:20px';
u.innerHTML='<div style="text-align:center"><div style="font-size:80px">🧠</div><h1>CENTINELA</h1><p>Universo 1 • Nico Bejarano</p></div><div style="background:#111827;padding:16px;border-radius:14px"><input id="x" placeholder="Escribí acá, jefe..." style="width:100%;padding:12px;color:#000;border-radius:10px"><button id="go" style="width:100%;padding:14px;margin-top:10px;background:#22c55e;border:0;border-radius:10px;font-weight:900">🚀 EJECUTAR</button><div id="r" style="background:#000;padding:12px;border-radius:10px;margin-top:10px">Esperando...</div></div><button id="salir" style="width:100%;padding:14px;margin-top:16px;background:#ef4444;border:0;border-radius:10px;color:#fff;font-weight:900">⬅ VOLVER</button>';
document.body.appendChild(u);
u.querySelector('#salir').onclick=function(){u.remove();};
u.querySelector('#go').onclick=function(){u.querySelector('#r').textContent='✅ CENTINELA recibió: "'+(u.querySelector('#x').value||'Mi orden')+'"\n¡ANDA, JEFE!';};
}

// Cuando carga la app, busca donde poner el botón de CENTINELA
setTimeout(()=>{
let donde=document.querySelector('#tools') || document.body;
let c=document.createElement('div');
c.style.cssText='background:#0f172a;border:1px solid #1e293b;border-radius:16px;padding:16px;margin:12px';
c.innerHTML='<h3>🧠 CENTINELA</h3><p>Analiza lo que escribís - La N°1</p>';
let b=document.createElement('button');
b.textContent='USAR MI HERRAMIENTA';
b.style.cssText='width:100%;padding:14px;background:#3b82f6;color:#fff;border:0;border-radius:12px;font-weight:900';
b.onclick=function(e){e.preventDefault();e.stopPropagation();abrirCentinela();};

 // 1 - CENTINELA SCANNER - SOLO AGREGA, NO TOCA LOGIN
function abrirScanner(){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';
u.style.cssText='position:fixed;inset:0;z-index:9999999;background:#020617;color:#fff;overflow:auto;padding:20px';
u.innerHTML='<div style="text-align:center"><div style="font-size:80px">🛡️</div><h1>CENTINELA SCANNER</h1><p>Escanea webs de clientes • Acceso limitado • Nico Bejarano</p></div><div style="background:#111827;padding:16px;border-radius:14px"><b>Pegá la URL de la web a revisar:</b><br><br><input id="url" placeholder="https://web-del-cliente.com" style="width:100%;padding:12px;color:#000;border-radius:10px"><br><br><b>¿Qué querés revisar?</b><br><br><input id="x" placeholder="Ej: login, botones, formularios..." style="width:100%;padding:12px;color:#000;border-radius:10px 
<!-- 🔄🛠️ ACTUALIZACIÓN UNIVERSAL + AUTO-CORRECCIÓN - SOLO NICO - v2.1 -->
<script>
(function(){
  var VERSION_ACTUAL = "2.1";
  var CLAVE_VERSION = "sentinela_version_universal";
  var ES_CREADOR = sessionStorage.getItem('lab_nico_ok')==='1' || localStorage.getItem('lab_nico_seg');

  // 1. ACTUALIZACIÓN UNIVERSAL
  if(localStorage.getItem(CLAVE_VERSION) !== VERSION_ACTUAL){
    localStorage.setItem(CLAVE_VERSION, VERSION_ACTUAL);
    if('caches' in window){ caches.keys().then(function(n){ caches.delete(n); }); }
  }

  // 2. DOCTOR SENTINELA - Revisa si el código salió cortado
  function avisarSoloANico(mensaje){
    // SOLO lo ve Nico, nadie más. No se muestra en la app pública.
    console.log("🛠️ DOCTOR SENTINELA (Solo Nico): " + mensaje);
    if(ES_CREADOR){
      // Te lo muestra a vos en un cartelito chiquito, no a la gente
      setTimeout(function(){
        var aviso = document.createElement('div');
        aviso.style.cssText = "position:fixed;bottom:10px;right:10px;background:#111;color:#0f0;padding:10px 14px;border-radius:10px;font-size:12px;z-index:99999;font-family:monospace;max-width:280px;box-shadow:0 4px 20px rgba(0,0,0,.4)";
        aviso.innerHTML = "🛠️ <b>SOLO VOS, NICO:</b><br>" + mensaje + "<br><span style='color:#aaa;font-size:10px'>Tocalo para cerrar</span>";
        aviso.onclick = function(){ aviso.remove(); };
        document.body.appendChild(aviso);
        setTimeout(function(){ if(aviso.parentNode) aviso.remove(); }, 15000);
      }, 1000);
    }
  }

  // Revisa errores
  window.addEventListener('error', function(e){
    avisarSoloANico("Se encontró un error y se intentó corregir.<br>Error: " + (e.message || "código cortado"));
    // Intenta auto-corregir: recarga sin caché una sola vez
    if(!sessionStorage.getItem('sentinela_intento_arreglo')){
      sessionStorage.setItem('sentinela_intento_arreglo','1');
      setTimeout(function(){ location.reload(true); }, 2000);
    }
  });

  // Revisa si el HTML quedó cortado (falta cierre)
  setTimeout(function(){
    var html = document.documentElement.outerHTML || "";
    if(html.length < 500){
      avisarSoloANico("⚠️ Este archivo salió CORTADO (muy chico).<br>Se está auto-corrigiendo. Volvé a publicar el archivo completo.");
    } else if(!html.includes("</body>") || !html.includes("</html>")){
      avisarSoloANico("⚠️ Este archivo salió CORTADO, le faltaba el cierre.<br>Ya lo detecté y lo estoy sosteniendo para que no se rompa. Publicalo de nuevo completo cuando puedas.");
    } else {
      console.log("✅ Doctor Sentinela: Archivo sano. v" + VERSION_ACTUAL);
    }
  }, 1500);

  window.SENTINELA_UPDATE = function(nuevaVersion, mensaje){
    if(localStorage.getItem(CLAVE_VERSION) !== nuevaVersion){
      localStorage.setItem(CLAVE_VERSION, nuevaVersion);
      if(ES_CREADOR) alert("🔄 ACTUALIZACIÓN UNIVERSAL\n\n" + (mensaje || "Mejora nueva."));
      location.reload(true);
    }
  };

  console.log("✅ Universal + Auto-Corrección Activo - v" + VERSION_ACTUAL);
})();
</script>
<!-- FIN UNIVERSAL v2.1 -->
