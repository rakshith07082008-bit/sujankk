// Hide loader after 3 seconds
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
}, 3000);

// Birthday Date
const birthday = new Date("July 31, 2026 08:00:00").getTime();

const countdownPage = document.getElementById("countdown-page");
const birthdayPage = document.getElementById("birthday-page");


// Countdown
const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {

        clearInterval(timer);

        countdownPage.style.display = "none";
        birthdayPage.classList.remove("hidden");

        startCelebration();

        return;
    }

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

// Gift Opening
const gift = document.getElementById("gift-box");
const giftMessage = document.getElementById("gift-message");

gift.addEventListener("click", () => {

    gift.innerHTML = "🎉";

    gift.style.transform = "scale(1.3)";

    giftMessage.classList.remove("hidden");

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

});

// Music
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔇 Stop Music";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// Celebration
function startCelebration() {

    confetti({
        particleCount: 300,
        spread: 360
    });

    setInterval(() => {

        confetti({
            particleCount: 60,
            spread: 100,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

    }, 2500);

}

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-100px";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 5500);

}, 800);

const colors = [
  "#D4AF37", // Gold
  "#0D0D0D", // Black
  "#1E90FF"  // Blue
];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  balloon.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration =
    (Math.random() * 3 + 5) + "s";

  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 300);

// Welcome Popup
window.onload = () => {

    setTimeout(() => {

       // alert("🎉 Welcome to Hemanth's Birthday Surprise! 🎂");

    }, 3500);

};