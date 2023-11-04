function teste() {

    var mudar = document.querySelector("#area");
    var top, left;
    var area = mudar.getBoundingClientRect(); // Obtém as dimensões do elemento "area"

    // Loop para garantir que a nova posição não se sobrepõe ao elemento "area"
    do {
        top = Math.floor(Math.random() * (800 - 600 + 1)) + 250;
        left = Math.floor(Math.random() * (550 - 1000 + 1)) + 450;
    } while (top + area.height > area.top && top < area.bottom && left + area.width > area.left && left < area.right);

    mudar.style.position = "absolute";
    mudar.style.top = top + "px";
    mudar.style.left = left + "px";
}

function Sim() {
    var imagem = document.querySelector("#imagem");
    imagem.src = "download.jpg"
}