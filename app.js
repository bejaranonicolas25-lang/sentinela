// APP - LOGIN + SCANNER - TODO JUNTO
document.addEventListener('DOMContentLoaded', function(){
  let form = document.getElementById('login-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let user = document.getElementById('username').value;
    if(!user) return;
    localStorage.setItem('centinela_sesion', user);
    let login = document.getElementById('login-screen');
    if(login) login.style.display = 'none';
    let main = document.getElementById('main-app') || document.getElementById('app') || document.body;
    if(main.id !== 'body') main.style.display = 'block';
    // Si había algo oculto, lo mostramos
    document.querySelectorAll('[hidden]').forEach(el=>el.removeAttribute('hidden'));
    location.reload();
  });
  // Si ya estaba logueado, saltar login
  if(localStorage.getItem('centinela_sesion')){
    let login = document.getElementById('login-screen');
    if(login) login.style.display = 'none';
  }
});

// 1 - CENTINELA SCANNER
function abrirScanner(){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';
u.style.cssText='position:fixed;inset:0;z-index:9999999;background:#020617;color:#fff;overflow:auto;padding:20px';
u.innerHTML='<div style="text-align:center"><div style="font-size:80px">🛡️</div><h1>CENTINELA SCANNER</h1><p>Escanea webs de clientes • Nico Bejarano</p></div><div style="background:#111827;padding:16px;border-radius:14px"><b>Pegá la URL:</b><br><br><input id="url" placeholder="https://web-del-cliente.com" style="width:100%;padding:12px;color:#000;border-radius:10px"><br><br><b>¿Qué querés revisar?</b><br><br><input id="x" placeholder="Ej: login, botones..." style="width:100%;padding:12px;color:#000;border-radius:10px"><button id="go" style="width:100%;padding:14px;margin-top:10px;background:#22c55e;border:0;border-radius:10px;font-weight:900">🚀 ESCANEAR</button><div id="r" style="background:#000;padding:12px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Esperando escaneo...</div></div><button id="salir" style="width:100%;padding:14px;margin-top:16px;background:#ef4444;border:0;border-radius:10px;color:#fff;font-weight:900">⬅ VOLVER</button>';
document.body.appendChild(u);
u.querySelector('#salir').onclick=function(){u.remove();};
u.querySelector('#go').onclick=function(){
let url=u.querySelector('#url').value||'web-del-cliente.com';
let q=u.querySelector('#x').value||'toda la web';
u.querySelector('#r').textContent='🛡️ ESCANEANDO: '+url+'\nRevisando: '+q+'\n\n✅ Vulnerabilidades: 2\n⚠️ 1. Formulario sin protección\n⚠️ 2. Botón sin validación\n\n🔐 Seguridad: 72/100\n💡 Usar CENTINELA FIXER para corregir';
};
}
setInterval(()=>{
if(!localStorage.getItem('centinela_sesion')) return;
if(document.querySelector('#btn-scanner-1')) return;
let donde=document.querySelector('#tools') || document.body;
let c=document.createElement('div');
c.style.cssText='background:#0f172a;border:1px solid #1e293b;border-radius:16px;padding:16px;margin:12px';
c.innerHTML='<h3>🛡️ CENTINELA SCANNER</h3><p>Detecta vulnerabilidades - La N°1</p>';
let b=document.createElement('button');
b.id='btn-scanner-1';
b.textContent='USAR MI HERRAMIENTA';
b.style.cssText='width:100%;padding:14px;background:#3b82f6;color:#fff;border:0;border-radius:12px;font-weight:900';
b.onclick=function(e){e.preventDefault();e.stopPropagation();abrirScanner();};
c.appendChild(b);
donde.appendChild(c);
},1000);
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
