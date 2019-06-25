// Задание 1
function matrixDiff(arr1, arr2) {
    let sum = 0;
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].length == arr2[i].length) {
                for (let j = 0; j < arr2.length; j++) {
                    sum += Math.abs(arr1[i][j] - arr2[i][j]);
                }
            } else {
                return NaN;
            }
        }
    } else {
        return NaN;
    }
    return sum;
}
window.matrixDiff = matrixDiff;

// Задание 2
function onSearch() {
  console.log('click');

  const inputs = document.getElementsByTagName('input');
  const words = [];

  for (let i = 0; i < inputs.length; i += 1) {
      if (+inputs[i].value !== 0) {
          words.push({ word: inputs[i].id, value: +inputs[i].value });
          // console.log(inputs[i].id);
      }
  }

  words.sort((a, b) => a.value - b.value);
  const str = words.map(o => o.word).join('+');

  console.log(words, str);

  window.location.href = `https://www.youtube.com/results?search_query=${str}`;
}

function strangeSearch(words) {

  for (i = 0; i < words.length; i += 1) {
      const div = document.createElement('div');
      const input = document.createElement('input');

      div.innerHTML = words[i];
      input.type = 'number';
      input.value = 0;
      // input.setAttribute('id', words[i])
      input.id = words[i];

      document.body.appendChild(div);
      document.body.appendChild(input);

  }

  const button = document.createElement('button');

  button.id = 'go';
  button.innerHTML = 'Search';
  button.addEventListener('click', onSearch)
  document.body.appendChild(button);
}
window.strangeSearch = strangeSearch;

// Задание 4
import cat from "./cat.png";
function stickyCat() {

    const img = document.createElement('img');
    document.body.append(img);

    img.src = cat;
    img.style.position = 'absolute';
    img.style.top = '50px';
    img.style.left = '50px';
    img.style.width = '200px';

    window.addEventListener('mousemove', (event) => {
        img.style.left = `${event.clientX}px`;
        img.style.top = `${event.clientY}px`;
    })
}

function unstickTheСat(){
    const img = document.getElementsByTagName('img');
    for (let k = 0; k < img.length; k += 1){
        img[k].remove();
    }
    window.removeEventListener('mousemove', (event) => {
            img.style.left = `${event.clientX}px`;
            img.style.top = `${event.clientY}px`;
        })
}
window.stickyCat = stickyCat;
window.unstickTheСat = unstickTheСat;