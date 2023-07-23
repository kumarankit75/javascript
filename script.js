const time = document.getElementById('time');
const timeformate = document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);
});

const showTime = ()=>{
let date = new Date();

let hr= date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();

hr = hr<10 ? `0${hr}` : hr;
mins = mins<10 ? `0${mins}` : mins;
secs = secs<10 ? `0${secs}` : secs;

time.innerHTML = `${hr} : ${mins} : ${secs}`;
timeformate.innerHTML = hr>12 ? "PM" : "AM";
}