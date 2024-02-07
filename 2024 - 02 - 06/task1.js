const mario = document.querySelector("#mario");
const imgMario = document.querySelector("img");

imgMario.src = './assets/mario-stand.gif';

function stopMario() {
    imgMario.src = "./assets/mario-stand.gif";
}

mario.style.position = "absolute";
mario.style.left = "0";


function moveMario(event) {
    if (!imgMario.src.includes("walk")) {
    //if(imgMario.src !== './assets/mario-walk.gif') {   
        imgMario.src = './assets/mario-walk.gif';
    }
    if (event.key === 'ArrowRight') {
        mario.style.transform = "scaleX(1)"
        mario.style.left = `${parseInt(mario.style.left) +10}px`
    } else if (event.key === 'ArrowLeft') {
        mario.style.transform = "scaleX(-1)"
        mario.style.left = `${parseInt(mario.style.left) - 10}px`
    }
}

document.addEventListener('keydown', moveMario);
document.addEventListener('keyup', stopMario);