const form = document.querySelector(".greeting_form");
const input = form.querySelector(".greeting_from-input");
const user = document.querySelector(".greeting_user");
const name = document.querySelector(".greeting_user-name");

const HIDDEN_CN = "hidden";

function saveUserName(event){
    event.preventDefault();
    // alert(input.value);
    localStorage.setItem('user',input.value);
}

function init(){
    if(localStorage.getItem('user')){
        form.classList.add(HIDDEN_CN);  
        name.innerHTML = `Good afternoon, ${localStorage.getItem('user')}.`;
    }else{
        user.classList.add(HIDDEN_CN);
        form.addEventListener("submit",saveUserName);
    }
}

init();