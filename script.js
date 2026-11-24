// ===== EMAIL BUTTON =====
const myEmail = "priyasinhabth@gmail.com";
const emailButton = document.getElementById("emailButton");

if (emailButton) {
    emailButton.addEventListener("click", function (event) {
        event.preventDefault();

        const subject = encodeURIComponent("Freelance Project Inquiry");
        const body = encodeURIComponent(
            "Hi Priya,\n\nI would like to discuss a project with you."
        );

        window.location.href =
            `mailto:${myEmail}?subject=${subject}&body=${body}`;
    });
}


// ===== BACK TO TOP =====
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ===== CLICK SPARKLES =====
document.addEventListener("click", function (event) {
    if (event.target.closest("a, button, input, textarea")) return;

    const sparkle = document.createElement("span");
    sparkle.className = "click-sparkle";

    const symbols = ["✦", "✧", "♡", "⋆", "✿"];
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
});


// ===== CUTE CURSOR FOLLOW =====
const cuteCursor = document.querySelector(".cute-cursor");

if (cuteCursor) {
    document.addEventListener("mousemove", function (e) {
        cuteCursor.style.left = e.clientX + "px";
        cuteCursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach(element => {
        element.addEventListener("mouseenter", function () {
            cuteCursor.textContent = "✧";
            cuteCursor.style.fontSize = "26px";
        });

        element.addEventListener("mouseleave", function () {
            cuteCursor.textContent = "♡";
            cuteCursor.style.fontSize = "20px";
        });
    });
}// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {
    window.addEventListener("scroll", function () {
        const scrollable =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrolled = window.scrollY;

        const progress = scrollable > 0
            ? (scrolled / scrollable) * 100
            : 0;

        scrollProgress.style.width = progress + "%";
    });
}