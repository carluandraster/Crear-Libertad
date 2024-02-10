"strict mode";

// Declaración de variables

    // Menú principal
        const conocenos = document.getElementById('prox-container');
        const instagram = document.getElementById("ig");
        const tutorias = document.getElementById('tutorias');
        const repositorio = document.getElementById('rep');
        const crear = document.getElementById("crea");
    // Menú de tutorías
        const titulo = document.getElementById('titulo');
        const atras = document.getElementById('atras');
        const whatsapp = document.getElementById('whatsapp');
        const formulario = document.getElementById('inscripcion');
        const videos = document.getElementById('youtube');

        
// Apertura de menú de tutorías
    tutorias.addEventListener("click",()=>{
        // Ocultar menú principal
            conocenos.classList.add('oculto');
            instagram.classList.add('oculto');
            tutorias.classList.add('oculto');
            repositorio.classList.add('oculto');
            crear.classList.add('oculto');

        //Mostrar menú de tutorías
            titulo.classList.remove('oculto');
            atras.classList.remove('oculto');
            whatsapp.classList.remove('oculto');
            formulario.classList.remove('oculto');
            videos.classList.remove('oculto');
    });

// Clausura de menú de tutorías y regreso al menú principal
    atras.addEventListener("click",()=>{
        // Ocultar menú de tutorías
            titulo.classList.add('oculto');
            atras.classList.add('oculto');
            whatsapp.classList.add('oculto');
            formulario.classList.add('oculto');
            videos.classList.add('oculto');

        // Mostrar menú principal
            conocenos.classList.remove('oculto');
            instagram.classList.remove('oculto');
            tutorias.classList.remove('oculto');
            repositorio.classList.remove('oculto');
            crear.classList.remove('oculto');
    });