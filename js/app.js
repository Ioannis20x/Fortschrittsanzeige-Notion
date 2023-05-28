var jahrbar = document.getElementById("year");
var jahrp = document.getElementById("yearp");
var monthbar = document.getElementById("month");
var monthp = document.getElementById("monthp");
var daybar = document.getElementById("day");
var dayp = document.getElementById("dayp");
var Daten = new Date();

window.onload = () => {
    calcyear();
    setValues();
    calcday();
    calcmonth();
}
//Jahr
function calcyear() {
    var start = new Date(Daten.getFullYear(), 0, 0);
    var diff = Daten - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    let akt = (100/365)*day;
    console.log("Jahr: " + akt);
    jahrbar.value = akt;
    return akt;
}


//Monat
function calcmonth() {
    let max, akt;
    if (Daten.getMonth() % 2 == 0) {
        max = 31;
    } else if (Daten.getMonth() % 2 == 1) {
        max = 30;
    }
    akt = (100 / max) * Daten.getDate();
    monthbar.value = akt;
    console.log("Monat: " + akt);
    return akt;
}

//Tag
function calcday() {
    let akt = (100 / 24) * Daten.getHours();
    console.log("Tag: " + akt);
    daybar.value = akt;
    return akt;
}

function setValues() {
    jahrp.innerText = "Jahr: " + Math.round(calcyear()) + "%";
    monthp.innerText = "Monat: " + Math.round(calcmonth()) + "%";
    dayp.innerText = "Tag: " + Math.round(calcday()) + "%";
}