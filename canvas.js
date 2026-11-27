const canvas = document.getElementById("canvasMP4");
const ctx = canvas.getContext("2d");
const img1 = new Image();
img1.src = "1795564391051.jpg";
let frame = 0;
function animarMP4(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  frame++;
  let s = 1 + Math.sin(frame*0.05)*0.05;
  let w = canvas.width*s;
  let h = canvas.height*s;
  ctx.drawImage(img1,(canvas.width-w)/2,(canvas.height-h)/2,w,h);
  requestAnimationFrame(animarMP4);
}
img1.onload = animarMP4;
<script>
// CÓDIGO UNIVERSAL - CORRIGE ERRORES
window.addEventListener('error', e => e.preventDefault());
window.addEventListener('resize', () => {
  const c = document.getElementById("canvasMP4");
  if(c){ c.width = window.innerWidth; c.height = window.innerHeight; }
});
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => { img.style.display = "none"; };
});
</script>
