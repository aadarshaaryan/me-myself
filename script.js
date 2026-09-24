const slLogoClean = document.querySelector(".slLogoClean");
const slLogoOld_w = document.querySelector(".sl-logo-w");
const door1 = document.querySelector(".bg1");
const door2 = document.querySelector(".bg2");
const lock = document.querySelector(".lock");
const lamp = document.querySelector(".lamp");
const read = document.querySelector(".read");
const radio = document.querySelector(".radio");
const diary = document.querySelector(".diary");
const close = document.querySelector(".close");
const audio = document.querySelector("#audio");

lock.addEventListener("click", () => {
    door1.classList.add("doors");
    door2.classList.add("doors");
    lock.style.display = "none";
});

let lamp_on = false;

lamp.addEventListener("click", () => {
    const isDesktop = window.innerWidth > 1024;

    if (!lamp_on) {
        document.body.style.backgroundImage = isDesktop
            ? 'url("desktop_on.png")'
            : 'url("mobile_on.png")';

        lamp.textContent = "Turn off light";
        lamp_on = true;
    } else {
        document.body.style.backgroundImage = isDesktop
            ? 'url("desktop_off.png")'
            : 'url("mobile_off.png")';

        lamp.textContent = "Turn on light";
        lamp_on = false;
    }
});


let diary_open = false;
let closeTimeout = null;

function diary_close() {
    if (!diary_open) return;

    diary_open = false;
    clearTimeout(closeTimeout);

    diary.classList.remove("diary_up");
    diary.classList.add("diary_down");

    closeTimeout = setTimeout(() => {
        diary.style.display = "none";
        diary.classList.remove("diary_down");
    }, 1000);

    lamp.style.display = "flex";
    radio.style.display = "flex";
    close.style.display = "none";
}

read.addEventListener("click", () => {
    if (!diary_open) {
        clearTimeout(closeTimeout);

        diary.classList.remove("diary_down");
        diary.style.display = "block";

        void diary.offsetWidth;

        diary.classList.add("diary_up");

        lamp.style.display = "none";
        radio.style.display = "none";
        close.style.display = "flex";

        diary_open = true;
    } else {
        diary_close();
    }
});

close.addEventListener("click", diary_close);

let radio_on = false;

radio.addEventListener("click", () => {
    if (!radio_on) {
        audio.currentTime = 22;

        audio.play();

        radio.textContent = "Stop radio";
        radio.classList.add("radio_on");
        radio_on = true;
    } else {
        audio.pause();

        radio.textContent = "Listen to radio";
        radio.classList.remove("radio_on");
        radio_on = false;
    }
});

const loadingScreen = document.querySelector(".loading-screen");
const page = document.querySelector("body");

window.addEventListener("load", () => {
    loadingScreen.style.display = "none";
    page.classList.remove("loading");
});