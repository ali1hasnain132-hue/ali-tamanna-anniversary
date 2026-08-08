const start=new Date("2025-08-01T00:00:00+05:00");
function tick(){let d=Math.max(0,Date.now()-start.getTime());let days=Math.floor(d/86400000);d%=86400000;let h=Math.floor(d/3600000);d%=3600000;let m=Math.floor(d/60000);d%=60000;let s=Math.floor(d/1000);document.getElementById("days").textContent=days;document.getElementById("hours").textContent=String(h).padStart(2,"0");document.getElementById("minutes").textContent=String(m).padStart(2,"0");document.getElementById("seconds").textContent=String(s).padStart(2,"0")}tick();setInterval(tick,1000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
function hearts(){for(let i=0;i<20;i++){let x=document.createElement("span");x.className="heart";x.textContent=Math.random()>.2?"♥":"✦";x.style.left=Math.random()*100+"vw";x.style.fontSize=10+Math.random()*18+"px";x.style.animationDuration=3+Math.random()*3+"s";document.body.appendChild(x);setTimeout(()=>x.remove(),6500)}}
document.getElementById("surpriseBtn").onclick=()=>{hearts();document.getElementById("letter").scrollIntoView({behavior:"smooth"})};
document.getElementById("topBtn").onclick=()=>document.getElementById("home").scrollIntoView({behavior:"smooth"});

// Uploaded anniversary song
const audio = new Audio("assets/song.mp3");
audio.loop = true;
audio.preload = "auto";
document.getElementById("musicBtn").onclick = async () => {
  try {
    if (audio.paused) {
      await audio.play();
      document.getElementById("musicBtn").textContent = "Ⅱ Pause our song";
    } else {
      audio.pause();
      document.getElementById("musicBtn").textContent = "♫ Play our song";
    }
  } catch (e) {
    document.getElementById("musicBtn").textContent = "Tap again to play";
  }
};
