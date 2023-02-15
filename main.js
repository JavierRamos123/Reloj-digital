
//RELOJ
function reloj() {
    let horas = document.getElementById("hora");
    let minutos = document.getElementById("minuto");
    let segundos = document.getElementById("segundo");
    let ampm = document.getElementById("am-pm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    //Cambiar el formato de 24 horas al formato de 12 con el indicador de AM y PM
    if (h > 12) {
        h = h - 12;
        var am = 'PM';
    }

    //Añade un 0 al principio de un n-umero si es menor que 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
    ampm.innerHTML = am;
}

var interval = setInterval(reloj, 1000);




//guardar tema
const colorTemas = document.querySelectorAll('[name="tema"]');

const guardarTema = function(tema){
    localStorage.setItem("tema", tema);
};

//respaldo para :has() support
const setTema = function(tema){
    document.documentElement.className = tema;
}


const obtenerTema = function(){
    const temaActivo = localStorage.getItem("tema");
    colorTemas.forEach((temaOpcion) => {
        if (temaOpcion.id === temaActivo){
            temaOpcion.checked = true;
        }
    });
    //respaldo para :has() support
    document.documentElement.className = tema;
};

colorTemas.forEach(temaOpcion => {
    temaOpcion.addEventListener('click', () => {
        guardarTema(temaOpcion.id);
    });
});

document.onload = obtenerTema();