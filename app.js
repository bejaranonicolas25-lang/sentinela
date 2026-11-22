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
