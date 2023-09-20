var iniciar = document.querySelector("#Iniciar");
var pausar = document.querySelector("#Pausar");
var parar = document.querySelector("#Parar");
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span3");
var span4 = document.querySelector("#span4");
var icone_clock = document.querySelector(".fa-clock");
var icone_hourglass = document.querySelector(".fa-hourglass");
let intervalo;
var numeroClick = 0;

icone_hourglass.style = "display: none; font-size: 70px";
pausar.disabled = true;
parar.disabled = true;
pausar.style = "background: gray; color: white; cursor: auto";
parar.style = "background: gray; color: white; cursor: auto";

function IntervaloContador() {
    span4.innerText = Number(span4.innerText) + Number(1);

    if (span4.innerText > 9) {
        span4.innerText = Number(0);
        span3.innerText = Number(span3.innerText) + Number(1);
    }

    if (span3.innerText > 5) {
        span3.innerText = Number(0);
        span2.innerText = Number(span2.innerText) + Number(1);
    }

    if (span2.innerText > 9) {
        span2.innerText = Number(0);
        span1.innerText = Number(span1.innerText) + Number(1);
    }
}

function Contador() {
    pausar.textContent = "Pausar";
    intervalo = setInterval(() => {
        IntervaloContador();
    }, 1000);
}

function Iniciar() {
    Contador();
    iniciar.disabled = true;
    pausar.disabled = false;
    parar.disabled = false;
    iniciar.style = "background: gray; color: white; cursor: auto";
    pausar.style = "background: #299; color: white; cursor: pointer";
    parar.style = "background: red; color: white; cursor: pointer";
    icone_clock.style = "display: none; font-size: 70px";
    icone_hourglass.style = "display: block; font-size: 70px";
}

function Pausar() {

    if (pausar.textContent == "Pausar") {
        span1.innerText = span1.innerText;
        span2.innerText = span2.innerText;
        span3.innerText = span3.innerText;
        span4.innerText = span4.innerText;
        numeroClick = 0;
        pausar.textContent = "Continuar";
        pausar.style = "background: #299; color: white; cursor: pointer";
        icone_clock.style = "display: block; font-size: 70px";
        icone_hourglass.style = "display: none; font-size: 70px";
        clearInterval(intervalo);
    }
    else if (pausar.textContent == "Continuar") {
        icone_clock.style = "display: none; font-size: 70px";
        icone_hourglass.style = "display: block; font-size: 70px";
        pausar.style = "background: #299; color: white; cursor: pointer";
        numeroClick = 0;
        pausar.textContent = "Pausar";
        Contador();
    }

}

function Parar() {
    iniciar.disabled = false;
    pausar.disabled = true;
    parar.disabled = true;
    iniciar.style = "background: #299; color: white; cursor: pointer";
    pausar.style = "background: gray; color: white; cursor: auto";
    parar.style = "background: gray; color: white; cursor: auto";
    icone_clock.style = "display: block; font-size: 70px";
    icone_hourglass.style = "display: none; font-size: 70px";
    span1.innerText = Number(0);
    span2.innerText = Number(0);
    span3.innerText = Number(0);
    span4.innerText = Number(0);
    pausar.textContent = "Pausar";
    clearInterval(intervalo);
}