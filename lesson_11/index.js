const SECRET_KEY = '$2a$10$t2cG6IyBFHytnd3a8wF1AuR0O8ce6R7Up9L2M0JbJaRvhXRlfF8SC\n';

function geolocation_search() {
    const div = document.getElementById('div');
    const div1 = document.getElementById('div1');
    fetch('http://ip-api.com/json/', { method: 'GET' })
        .then((res) => res.json())
        .then((new_ip) => {
            const address = new_ip.query;
            fetch(`https://api.jsonbin.io/g/${address}`, { method: "GET" })
            .then((result) => result.json())
            .then((geolocation) => {
                div.innerText = `${geolocation.data.city} ${geolocation.data.country}`;
            })
            .catch((err) => div.innerText = err);
    })
        .catch((err) => div.innerText = err);
    div1.style.display = 'none';
}

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

function getData() {
    return fetch('https://api.jsonbin.io/b/5d4f179c49334a4c52889c8b/latest', {
        method: 'GET',
        headers: {
            'secret-key': SECRET_KEY
        }
    })
        .then(res => res.json());
}
window.getData = getData;

function updateData(id, data) {
    return fetch ('https://api.jsonbin.io/b/5d4f179c49334a4c52889c8b', {
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
    return fetch ('https://api.jsonbin.io/b/5d4f179c49334a4c52889c8b', {
        method: 'DELETE',
        headers: {
            'secret-key': SECRET_KEY,
        },
    });
}
window.deleteData = deleteData;

function fun_list() {
    const div = document.getElementById('list');
    const input = document.createElement('input');
    input.setAttribute = ('type', 'text');
    input.value = '';
    const button = document.createElement('button');
    button.innerHTML = 'Add';
    input.style.margin = '15px';
    input.style.height = '20px';
    input.style.width =  '250px';
    const ol = document.createElement('ol');
    button.style.borderRadius = '10px';
    button.style.width = '60px';
    button.style.height = '25px';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(ol);
    button.addEventListener('click', () =>{
        if(input.value != ''){
            putDate({ list: input.value});
            getDate().then((res) => {
                    const li = document.createElement('li');
                    li.innerText = res.list;
                    li.style.color = 'white';
                    li.style.fontSize = '22px';
                    ol.appendChild(li);
                    input.value = '';
                }
            )}
    })
}