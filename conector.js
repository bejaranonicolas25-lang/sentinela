// CONECTOR - UNE TODO SIN PISAR NADA - JEFE
(function(){
  console.log("CONECTOR ACTIVO, JEFE - No pisé ningún archivo");

  // ORDEN SEGURO, JEFE: primero escudo, después cerebro, después app, después canvas
  const archivos = [
    "escudo.js",
    "cerebro.js",
    "app.js",
    "canvas.js"
  ];

  function cargarUno(i){
    if(i >= archivos.length){
      console.log("TODO CONECTADO, JEFE");
      return;
    }
    // Si ya está cargado, no lo cargo 2 veces, JEFE
    if(document.querySelector('script[src="' + archivos[i] + '"]')){
      console.log("Ya estaba, JEFE, no lo duplico:", archivos[i]);
      cargarUno(i+1);
      return;
    }
    const s = document.createElement("script");
    s.src = archivos[i];
    s.onload = function(){ console.log("Conectado, JEFE:", archivos[i]); cargarUno(i+1); };
    s.onerror = function(){ console.log("No lo encontré, JEFE, sigo igual:", archivos[i]); cargarUno(i+1); };
    document.body.appendChild(s);
  }

  // Cuando abre la página, empieza a conectar, JEFE
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ cargarUno(0); });
  } else {
    cargarUno(0);
  }

  // PUENTE CON SUPABASE, JEFE - sin tocar app.js
  window.CENTINELA = window.CENTINELA || {};
  window.CENTINELA.conectado = true;
  window.CENTINELA.archivos = archivos;
  console.log("CENTINELA LISTO, JEFE");
})();
