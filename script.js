const box = document.querySelector(".box");
const audio = document.getElementById("rickroll-audio");
const banner = document.getElementById("banner");
let count = parseInt(box.id);
const MAX_COUNT = 50000;
let isRickrolled = false;

box.onclick = function() {
    if (count < MAX_COUNT && !isRickrolled) {
        const num = count === 1 ? 1 : count * 2 > MAX_COUNT ? (MAX_COUNT - count) : count * 2;
        for (let i = 0; i < num; i++) {
            addCircle();
        }
        count += num;
        const gridSize = Math.ceil(Math.sqrt(count));
        box.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

        if (count >= MAX_COUNT) {
            revealRickroll();
        }
    }
};

function addCircle() {
    const circle = document.createElement("div");
    circle.className = "circle";
    box.appendChild(circle);
}

function revealRickroll() {
    isRickrolled = true;

    box.innerHTML = '';
    
    const rickrollImg = document.createElement("img");
    rickrollImg.src = "https://c.tenor.com/x8v1oNUOmg4AAAAd/tenor.gif";
    rickrollImg.alt = "rickroll";
    rickrollImg.className = "rickroll-img";
    box.appendChild(rickrollImg);
    
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    banner.innerHTML = "🎵 YOU ARE RICKROLLED! 🎵";
}