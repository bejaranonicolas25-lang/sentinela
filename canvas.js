// CENTINELA FINAL - TODO EN UNO - NICO BEJARANO
async function hash(t){let b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}
function getUsers(){return JSON.parse(localStorage.getItem('cent_users')||'{}');}
function saveUsers(u){localStorage.setItem('cent_users',JSON.stringify(u));}
function abrir(titulo,icono,color,html){
let old=document.querySelector('.cent-uni');if(old)old.remove();
let u=document.createElement('div');u.className='cent-uni';u.style.background=color;
u.innerHTML=`<div class="cent-uni-top"><div style="font-size:80px">${icono}</div><h2>${titulo}</h2><p>Dueño: <b>${localStorage.getItem('cent_sesion')||'Nico'}</b></p></div><div class="cent-uni-card">${html}</div><button class="cent-uni-exit">⬅ VOLVER</button>`;
document.body.appendChild(u);u.querySelector('.cent-uni-exit').onclick=()=>u.remove();return u;
}
function crearLogin(){
if(localStorage.getItem('cent_sesion')) return;
let box=document.createElement('div');box.className='cent-login';
box.innerHTML=`<div class="cent-login-box"><div style="text-align:center;font-size:60px">🛡️</div><h1 style="text-align:center;font-family:Orbitron">CENTINELA<br><span style="font-size:11px;color:#38bdf8">SÚPER ULTRA SEGURO</span></h1>
<div id="loginForm"><input id="lEmail" placeholder="📧 Tu correo"><input id="lPass" type="password" placeholder="🔐 Tu contraseña"><button id="btnEntrar">▶ ENTRAR</button><button id="btnGoogle" style="background:#fff;color:#000">🅖 Entrar con Google</button><button id="btnApple" style="background:#000;color:#fff;border:1px solid #fff">🍎 Entrar con Apple</button><div class="cent-link" id="aCrear">👉 CREAR CUENTA PRIMERA VEZ</div><div class="cent-link" id="aOlvide">🔑 OLVIDÉ MI CONTRASEÑA</div><div id="msg" style="font-size:12px;text-align:center;margin-top:10px;color:#fbbf24"></div></div>
<div id="crearForm" style="display:none"><input id="cNombre" placeholder="👤 Tu nombre"><input id="cEmail" placeholder="📧 Tu correo"><input id="cPass" type="password" placeholder="🔐 Creá contraseña"><select id="cPreg"><option>¿Robot favorito?</option><option>¿Nombre de tu mascota?</option><option>¿Ciudad de nacimiento?</option></select><input id="cResp" placeholder="🔑 Respuesta secreta"><button id="btnCrear">✅ CREAR MI CUENTA</button><div class="cent-link" id="aVolver1">⬅ Volver</div></div>
<div id="olvideForm" style="display:none"><input id="oEmail" placeholder="📧 Tu correo"><input id="oResp" placeholder="🔑 Respuesta secreta"><input id="oNueva" type="password" placeholder="🔐 Nueva contraseña"><button id="btnRecuperar">🔓 CAMBIAR CONTRASEÑA</button><div class="cent-link" id="aVolver2">⬅ Volver</div></div></div>`;
document.body.appendChild(box);
let show=(id)=>{['loginForm','crearForm','olvideForm'].forEach(x=>box.querySelector('#'+x).style.display='none');box.querySelector('#'+id).style.display='block';};
box.querySelector('#aCrear').onclick=()=>show('crearForm');box.querySelector('#aOlvide').onclick=()=>show('olvideForm');box.querySelector('#aVolver1').onclick=()=>show('loginForm');box.querySelector('#aVolver2').onclick=()=>show('loginForm');
box.querySelector('#btnCrear').onclick=async()=>{let n=box.querySelector('#cNombre').value.trim(),e=box.querySelector('#cEmail').value.trim().toLowerCase(),p=box.querySelector('#cPass').value,pr=box.querySelector('#cPreg').value,r=box.querySelector('#cResp').value.trim().toLowerCase();if(!n||!e||!p||!r)return;let users=getUsers();if(users[e]){show('loginForm');return;}users[e]={nombre:n,pass:await hash(p),pregunta:pr,resp:await hash(r),creado:new Date().toLocaleString()};saveUsers(users);localStorage.setItem('cent_sesion',e);box.remove();crearBotonesCuenta();};
box.querySelector('#btnEntrar').onclick=async()=>{let e=box.querySelector('#lEmail').value.trim().toLowerCase(),p=box.querySelector('#lPass').value;let users=getUsers();let u=users[e];let intentos=parseInt(localStorage.getItem('intentos_'+e)||'0');if(intentos>=3){box.querySelector('#msg').textContent='⛔ Bloqueado. Usá RECUPERAR.';return;}if(!u||u.pass!==await hash(p)){intentos++;localStorage.setItem('intentos_'+e,intentos);box.querySelector('#msg').textContent='❌ Mal. Intento '+intentos+'/3';return;}localStorage.setItem('intentos_'+e,'0');localStorage.setItem('cent_sesion',e);box.remove();crearBotonesCuenta();};
box.querySelector('#btnRecuperar').onclick=async()=>{let e=box.querySelector('#oEmail').value.trim().toLowerCase(),r=box.querySelector('#oResp').value.trim().toLowerCase(),n=box.querySelector('#oNueva').value;let users=getUsers();let u=users[e];if(!u||u.resp!==await hash(r)){box.querySelector('#msg').textContent='❌ Respuesta incorrecta.';show('loginForm');return;}u.pass=await hash(n);saveUsers(users);localStorage.removeItem('intentos_'+e);box.querySelector('#msg').textContent='✅ Cambiada. Entrá ahora.';show('loginForm');};
async function social(proveedor){let email=prompt('Tu correo de '+proveedor+':');if(!email)return;let users=getUsers();email=email.trim().toLowerCase();if(!users[email]){users[email]={nombre:'Nico',pass:await hash('social'),pregunta:'Social',resp:await hash('social'),social:proveedor};saveUsers(users);}localStorage.setItem('cent_sesion',email);box.remove();crearBotonesCuenta();}
box.querySelector('#btnGoogle').onclick=()=>social('Google');box.querySelector('#btnApple').onclick=()=>social('Apple');
}
function crearBotonesCuenta(){
if(document.querySelector('#centCuentaBtns'))return;
let d=document.createElement('div');d.id='centCuentaBtns';d.style.cssText='position:fixed;top:10px;right:10px;z-index:99999;display:flex;gap:6px';
d.innerHTML=`<button id="btnSalir" style="padding:10px;border-radius:10px;border:0;background:#ef4444;color:#fff;font-weight:900">🚪 SALIR</button><button id="btnBorrar" style="padding:10px;border-radius:10px;border:0;background:#000;color:#fff;border:1px solid red;font-weight:900">🗑 CERRAR CUENTA</button>`;
document.body.appendChild(d);
d.querySelector('#btnSalir').onclick=()=>{localStorage.removeItem('cent_sesion');location.reload();};
d.querySelector('#btnBorrar').onclick=()=>{if(confirm('¿Seguro querés BORRAR tu cuenta para siempre, Nico?')){let users=getUsers();let e=localStorage.getItem('cent_sesion');delete users[e];saveUsers(users);localStorage.removeItem('cent_sesion');localStorage.removeItem('intentos_'+e);location.reload();}};
}
// AGENTES - CLICK POR PANTALLA
document.addEventListener('click',function(e){
let el=e.target;let texto='';let p=el;for(let i=0;i<5;i++){if(!p)break;if(p.innerText)texto+=' '+p.innerText;p=p.parentElement;}
texto=texto.toUpperCase();
if(texto.includes('AGENTE 01')){
let u=abrir('AGENTE 01','🕵️','linear-gradient(180deg,#020617,#0ea5e9)','<b>🕵️ TU ESPÍA</b><input id="x" placeholder="¿Qué vigilo?"><button id="go">▶ ACTIVAR</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Esperando...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🕵️ AGENTE 01 ACTIVADO ✅\nVigilando: "'+(u.querySelector('#x').value||'Toda tu web')+'"\nTODO SEGURO';};
}
else if(texto.includes('AGENTE 02')){
let u=abrir('AGENTE 02','🥷','linear-gradient(180deg,#1a0b2e,#a855f7)','<b>🥷 TU SOMBRA</b><input id="x" placeholder="¿Qué misión?"><button id="go">▶ ENVIAR MISIÓN</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">Listo...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🥷 MISIÓN CUMPLIDA 🏆\nMisión: "'+(u.querySelector('#x').value||'Proteger a Nico')+'"';};
}
else if(texto.includes('V.I.K.I.')){
let u=abrir('NS-5 V.I.K.I.','🧠','linear-gradient(180deg,#2d0a2e,#ff2d55)','<b>🧠 CENTRAL • MODO ROJO</b><input id="x" placeholder="¿Orden?"><button id="go">▶ DAR ORDEN</button><button id="calma">😌 CALMAR</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">V.I.K.I. en ALERTA...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🧠 V.I.K.I.: Orden "'+(u.querySelector('#x').value||'Controlar todo')+'" ✅';};
u.querySelector('#calma').onclick=()=>{u.querySelector('#r').textContent='😌 V.I.K.I. CALMADA ✅ De 🔴 a 🟢';};
}
else if(texto.includes('NS-5 SENTINELA')){
let u=abrir('NS-5 SENTINELA','🤖','linear-gradient(180deg,#022c22,#00e5ff)','<b>🤖 TU ROBOT</b><input id="x" placeholder="Hablale..."><button id="go">▶ HABLAR</button><button id="voz">🔊 QUE HABLE</button><div id="r" style="background:#000;padding:10px;border-radius:10px;margin-top:10px;white-space:pre-wrap">SENTINELA: Hola jefe...</div>');
u.querySelector('#go').onclick=()=>{u.querySelector('#r').textContent='🤖 SENTINELA: Entendí "'+(u.querySelector('#x').value||'Hola')+'" Lo hago ya.';};
u.querySelector('#voz').onclick=()=>{try{speechSynthesis.speak(new SpeechSynthesisUtterance('Hola Nico, soy Sentinela'));}catch(e){}u.querySelector('#r').textContent='🤖 HABLANDO 🔊';};
}
},true);
crearLogin();
if(localStorage.getItem('cent_sesion')) crearBotonesCuenta();
