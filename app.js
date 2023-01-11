let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}

let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);