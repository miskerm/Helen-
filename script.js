// ==================================
// 1. SELECT HTML ELEMENTS
// ==================================

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const loveQuestion = document.getElementById("loveQuestion");
const celebration = document.getElementById("celebration");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");


// ==================================
// 2. FALLING ROSES 🌹
// ==================================

function createRose() {
    const rose = document.createElement("div");

    rose.classList.add("rose");
    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = (4 + Math.random() * 5) + "s";
    rose.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 9000);
}

setInterval(createRose, 500);


// ==================================
// 3. FLOATING HEARTS 💗
// ==================================

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 800);


// ==================================
// 4. NO BUTTON RUNS AWAY 🙈
// ==================================

function moveNoButton() {
    if (!noButton) return;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = Math.max(0, window.innerWidth - buttonWidth - 20);
    const maxY = Math.max(0, window.innerHeight - buttonHeight - 20);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    noButton.style.zIndex = "9999";
}

// Computer: move when mouse approaches
if (noButton) {
    noButton.addEventListener("mouseenter", moveNoButton);

    // Phone: move when she touches it
    noButton.addEventListener("touchstart", function(event) {
        event.preventDefault();
        moveNoButton();
    }, { passive: false });

    // Also prevent clicking NO
    noButton.addEventListener("click", function(event) {
        event.preventDefault();
        moveNoButton();
    });
}


// ==================================
// 5. YES BUTTON CELEBRATION ❤️
// ==================================

if (yesButton) {
    yesButton.addEventListener("click", function() {

        if (loveQuestion) {
            loveQuestion.style.display = "none";
        }

        if (noButton) {
            noButton.style.display = "none";
        }

        if (celebration) {
            celebration.classList.remove("hidden");
        }

        // Create extra celebration hearts
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeart, i * 100);
        }
    });
}


// ==================================
// 6. SURPRISE MESSAGE 💌
// ==================================

if (surpriseButton) {
    surpriseButton.addEventListener("click", function() {

        if (surpriseMessage) {
            surpriseMessage.classList.remove("hidden");
        }

        surpriseButton.textContent = "Surprise Opened ❤️";
        surpriseButton.disabled = true;
    });
}


// ==================================
// 7. BACKGROUND MUSIC 🎵
// ==================================

if (musicButton && birthdayMusic) {

    musicButton.addEventListener("click", function() {

        if (birthdayMusic.paused) {
            birthdayMusic.play()
                .then(() => {
                    musicButton.textContent = "Pause Music ⏸️";
                })
                .catch(error => {
                    console.log("Music could not play:", error);
                    musicButton.textContent = "Try Music Again 🎵";
                });

        } else {

            birthdayMusic.pause();
            musicButton.textContent = "Play Music 🎵";
        }
    });
}