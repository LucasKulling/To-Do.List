//añadir lugar donde poner tareas hechas
//frases motivadoras cada vez
// podes escribir en la nota y no es una alerta
// que en la intro los botones se vean mas oscuros


const botonAñadirObjeto = document.getElementById("añadir-objeto");
const botonSustraerObjeto = document.getElementById("sustraer-objeto");
const elementoPadre = document.getElementById("espacio-tareas");
const tareasPendientesEspacio = document.getElementById("tareas-pendientes-numero")
let botonesEditar = [];
let tarea = [];
let pins = [];
let tareasPendientes = 0



document.addEventListener("DOMContentLoaded", function() {
    const aviso = document.getElementById("aviso");
    const cerrarAviso = document.getElementById("cerrar-aviso");
    aviso.style.display = "block";
    cerrarAviso.addEventListener("click", function() {
        aviso.style.display = "none";
    });
});



for (let i = 1; i <= 16; i++) {
    let botonEditar = document.getElementById("editar-tarea" + i);
    botonesEditar.push(botonEditar);
}

for(let i = 1; i<=16; i++){
    let botonPin = document.getElementById("pin" + i)
    pins.push(botonPin)
}



for (let i = 0; i < pins.length; i++) {
    pins[i].addEventListener("click", function(){
    let primerElemento = elementoPadre.firstElementChild;
    let elementoAMover = tarea[i];
    pins[i].style.color = "#d72638"
    elementoPadre.insertBefore(elementoAMover, primerElemento);
    });
}


for (let i = 1; i <= 16; i++) {
    let tareaActual = document.getElementById("tarea" + i);
    tarea.push(tareaActual);
    tareaActual.style.display = "none"; 
}

function sacarUltimo() {
    for (let i = tarea.length - 1; i >= 0; i--) {
        if (tarea[i].style.display === "flex") {
            let textoEditable = document.getElementById("texto" + i);
            textoEditable.textContent = "Tarea..."
            tarea[i].style.display = "none";
            tareasPendientes -= 1;
            tareasPendientesEspacio.innerHTML = tareasPendientes
            break; 
        }
    }
}

function mostrarLista() {
    for (let i = 0; i < tarea.length; i++) {
        if (tarea[i].style.display === "none") {
            tarea[i].style.display = "flex";
            tareasPendientes += 1;
            tareasPendientesEspacio.innerHTML = tareasPendientes
            break; 
        }
    }
}

for (let i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].addEventListener("click", function () {
        agregarTexto(i);
    });
}

function agregarTexto(num) {
    num = num + 1;
    var nuevoTexto = prompt("Ingrese el nuevo texto:");
    let textoEditable = document.getElementById("texto" + num);
    if (nuevoTexto !== null) {
        textoEditable.textContent = nuevoTexto;
    }
    
}

//event listeners
botonAñadirObjeto.addEventListener("click", mostrarLista);
botonSustraerObjeto.addEventListener("click", sacarUltimo);