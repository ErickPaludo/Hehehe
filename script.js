function teste(){

        var mudar = document.querySelector("#op");
        var top = Math.floor(Math.random() * (200 - (100) + 1)) + (250);
        var left = Math.floor(Math.random() * (200 - (100) + 1)) + (150);
    
        mudar.style.position = "absolute"; 
        mudar.style.top = top + "px"; 
        mudar.style.left = left + "px"; 
    }
    function Sim(){
        var sim = document.querySelector("#resposta");
        sim.innerHTML = "Eu sabia! kkk"
    }
