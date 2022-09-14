
const tempo = document.querySelector("#time");

setInterval(function() {
    
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();


if ( (hours >= 0) && (hours <= 9) ){
    hours = "0" + hours;
}

if ( (minutes >= 0) && (minutes <= 9) ){
    minutes = "0" + minutes;
}

if ( (seconds >= 0) && (seconds <= 9) ){
    seconds = "0" + seconds;
} 

let relogio = hours +":"+ minutes +":"+ seconds;

tempo.innerHTML = relogio;

}, 1000)

