const seccionProp = document.querySelector("#four .inner .features");

class Articulo {
    constructor(imagen,titulo,descripcion,link) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
    }

    mostrarse() {
        let cuadro = document.createElement("article");
        cuadro.innerHTML = `<a href="Propuestas/${this.link}" class="image"><img src="images/${this.imagen}" alt="" /></a>
							<h3 class="major">${this.titulo}</h3>
							<p>${this.descripcion}</p>
							<a href="Propuestas/${this.link}" class="special">Leer más</a>`;
        seccionProp.appendChild(cuadro);
    }
}

new Articulo(
    "20240715_093738.jpg",
    "IMPRESIONES Y KIOSCO",
    "Descubrí cómo tenemos pensado ofrecer productos de mejor calidad a un mejor precio",
    "fotocopiadora.html"
).mostrarse();

new Articulo(
    "redes.png",
    "PRENSA Y DIFUSIÓN",
    "Propuestas sobre cómo difundir las noticias del CEI",
    "redes-sociales.html"
).mostrarse();

new Articulo(
    "tesoreria.png",
    "FINANZAS",
    "Así cuidaremos tu bolsillo",
    "tesoreria.html"
).mostrarse();

new Articulo(
    "asuntos-academicos.jpg",
    "ASUNTOS ACADÉMICOS Y BIENESTAR",
    "Por un CEI al servicio de los estudiantes",
    "asuntos_academicos.html"
).mostrarse();

new Articulo(
    "Captura de pantalla 2025-02-15 183347.png",
    "EXTENSIÓN Y POSGRADO",
    "Por un centro que prepare a los estudiantes de cara al futuro",
    "extension_posgrado.html"
).mostrarse();

new Articulo(
    "futbol.jpg",
    "DEPORTES",
    "Mente sano en cuerpo sano. Te contamos cómo vamos a promover el deporte",
    "deportes.html"
).mostrarse();

new Articulo(
    "relaciones_publicas.jpg",
    "RELACIONES PÚBLICAS",
    "Mirá quiénes son nuestros aliados",
    "relaciones_publicas.html"
).mostrarse();

new Articulo(
    "CasaRosada.png",
    "REALIDAD NACIONAL",
    "Que no te mientan. El gobierno nacional no es como te dice la casta universitaria",
    "realidad_nacional.html"
).mostrarse();