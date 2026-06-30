const msg=`Hello Afnan! 👋\n\nI'm Victor.\n\nI hope this little page makes you smile. 💖`;
let i=0,t=document.getElementById('typing');
(function type(){if(i<msg.length){t.innerHTML+=msg[i]=='\n'?'<br>':msg[i];i++;setTimeout(type,35)}})();
openBtn.onclick=()=>overlay.classList.add('show');
closeBtn.onclick=()=>overlay.classList.remove('show');
overlay.onclick=e=>{if(e.target===overlay)overlay.classList.remove('show');}
setInterval(()=>{let p=document.createElement('div');p.className='petal';p.textContent='🌸';p.style.left=Math.random()*100+'vw';p.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),10000)},300);
document.addEventListener('click',e=>{let h=document.createElement('div');h.textContent='💖';h.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;transition:1s;pointer-events:none`;document.body.appendChild(h);requestAnimationFrame(()=>{h.style.transform='translateY(-80px)';h.style.opacity='0'});setTimeout(()=>h.remove(),1000);});
