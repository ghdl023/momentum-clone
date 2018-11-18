const clockTitle = document.querySelector(".clock_title");

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();