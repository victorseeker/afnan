// =========================
// Typing Effect
// =========================

const text = `Hello Afnan! 👋

I'm Victor.

I made this little website just to say...

Nice to meet you. 💖

I hope this little page brings a smile to your face. 🌸`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index >= text.length) return;

    if (text[index] === "\n") {
        typing.innerHTML += "<br>";
    } else {
        typing.innerHTML += text[index];
    }

    index++;

    setTimeout(typeWriter, 35);

}

typeWriter();


// =========================
// Letter Popup
// =========================

const overlay = document.getElementById("overlay");
const letterBtn = document.getElementById("letterBtn");
const closeBtn = document.getElementById("closeBtn");

letterBtn.addEventListener("click", () => {

    overlay.classList.add("show");

});

closeBtn.addEventListener("click", () => {

    overlay.classList.remove("show");

});

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        overlay.classList.remove("show");

    }

});


// =========================
// Sakura
// =========================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    const flowers = ["🌸", "🌸", "🌺", "💮"];

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (14 + Math.random() * 10) + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 300);


// =========================
// Hearts
// =========================

document.addEventListener("click", (e) => {

    if (
        e.target.id === "letterBtn" ||
        e.target.id === "closeBtn"
    ) return;

    const heart = document.createElement("div");

    heart.textContent = "💖";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "1s ease";
    heart.style.zIndex = "9999";
    heart.style.fontSize = "22px";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            "translateY(-90px) scale(1.5)";

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 1000);

});


// =========================
// Avatar Float
// =========================

const avatar = document.querySelector(".avatar");

setInterval(() => {

    avatar.animate([

        {
            transform: "translateY(0)"
        },

        {
            transform: "translateY(-8px)"
        },

        {
            transform: "translateY(0)"
        }

    ], {

        duration: 2800,

        easing: "ease-in-out"

    });

}, 2800);
