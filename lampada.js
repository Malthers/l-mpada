const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
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
turnOn.addEventListener('click' , lampOn);
turnOff.addEventListener('click' , lampOff);
lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave' , lampOff);
lamp.addEventListener('dblclick' , lampQuebrada);


