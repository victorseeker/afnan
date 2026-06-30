const msg=`Hello Afnan! 👋\n\nI'm Victor.\n\nI made this little website just to say...\n\nNice to meet you. 💖`;
let i=0,t=document.getElementById('typing');
(function w(){if(i<msg.length){t.innerHTML+=msg[i]=='\n'?'<br>':msg[i];i++;setTimeout(w,35)}})();
letterBtn.onclick=()=>overlay.classList.add('show');
closeBtn.onclick=()=>overlay.classList.remove('show');
overlay.onclick=e=>{if(e.target===overlay)overlay.classList.remove('show');};
setInterval(()=>{let p=document.createElement('div');p.className='petal';p.textContent='🌸';p.style.left=Math.random()*100+'vw';p.style.fontSize=(14+Math.random()*12)+'px';p.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),10000)},300);
