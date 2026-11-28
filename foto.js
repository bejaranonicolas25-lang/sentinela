 // FOTO CENTINELA - DEVUELVE LA FOTO SIN PISAR NADA, JEFE
(function(){
  console.log("FOTO CENTINELA ACTIVA, JEFE");

  // Si ya está la foto, no la pongo 2 veces, JEFE
  if(document.getElementById("foto-centinela")){
    console.log("Foto ya estaba, JEFE");
    return;
  }

  const img = document.createElement("img");
  img.id = "foto-centinela";
  img.src = "1795564391051.jpg";
  img.alt = "CENTINELA";
  img.style.width = "100%";
  img.style.maxWidth = "100%";
  img.style.display = "block";
  img.style.borderRadius = "12px";
  img.style.marginBottom = "12px";

  // Si no la encuentra en la raíz, busca en images, JEFE
  img.onerror = function(){
    console.log("No la encontré acá, JEFE, busco en images");
    img.src = "images/1795564391051.jpg";
  };

  // La pongo arriba de todo, JEFE
  if(document.body){
    document.body.insertBefore(img, document.body.firstChild);
  } else {
    document.addEventListener("DOMContentLoaded", function(){
      document.body.insertBefore(img, document.body.firstChild);
    });
  }

  console.log("FOTO DEVUELTA, JEFE");
})();
