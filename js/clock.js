const clock = document.getElementById("clock");

function getClock(){
    var date = new Date();
    // console.log(date);
    var years = String(date.getFullYear());
    var months = String(date.getMonth()+1);
    var dates = String(date.getDate());
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${years}-${months}-${dates} ${hours}:${minutes}:${seconds} 현재 환율은?`;
}

getClock();
setInterval(getClock, 1000);
