window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.getElementsByClassName(elem);
}



function init() {
    for (let index = 0; index < 10; index++) {
        var szamok = document.querySelectorAll(".szamok ")[0];
        szamok.innerHTML += "<button></button>"
        var szamba = document.querySelectorAll("button")[index];
        szamba.innerHTML = index
    }
}

function kattintas() {
    elem.addEventListener("click", kattintas);
}