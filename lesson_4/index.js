"use strict"
/******************* Task 1 ********************/
function makeImages(...links) {
    for (let i = 0; i < links.length; i += 1) {
        const div = document.createElement('div');
        document.body.prepend(div);
    }

    for (let i = 0; i < links.length; i += 1) {
        const img = document.createElement('img');
        img.src = links[i];

        const div = document.querySelectorAll('div');
        div[i].append(img);
    }
}

/******************* Task 2 ********************/
