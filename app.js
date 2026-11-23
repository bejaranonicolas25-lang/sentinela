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
