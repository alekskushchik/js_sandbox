const input = document.getElementById('input');
const div = document.getElementById('div');
const div1 = document.getElementById('div1');
const but_completed = document.getElementById('completed');
const but_active = document.getElementById('active');
const all = document.getElementById('all');
const all_act = document.getElementById('all_act');
const all_com = document.getElementById('all_com');


function todo() {
    let returnArr = JSON.parse(localStorage.getItem("todo"));
    if (returnArr == null) {
        returnArr = [];
    }
    let num = 0;

    if (returnArr instanceof Array) {

        for (let i = 0; i < returnArr.length; i++) {
            let returnObj = returnArr[i];
            const button_delete = document.createElement('button');
            const div_list = document.createElement('div');
            const input_list = document.createElement('input');
            const label = document.createElement('label');

            num = returnArr[returnArr.length - 1].item;

            label.setAttribute('for', `${returnObj.id}`);
            input_list.setAttribute("type", "checkbox");

            input_list.id = `${returnObj.id}`;

            input_list.checked = returnObj.checked;

            label.innerText = returnObj.title;
            button_delete.innerText = 'delete';
            button_delete.id = returnObj.item;
            div_list.id = returnObj.item;
            div_list.className = 'div_list';
            button_delete.className = 'delete';

            div.appendChild(div_list);
            div_list.appendChild(input_list);
            div_list.appendChild(label);
            div_list.appendChild(button_delete);
        }
    }

    window.addEventListener('keydown', (enter) => {
        if (enter.keyCode === 13 && input.value !== "") {
            ++num;
            const button_delete = document.createElement('button');
            const div_list = document.createElement('div');
            const input_list = document.createElement('input');
            const label = document.createElement('label');

            label.innerText = input.value;
            button_delete.innerText = 'delete';

            input_list.id = `${num}checkbox`;
            button_delete.id = num;
            div_list.id = num;
            div_list.className = 'div_list';
            button_delete.className = 'delete';

            input_list.setAttribute("type", "checkbox");
            label.setAttribute('for', `${num}checkbox`);

            let obj = {
                id: `${num}checkbox`,
                title: input.value,
                item: num
            };

            returnArr.push(obj);
            localStorage.setItem('todo', JSON.stringify(returnArr));
            div.appendChild(div_list);
            div_list.appendChild(input_list);
            div_list.appendChild(label);
            div_list.appendChild(button_delete);
            input.value = '';
            remove();
            checked_input();
            active();
        }
    })
}

todo();

function checked_input() {
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "checkbox") {
            let input_checked = inputs[i];
            input_checked.addEventListener('click', () => {
                let x = input_checked.id;
                let returnArr = JSON.parse(localStorage.getItem("todo"));

                for (let i = 0; i < returnArr.length; i++) {
                    if (returnArr[i].id === x) {
                        if (returnArr[i].checked !== true) {
                            returnArr[i].checked = true;
                            localStorage.setItem('todo', JSON.stringify(returnArr));
                        } else {
                            returnArr[i].checked = false;
                            localStorage.setItem('todo', JSON.stringify(returnArr));
                        }
                    }
                }
            })
        }
    }
}
checked_input();

function remove() {
    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className === 'delete') {
            let button_delete = buttons[i];
            button_delete.addEventListener('click', () => {
                let div_list = document.getElementById(button_delete.id);
                let returnArr = JSON.parse(localStorage.getItem("todo"));
                let x = button_delete.id;
                let index = -1;
                for (let i = 0; i < returnArr.length; i++) {
                    if (returnArr[i].item === x) {
                        index = i;
                        break;
                    }
                }

                if (div_list != null) {
                    returnArr.splice(index, 1);
                    localStorage.setItem('todo', JSON.stringify(returnArr));
                    div.removeChild(div_list);

                }

            })
        }
    }
}
remove();

function active() {
    but_active.addEventListener('click', () => {
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "checkbox") {
                let input_all = inputs[i];
                if (input_all.checked === true) {
                    let input_num = input_all.id.charAt(0);
                    let div = document.getElementById(input_num);

                    div.style.display = 'none';

                }else if(input_all.checked !== true){
                    let input_num = input_all.id.charAt(0);
                    let div = document.getElementById(input_num);
                    div.style.display = 'block';
                }
            }
        }
    })
}
active();

function completed() {
    but_completed.addEventListener('click', () => {
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "checkbox") {
                let input_all = inputs[i];
                if (input_all.checked !== true) {
                    let input_num = input_all.id.charAt(0);
                    let div = document.getElementById(input_num);

                    div.style.display = 'none';

                }else if(input_all.checked === true){
                    let input_num = input_all.id.charAt(0);
                    let div = document.getElementById(input_num);
                    div.style.display = 'block';
                }
            }}
    })
}
completed();

function show_all(){
    all.addEventListener('click', () => {
        let div = document.getElementsByClassName('div_list')
        for (let i = 0; i < div.length; i++){
            div[i].style.display = 'block';
        }
    })
}

show_all();

function all_act_com (){
    let returnArr = JSON.parse(localStorage.getItem("todo"));
    let inputs = document.getElementsByTagName("input");
    all_act.addEventListener('click', () => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "checkbox") {
                for (let j = 0; j < returnArr.length; j++){
                    if (returnArr[j].checked === true) {
                        returnArr[j].checked = false;
                        localStorage.setItem('todo', JSON.stringify(returnArr));
                    }
                }
            }}
    });

    all_com.addEventListener('click', () => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "checkbox") {
                for (let j = 0; j < returnArr.length; j++){
                    if (returnArr[j].checked !== true) {
                        returnArr[j].checked = true;
                        localStorage.setItem('todo', JSON.stringify(returnArr));
                    }
                }
            }}
    })
}
all_act_com ();