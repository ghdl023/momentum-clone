const body = document.querySelector('body');

function loadBackground(){
    const num = Math.floor(Math.random()*3);
    // console.log(num);
    body.style.backgroundImage = `url("images/${num+1}.jpg")`;
    body.style.backgroundSize = "cover";
}

function init(){
    loadBackground();
}

init();

