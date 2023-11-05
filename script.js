var but = document.getElementById("op2")
var but2 = document.getElementById("op")
var resp = document.getElementById("resp")
function Nao(element) {
    element.value = "Sim";
    but.value = "Não";
    color_def();
}

function Sim(element) {
    element.value = "Sim";
    but2.value = "Não";
    color_def();
}
function color(){
but2.style.background = "green"
resp.innerHTML = "Bem baitola mesmo!"
}
function color2(){
but.style.background = "green"
resp.innerHTML = "Bem baitola mesmo!"
}
function color_def(){
    but.style.background = "rgb(229, 229, 229)"
    but2.style.background = "rgb(229, 229, 229)"
}