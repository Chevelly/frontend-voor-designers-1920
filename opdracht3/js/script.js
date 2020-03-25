/* de checkbox */
var deCheckbox = document.querySelector("input");
/* als er op geklikt wordt, wordt de functie haalMoviesOp uitgevoerd */
deCheckbox.addEventListener("change", opCheckboxGeklikt);



function opCheckboxGeklikt(){
    // als de checkbox ge-check-ed wordt
    if ( this.checked ) {
        // wachten tot het gordijn dicht is
        // een transtion heeft ook events
        // het transitionend event gaat af als de transition klaar is
        // daarmee kun je wachten om iets te doen tot de transition klaar is
        let eenVanDeGordijnen = document.body.querySelector(".gordijn_stuk-links");
        eenVanDeGordijnen.addEventListener("transitionend", function(){
            // als het grodijn dicht is
            // de film weghalen
            document.body.querySelector("main :first-child").remove();
        }, {once: true});
    }

    // als de checkbox ge-uncheck-ed wordt
    else {
        // film ophalen
        tatatatahHierIsDeFilm();
        // gordijn open
        // gaat met css
    }
}


function tatatatahHierIsDeFilm() {

    /* dit is de url waar je de data vandaan haalt */
    let requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

    /* de verbinding met de server maken */
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";

    /* het verzoek naar de server sturen */
    request.send();

    /* dit is de functie die wordt uitgevoerd als de server informatie terugstuurt */
    request.onload = function () {

        /* een status tussen 200 en 400 betekent dat de data ok is */
        if (request.status >= 200 && request.status < 400) {
            /* de response van de server (de data) wordt in een variabele gestopt */
            var movies = request.response
            /* de data is een array met daarin een lijst met films */
            /* mogelijkheid tot loggen om de structuur en inhoud van de array te bekijken */
            console.log(movies);
            /* dan sturen we de data naar de functie renderMovies om de main te vullen */
            renderMovies(movies);
        }

        /* een andere status betekent dat er iets mis is met de data */
        else {
            // We reached our target server, but it returned an error
        }
    };

    /* dit is de functie die wordt uitgevoerd als de server een fout terugstuurt */
    request.onerror = function () {
        // There was a connection error of some sort
    };

    function renderMovies(movies) {
        /* doorloopt alle films in de array en keert een willekeurige film terug */
        var randomMovie = Math.floor(Math.random() * (movies.length)); {

            /* dit gebeurt voor elke film */
            /* elementen aanmaken voor de HTML van de film */
            let movie = document.createElement("article");
            let title = document.createElement("h2");
            let plot = document.createElement("p");
            let poster = document.createElement("img");

            /* de title vullen met de filminfo van de willekeurig gekozen film uit de array */
            title.innerHTML = movies[randomMovie].title;
            /* de plot vullen met de filminfo van de willekeurig gekozen film uit de array */
            plot.innerHTML = movies[randomMovie].simple_plot;
            /* de src van het plaatje vullen met de filminfo van de willekeurig gekozen film uit de array */
            poster.src = movies[randomMovie].cover;

            /* de elementen aan de movie (het article) toevoegen */
            movie.appendChild(title);
            movie.appendChild(plot);
            movie.appendChild(poster);

            /* de movie (het article) aan de main toevoegen */
            document.body.querySelector("main").appendChild(movie);
        }
    }
}

/*
let random = document.getElementById("random");
// nieuwe node creeeren
let main = document.createElement("main");
main.textContent = movie;
// het item vervangen

random.replaceChild(main, random.firstElementChild);


const header = document.querySelector("header");
const section = document.querySelector("section");

function showTitle(jsonObj) {

    var i;
    for (i = 0; i < 20; i++) {
        const title = document.createElement('p');
        title.textContent = jsonObj[i]['title'];
        header.appendChild(title);
    }
} */

