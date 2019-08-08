// const div = document.createElement('div');
// document.body.append(div);
// div.style.cursor = "pointer";
// div.innerHTML = 'Click to receive data for your location.';
// div.addEventListener('click', () => {
//     findMyIp()
//         .then(res => look(res['ip']))
//         .then(res => {
//             div.innerHTML = `${res['data']['country']} ${res['data']['city']}`;
//         });
//
// });
// function findMyIp() {
//     const promiseIp1 = fetch('https://api.ipify.org?format=json');
//     const promiseIp2 = fetch('https://ipapi.co/json/');
//     const promiseIp3 = fetch('http://free.ipwhois.io/json/');
//     return Promise.race([promiseIp1, promiseIp2, promiseIp3])
//         .then(res => {
//             div.innerHTML = "search in progress";
//             return res.json();
//         })
//         .catch(err => {
//             div.innerHTML = "error to receive ip";
//         });
// }
//
// function look(ipStr) {
//     return fetch(`https://api.jsonbin.io/g/${ipStr}`, {method: 'GET'})
//         .then(res => res.json())
//         .catch(err => {
//             div.innerHTML = "error to receive location";
//         });
// }
//
// const SECRET_KEY = '$2a$10$byHqum0jupb0XeQYJiTuiehy/VWT4O5AwbiT0/0rXUFhgXHeylnpi';
// const bin_id = '5d4c593a00947c04a5a79ac0';
//
// function postData(data) {
//     return fetch ('https://api.jsonbin.io/b', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'secret-key': SECRET_KEY,
//             'private': 'true',
//         },
//         body: JSON.stringify(data),
//     });
// }
// window.postData = postData;
//
// function getData(id) {
//     return fetch (`https://api.jsonbin.io/b/${id}/latest`, {
//         method: 'GET',
//         headers: {
//             'secret-key': SECRET_KEY,
//         },
//     })
//         .then(response => response.json());
// }
// window.getData = getData;
//
// function updateData(id, data) {
//     return fetch (`https://api.jsonbin.io/b/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'secret-key': SECRET_KEY,
//         },
//         body: JSON.stringify(data),
//     });
// }
// window.updateData = updateData;
//
// function deleteData(id) {
//     return fetch (`https://api.jsonbin.io/b/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'secret-key': SECRET_KEY,
//         },
//     });
// }
// window.deleteData = deleteData;
//
// const divPart2 = document.createElement('div');
// document.body.append(divPart2);
// const input = document.createElement('input');
// input.type = 'text';
// divPart2.append(input);
// const button = document.createElement('button');
// button.innerHTML = 'Add';
// divPart2.append(button);
// const message = document.createElement('div');
// divPart2.append(message);
// const ol = document.createElement('ol');
// divPart2.append(ol);
//
// function listLoad(){
//     button.disabled = true;
//     let k = ol.children.length;
//     for (let i = 0; i < k; i += 1){
//         ol.children[0].remove();
//     }
//     getData(`${bin_id}`)
//         .then(res => {
//             for (let i = 0; i < res.list.length; i += 1){
//                 const li = document.createElement('li');
//                 const img = document.createElement('img');
//                 img.id = `${i}`;
//                 li.innerHTML = res.list[i];
//                 img.src = 'https://png.pngtree.com/svg/20160103/trash_543127.png';
//                 ol.append(li);
//                 li.append(img);
//                 //при клике на корзину удаляем елемент
//                 img.addEventListener('click', (event) => {
//                     getData(`${bin_id}`)
//                         .then(res => {
//                             arr = res.list;
//                             arr.splice(`${event.path[0].id}`, 1);
//                             return updateData(`${bin_id}`, {list: arr});
//                         })
//                         .then(res => listLoad());
//                 });
//             }
//             button.disabled = false;
//         });
// }
// //list loading
// listLoad();
//
// button.addEventListener('click', () => {
//     message.innerHTML = '';
//     let arr;
//     if(input.value !== ''){
//         getData(`${bin_id}`)
//             .then(res => {
//                 arr = res.list;
//                 arr.push(input.value);
//                 input.value = '';
//                 return updateData(`${bin_id}`, {list: arr});
//             })
//             .then(res => listLoad());
//     } else{
//         message.innerHTML = 'Can not add empty string';
//     }
// });

const div = document.createElement('div');
document.body.append(div);
div.style.cursor = "pointer";
div.innerHTML = 'Нажмите здесь для получения данных об местоположении';
//слушаем клик по надписи
div.addEventListener('click', () => {
    findIp()
        .then(res => look(res['ip']))
        .then(res => {
            div.innerHTML = `${res['data']['country']} ${res['data']['city']}`;
        });

})
//функция поиска нашего айпи
function findIp() {
    const promiseIp1 = fetch('https://api.ipify.org?format=json');
    const promiseIp2 = fetch('https://ipapi.co/json/');
    const promiseIp3 = fetch('http://free.ipwhois.io/json/');
    return Promise.race([promiseIp1, promiseIp2, promiseIp3])
        .then(res => {
            div.innerHTML = "выполняется поиск";
            return res.json();
        })
        .catch(err => {
            div.innerHTML = "ошибка получения ip";
        });
}
//функция поиска данных по айпи
function look(ipStr) {
    return fetch(`https://api.jsonbin.io/g/${ipStr}`, {method: 'GET'})
        .then(res => res.json())
        .catch(err => {
            div.innerHTML = "ошибка получения локации";
        });
}

//Часть 2
const SECRET_KEY = '$2a$10$8e95xdTcNrnKM4C6fJZLmOHAbwHvGifjJXHJAngFpQllsHEpV.TRC';
const bin_id = '5d4c593a00947c04a5a79ac0';

function postData(data) {
    return fetch ('https://api.jsonbin.io/b', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            'private': 'true',
        },
        body: JSON.stringify(data),
    });
}
window.postData = postData;

function getData(id) {
    return fetch (`https://api.jsonbin.io/b/${id}/latest`, {
        method: 'GET',
        headers: {
            'secret-key': SECRET_KEY,
        },
    })
        .then(response => response.json());
}
window.getData = getData;

function updateData(id, data) {
    return fetch (`https://api.jsonbin.io/b/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
        },
        body: JSON.stringify(data),
    });
}
window.updateData = updateData;

function deleteData(id) {
    return fetch (`https://api.jsonbin.io/b/${id}`, {
        method: 'DELETE',
        headers: {
            'secret-key': SECRET_KEY,
        },
    });
}
window.deleteData = deleteData;

const divPart2 = document.createElement('div');
document.body.append(divPart2);
const input = document.createElement('input');
input.type = 'text';
divPart2.append(input);
const button = document.createElement('button');
button.innerHTML = 'Добавить';
divPart2.append(button);
const message = document.createElement('div');
divPart2.append(message);
const ol = document.createElement('ol');
divPart2.append(ol);

function listLoad(){
    button.disabled = true;
    let k = ol.children.length;
    for (let i = 0; i < k; i += 1){
        ol.children[0].remove();
    }
    getData(`${bin_id}`)
        .then(res => {
            for (let i = 0; i < res.list.length; i += 1){
                const li = document.createElement('li');
                const img = document.createElement('img');
                img.id = `${i}`;
                li.innerHTML = res.list[i];
                img.src = 'https://png.pngtree.com/svg/20160103/trash_543127.png';
                ol.append(li);
                li.append(img);
                //при клике на корзину удаляем елемент
                img.addEventListener('click', (event) => {
                    getData(`${bin_id}`)
                        .then(res => {
                            arr = res.list;
                            arr.splice(`${event.path[0].id}`, 1);
                            return updateData(`${bin_id}`, {list: arr});
                        })
                        .then(res => listLoad());
                });
            }
            button.disabled = false;
        });
}
listLoad();

button.addEventListener('click', () => {
    message.innerHTML = '';
    let arr;
    if(input.value !== ''){
        getData(`${bin_id}`)
            .then(res => {
                arr = res.list;
                arr.push(input.value);
                input.value = '';
                return updateData(`${bin_id}`, {list: arr});
            })
            .then(res => listLoad());
    } else{
        message.innerHTML = 'Нельзя добавить пустую строку';
    }
});