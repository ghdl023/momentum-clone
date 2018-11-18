const form = document.querySelector(".greeting_form");
const input = form.querySelector(".greeting_from-input");
const text = document.querySelector(".greeting_text");
const title = document.querySelector(".greeting_text-title");

const HIDDEN_CN = "hidden";

function paintGreeting(name){
    form.classList.add(HIDDEN_CN);
    text.classList.remove(HIDDEN_CN);
    title.innerHTML = `Good afternoon, ${name}.`;
}

function saveUserName(event){
    event.preventDefault();
    // alert(input.value);
    localStorage.setItem('user',input.value);
    paintGreeting(input.value);
}


function init(){
    let user = localStorage.getItem('user');
    if(user){
        form.classList.add(HIDDEN_CN);  
        paintGreeting(user);
    }else{
        text.classList.add(HIDDEN_CN);
        form.addEventListener("submit",saveUserName);
    }
}

init();