"strict mode";

// Declaración de variables
const titulo = document.getElementById('titulo');
const conocenos = document.getElementById('sitio-web');
const botonDeRedesSociales= document.getElementById('redes');
const atras = document.getElementById('btn-atras');
const instagram = document.getElementById("ig");
const threads = document.getElementById("th");
const tutorias = document.getElementById('tutorias');
const repositorio = document.getElementById('rep');
const crear = document.getElementById("crea");

//Escucha de click del botón de redes sociales
botonDeRedesSociales.addEventListener("click",()=>{

    // Oculto los botones del menú principal
    conocenos.classList.add('oculto');
    botonDeRedesSociales.classList.add('oculto');
    tutorias.classList.add('oculto');
    repositorio.classList.add('oculto');
    crear.classList.add('oculto');

    // Muestro los botones de las redes sociales
    titulo.classList.remove("oculto");
    atras.classList.remove('oculto');
    instagram.classList.remove('oculto');
    threads.classList.remove('oculto');
});

// Escucha de click del botón de 'Volver'
atras.addEventListener("click",()=>{

    // Muestro los botones del menú principal
    conocenos.classList.remove('oculto');
    botonDeRedesSociales.classList.remove('oculto');
    tutorias.classList.remove('oculto');
    repositorio.classList.remove('oculto');
    crear.classList.remove('oculto');

    // Oculto los botones de las redes sociales
    titulo.classList.add("oculto");
    atras.classList.add('oculto');
    instagram.classList.add('oculto');
    threads.classList.add('oculto');
});
