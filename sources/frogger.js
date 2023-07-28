document.getElementById('canvas1').addEventListener('click', function startgame() {

})

let pointX = 0;
let pointY = 0;

const sprites = new Image();
const dead = new Image();
sprites.src = "../assets/sprites.png"
dead.src = '../assets/dead.png'

let backgroundCanvas = document.getElementById('canvas3')
let spriteCanvas = document.getElementById('canvas2')
let interfaceCanvas = document.getElementById('canvas1')

let backgroundCtx = backgroundCanvas.getContext('2d')
let spriteCtx = backgroundCanvas.getContext('2d')
let interfaceCtx = backgroundCanvas.getContext('2d')

backgroundCanvas.addEventListener('click', function (event) {
    pointX = event.offsetX
    pointY = event.offsetY

    startgame()
})

function isBoxCollision(b1x, b1y, b1w, b1h, b2x, b2y, b2w, b2h) {
    const checkwidth = (b1w + b2w) / 2 > b2x - b1x
    const checkHeight = (b1h + b2h) / 2 > b2y - b1y

    if (checkwidth && checkHeight) {
        return true
    }
    else {
        return false
    }
}


function showStartScreen() {
    backgroundCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height)
    // interfaceCtx.font = 'bold 30px Arial'
    // interfaceCtx.fillStyle = 'white'
    // interfaceCtx.fillText("FROGGER", 150, 200)


    base_image = new Image();
    base_image.src = '../assets/frogger.png';
    base_image.onload = function () {
        interfaceCtx.drawImage(base_image, 40, 140);
    }
    backgroundCtx.fillStyle = 'green'
    backgroundCtx.fillRect(150, 255, 100, 40)
    backgroundCtx.fillStyle = 'black'
    backgroundCtx.font = "20px Georgia";
    backgroundCtx.fillText('Start', 180, 280)
}

function isPointCollision() {
    let left = 150
    let right = 250
    let top = 255
    let bottom = 295

    if (pointX > left && pointX < right && pointY > top && pointY < bottom) {
        return true
    }
    else {
        return false
    }
}

function startgame() {
    if (isPointCollision()) {
        interfaceCtx.clearRect(0, 0, interfaceCanvas.width, interfaceCanvas.height)
        
        interfaceCtx.fillStyle = "#0500F9"
        interfaceCtx.fillRect(0, 0, 400, 250)
        
        interfaceCtx.fillStyle = "black"
        
        //frog
             
        interfaceCtx.fillRect(0, 270, 400, 180)
        interfaceCtx.fillRect(0, 0, 400, 60)
        interfaceCtx.fillRect(0, 500, 400, 110)
        interfaceCtx.drawImage(sprites, 0, 60, 400, 50, 0, 60, 400, 50);
        // pink stripe
        interfaceCtx.drawImage(sprites, 0, 110, 400, 40, 0, 210, 404, 60);
        // pink stripe
        interfaceCtx.drawImage(sprites, 0, 110, 400, 40, 0, 432, 404, 70);

        // All frog
        interfaceCtx.drawImage(sprites, 0, 330, 30, 30, -10, 500, 30, 30);
        interfaceCtx.drawImage(sprites, 0, 330, 30, 30, 15, 500, 30, 30);
        interfaceCtx.drawImage(sprites, 0, 330, 30, 30, 40, 500, 30, 30);
        interfaceCtx.drawImage(sprites, 0, 330, 30, 30, 65, 500, 30, 30);
        interfaceCtx.drawImage(sprites, 0, 330, 30, 30, 90, 500, 30, 30);
        
        interfaceCtx.drawImage(sprites, 0, 0, 400, 50, 30, 0, 400, 50);
        
        interfaceCtx.drawImage(sprites, 400, 400, 4)
        interfaceCtx.fillStyle = 'green'
        interfaceCtx.fillText('Score:60')
    }
}

