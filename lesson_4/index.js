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
class FormBuilder { 
    constructor(){
        const form = document.createElement('form');
        this.form = form;
    }
    appendTo(target){
        target.append(this.form);

        return this;
    }

    addInput(name){
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'name';

        this.form.appendChild(input);

        return this;
    }

    addCheckbox(name){
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'name';

        this.form.appendChild(input);

        return this;
    }

    addButton(name){
        let input = document.createElement('button');
        input.type = 'submit';
        input.value = 'name';

        this.form.appendChild(input);

        return this;
    }

    destroy(){
        this.form.parentElement.removeChild(this.form);
    }
}

/******************* Task 3 ********************/
function initBall(){
    const divCircle = document.createElement('div');
    document.body.prepend(divCircle);

    divCircle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${(Math.random() * 256)})`;
    divCircle.style.borderRadius = '50%';
    divCircle.style.width = '25px';
    divCircle.style.height = '25px';
    divCircle.style.position = 'absolute';
    divCircle.style.top = `${Math.random() * (window.innerHeight - 25)}px`;
    divCircle.style.left = `${Math.random() * (window.innerWidth - 25)}px`;


    divCircle.addEventListener('click', (event) => {
        console.log('purple circle');
        divCircle.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        divCircle.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        event.stopPropagation();
    });

        window.addEventListener('click', function listener (event){
            const body = document.body;
            body.removeChild(divCircle);

            this.removeEventListener('click', listener); 
    });
}
