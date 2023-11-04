function teste(){

        var mudar = document.querySelector("#area");
        var top = Math.floor(Math.random() * (400 - (100) + 1)) + (250);
        var left = Math.floor(Math.random() * (250 - (500) + 1)) + (450);
    
        mudar.style.position = "absolute"; 
        mudar.style.top = top + "px"; 
        mudar.style.left = left + "px"; 
    }
    function Sim(){
        var sim = document.querySelector("#resposta");
        sim.innerHTML = "Eu sabia! kkk"
    }
