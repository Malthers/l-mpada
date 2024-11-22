const turnOn = document.getElementById ('turnOn');
const lamp = document.getElementById ('lamp');


function isLampQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {
    if (!isLampQuebrada ()) {
        lamp.src = './imagens/acesa.png';
    }
}

function lampOff () {
    if (!isLampQuebrada ()) {
        lamp.src = './imagens/desligada.png';
    }
    
}

function lampQuebrada () {
    lamp.src = './imagens/quebrada.png';
}

function lampOnOff () {
    if (turnOn.textContent == 'Ligar') {
        lampOn();
        turnOn.textContent = 'Desligar';
    }
    else {
        lampOff();
        turnOn.textContent = 'Ligar';
    }
}

turnOn.addEventListener('click' , lampOnOff);
lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave' , lampOff);
lamp.addEventListener('dblclick' , lampQuebrada);


