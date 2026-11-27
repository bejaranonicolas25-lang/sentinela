let dueno = JSON.parse(localStorage.getItem("dueno") || "null");
function crearCuenta(){
  if(dueno) return msg.innerText="Ya hay dueño, JEFE";
  dueno={u:usuario.value, c:clave.value};
  localStorage.setItem("dueno", JSON.stringify(dueno));
  msg.innerText="Cuenta creada, JEFE";
}
function entrar(){
  if(dueno && usuario.value===dueno.u && clave.value===dueno.c){ localStorage.setItem("rol","dueno"); alert("Bienvenido dueño, JEFE"); return; }
  if(usuario.value!==""){ localStorage.setItem("rol","visitante"); alert("Bienvenido a mi nube, JEFE"); return; }
  msg.innerText="Usuario o clave mal, JEFE";
}
function olvidar(){
  if(!dueno) return msg.innerText="No hay cuenta, JEFE";
  let r=prompt("¿Sos el dueño? Escribí tu usuario");
  if(r===dueno.u) alert("Tu clave es: "+dueno.c); else alert("Solo el dueño, JEFE");
}
function hablar(t){
  speechSynthesis.cancel();
  let v=new SpeechSynthesisUtterance(t);
  v.lang="es-AR"; v.rate=1; v.pitch=1;
  speechSynthesis.speak(v);
                        }
