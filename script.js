const text = `Hello Afnan! 👋

I'm Victor.

I made this little website just to say...

Nice to meet you. 💖`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text[i] === "\n") {
            typing.innerHTML += "<br>";
        } else {
            typing.innerHTML += text[i];
        }
        i++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();

// ===== Letter =====

const overlay = document.getElementById("overlay");
const letterBtn = document.getElementById("letterBtn");
const closeBtn = document.getElementById("closeBtn");

letterBtn.addEventListener("click", function () {
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    overlay.classList.remove("show");
});

overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }
});

// ===== Sakura =====

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (14 + Math.random() * 10) + "px";

    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(function () {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);

// ===== Hearts =====

document.addEventListener("click", function (e) {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "1s";

    document.body.appendChild(heart);

    requestAnimationFrame(function () {

        heart.style.transform = "translateY(-80px) scale(1.3)";
        heart.style.opacity = "0";

    });

    setTimeout(function () {

        heart.remove();

    },1000);

});
