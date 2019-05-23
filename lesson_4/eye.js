const eye1 = document.getElementById('left-eye');
const eye2 = document.getElementById('right-eye');


let x1 = screenX + 35, y1 = screenY + 25;
let r = 5, x , y, x2, y2, isEyeProcessed = false;

window.addEventListener('mousemove', e => {
    if (!isEyeProcessed) {
        isEyeProcessed = true;
        let x2 = e.clientX, y2 = e.clientY;
        y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
        x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;
        
        eye1.style.marginTop = `${(y - y1 + 2)}px`;
        eye1.style.marginLeft = `${(x - x1)}px`;
        
        eye2.style.marginTop = `${(y - y1 + 2)}px`;
        eye2.style.marginLeft = `${(x - x1)}px`;
        
        isEyeProcessed = false;
    }
});
