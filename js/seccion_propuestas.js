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
        cuadro.innerHTML = `<a href="${this.link}" class="image"><img src="${this.imagen}" alt="" /></a>
							<h3 class="major">${this.titulo}</h3>
							<p>${this.descripcion}</p>
							<a href="${this.link}" class="special">Leer más</a>`;
        seccionProp.appendChild(cuadro);
    }
}

Articulo("images/20240715_093738.jpg", "IMPRESIONES Y KIOSCO", "Descubre cómo tenemos pensado ofrecer productos de mejor calidad a un mejor precio", "Propuestas/fotocopiadora.html").mostrarse();