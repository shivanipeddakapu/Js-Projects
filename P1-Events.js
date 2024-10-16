
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let currentColor = 'black';


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', stopDrawing);
canvas.addEventListener('mouseenter', checkMouseInCanvas);


document.addEventListener('keydown', changeColorOrClearCanvas);


function startDrawing(event) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}


function stopDrawing() {
    drawing = false;
    ctx.closePath();
}

function draw(event) {
    if (!drawing) return;
    
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
    ctx.stroke();
}


function checkMouseInCanvas() {
    console.log("Mouse entered canvas");
}


function changeColorOrClearCanvas(event) {
    switch (event.key.toLowerCase()) {
        case 'r':
            currentColor = 'red';
            console.log("Color changed to red");
            break;
        case 'g':
            currentColor = 'green';
            console.log("Color changed to green");
            break;
        case 'b':
            currentColor = 'blue';
            console.log("Color changed to blue");
            break;
        case 'c':
            clearCanvas();
            console.log("Canvas cleared");
            break;
        default:
            break;
    }
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
