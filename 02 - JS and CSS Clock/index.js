
function timeUpdate() {

    let secondsNow = new Date().getSeconds();
    let secondsAngle = ((secondsNow / 60) * 360 + 90);
    document.querySelector(".second-hand").style.transform = `rotate(${secondsAngle}deg)`;
    console.log(`sekund: ${secondsNow}`);

    let minutesNow = new Date().getMinutes();
    let minutesAngle = ((minutesNow / 60) * 360 + 90)
    document.querySelector(".min-hand").style.transform = `rotate(${minutesAngle}deg)`;
    console.log(`minut:` + minutesNow);

    let hoursNow = new Date().getHours();
    let hoursAngle = ((hoursNow / 12) * 360 + 90)
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursAngle}deg)`;
    console.log(`hodin:` + hoursNow);
}


setInterval(timeUpdate, 1000);










