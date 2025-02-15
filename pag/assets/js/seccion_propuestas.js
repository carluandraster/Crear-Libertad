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