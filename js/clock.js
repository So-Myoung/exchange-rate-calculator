const clock = document.getElementById("clock");

function getClock(){
    var date = new Date();
    // console.log(date);
    var years = String(date.getFullYear());
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${years}년 ${hours}시 ${minutes}분 ${seconds}초 현재 환율은?`;
}

getClock();
setInterval(getClock, 1000);