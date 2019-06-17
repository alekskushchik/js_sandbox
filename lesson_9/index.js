const div = document.createElement('div');
document.body.prepend(div);
div.style.height = '200vh';

function waitForScroll(){
    return new Promise((resolve) => {
        window.addEventListener('scroll', resolve);
        });
}

function drawOnScroll(){
    waitForScroll().then(() => {
        div.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    });
}

window.waitForScroll = waitForScroll;
window.drawOnScroll = drawOnScroll;

// Задание 2
function waitForAnswer() {
    return new Promise((resolve, reject) => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Y' || event.key === 'y') {
                resolve();
            };
            if (event.key === 'N' || event.key === 'n') {
                reject();
            };
        });
    });
}

function setText(str) {
    if (document.getElementById('string') == null) {
        const div = document.createElement('div');
        div.id = 'string';
        div.style = 'position: absolute; top: 0; width:400px'
        document.body.appendChild(div);

    }
    document.getElementById('string').innerHTML = str;
}

setText("Вы сделали домашнее задание? Y / N");

waitForAnswer()
    .then(() => setText("Так держать!"))
    .catch(() => setText("Нужно подтянуть("));

window.waitForAnswer = waitForAnswer;
window.setText = setText;

// Задание 3
function waitForTime(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

function waitForClicks(clicks) {
    return new Promise((resolve) => {
        let sum = 0;
        window.addEventListener('click', () => {
            sum += 1;
            if (clicks == sum) {
                return resolve()
            };
        });
    });
}

function clickChallange(seconds, clicks){
    
        setText(`У вас есть ${seconds} секунд, чтобы сделать ${clicks} кликов`);
    
        Promise.race([waitForTime(seconds), waitForClicks(clicks)])
            .then(() => setText('Good job, comrade.'))
            .catch(() => setText('100 кликов вне очереди.'))
    }

window.waitForTime = waitForTime;
window.waitForClicks = waitForClicks;
window.clickChallange = clickChallange;
