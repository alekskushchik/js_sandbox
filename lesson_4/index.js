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