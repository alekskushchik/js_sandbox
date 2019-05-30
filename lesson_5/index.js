const close = document.getElementById('close');
let div = document.getElementById('div');
let button = document.getElementById('showButton');

button.onclick = function(){
  div.style.display = 'block';          // Show
}
close.onclick = function (){
  div.style.display = 'none';           // Hide
}
