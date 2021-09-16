const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

setInterval(function () {
    const time = new Date();
    hr.style.transform = `rotateZ(${time.getHours() * 30}deg)`;
    mn.style.transform = `rotateZ(${time.getMinutes() * 6}deg)`;
    sc.style.transform = `rotateZ(${time.getSeconds() * 6}deg)`;
})