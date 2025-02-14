const seccionProp = document.querySelector("#four .features")

class Articulo {
    constructor(imagen,titulo,descripcion,link) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
    }

    mostrarse() {
        cuadro = document.createElement("article");
        cuadro.innerHTML = `<a href="${this.link}" class="image"><img src="images/pic04.jpg" alt="" /></a>
							<h3 class="major">Fotocopiadora</h3>
							<p>Descubrí nuestras propuestas para ofrecerle al alumnado fotocopias de mejor calidad a un mejor precio.</p>
							<a href="${this.link}" class="special">Leer más</a>`;
    }
}