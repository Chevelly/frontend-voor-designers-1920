// Door een Eventlistener aan de window te koppelen wordt een scroll-event gedetecteerd.
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
window.addEventListener("scroll", () => {
    let pagina = this;
    let paginaTop = this.scrollY;
    let paginaHeight = this.outerHeight / 2;

// De querySelector selecteert een element in de html.
    let sections = document.querySelectorAll(".scrollAnimatie");
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

// Voegt de 'animatie' class toe of haalt weg als deze al toegevoegd is en dus aan de voorwaarden voldaan is.
        if (paginaTop >= sectionTop - paginaHeight &&
            paginaTop < sectionTop + sectionHeight / 2) {
            section.classList.add("animatie");
        } else {
            section.classList.remove("animatie");
        }
    });
});

// Bron: https://css-tricks.com/snippets/javascript/javascript-keycodes/
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// Het is mij nog niet gelukt om te kunnen tab-en naar verschillende sectie. Wellicht door een loop maar ik heb het nog niet uitgevogeld.
addEventListener("keydown", function (event) {
    if (event.keyCode == 9)
        document.getElementById("volgende1").scrollIntoView();
});
