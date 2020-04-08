/* UI Stack: Loading State */
var timeOut;

/* De functie voor het tonen van de pagina wordt uitgevoerd wanneer de tijd verstreken is */
function startTellen() {
    timeOut = setTimeout(toonPagina, 3000);
}

function toonPagina() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("loading_state").style.display = "block";
}

/* de gordijnen */
var linkerGordijnStuk = document.querySelector(".gordijn_stuk.links");
var rechterGordijnStuk = document.querySelector(".gordijn_stuk.rechts");

linkerGordijnStuk.addEventListener("click", opGordijnGeklikt);
rechterGordijnStuk.addEventListener("click", opGordijnGeklikt);


function opGordijnGeklikt() {
    if (document.body.classList.contains("tada")) {
        // wachten tot het gordijn dicht is
        // een transtion heeft ook events
        // het transitionend event gaat af als de transition klaar is
        // daarmee kun je wachten om iets te doen tot de transition klaar is
        document.body.classList.remove("tada");
        let eenVanDeGordijnen = document.body.querySelector(".gordijn_stuk.links");
        eenVanDeGordijnen.addEventListener("transitionend", function () {
            // als het gordijn dicht is
            // de film weghalen
            document.body.querySelector("main :first-child").remove();
        }, {
            once: true
        });
    } else {
        document.body.classList.add("tada");
        tatatatahHierIsDeFilm();
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
        var randomMovie = Math.floor(Math.random() * (movies.length));

        /* dit gebeurt voor elke film */
        /* elementen aanmaken voor de HTML van de film */
        let movie = document.createElement("article");
        let flipContainer = document.createElement("div");
        let movieDetails = document.createElement("div");

        let title = document.createElement("h2");
        let simplePlot = document.createElement("p");
        let poster = document.createElement("img");
        let plot = document.createElement("p");

        /* de title vullen met de filminfo van de willekeurig gekozen film uit de array */
        title.innerHTML = movies[randomMovie].title;
        /* de plot vullen met de simpele filminfo van de willekeurig gekozen film uit de array */
        simplePlot.innerHTML = movies[randomMovie].simple_plot;
        /* de src van het plaatje vullen met de filminfo van de willekeurig gekozen film uit de array */
        poster.src = movies[randomMovie].cover;
        /* de plot vullen met de filminfo van de willekeurig gekozen film uit de array */
        plot.innerHTML = movies[randomMovie].plot;

        /* de elementen aan de movie (het article) toevoegen */
        movie.appendChild(title);
        movie.appendChild(simplePlot);

        flipContainer.appendChild(poster);
        movieDetails.appendChild(plot);
        flipContainer.appendChild(movieDetails);
        movie.appendChild(flipContainer);

        /* de movie (het article) aan de main toevoegen */
        document.body.querySelector("main").appendChild(movie);

        /* tadaaah geluid afspelen bij het openen van de gordijnen */
        var audioSurprise = new Audio("https://www.myinstants.com/media/sounds/tadaa.mp3");
        audioSurprise.play();
    }
}


/*****************/
/* stembediening */
/*****************/
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

/* de commando's */
var commandos = ['openen'];
var grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'

/* het luisterobject */
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

function luisteren() {
    recognition.start();
    console.log('Ready to receive a command.');
}

/* het luisterobject de commando's leren */
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'nl';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


function spraakAfhandelen(event) {
    var last = event.results.length - 1;
    var commando = event.results[last][0].transcript;
    console.log('Result received: ' + commando + '. ' + 'Confidence: ' + event.results[0][0].confidence);

    if (commando.trim() == "openen") {
        if (!document.body.classList.contains("tada")) {
            opGordijnGeklikt();
        }
    } else if (commando.trim() == "sluiten") {
        if (document.body.classList.contains("tada")) {
            opGordijnGeklikt();
        }
    }
}

recognition.onresult = function (event) {
    spraakAfhandelen(event);
}

recognition.onend = function () {
    luisteren();
}

luisteren();



/********************/
/* credits na keydown */
/********************/
let drukC = new CustomEvent("drukC");

function showContainer() {
    let container = document.getElementsByClassName("container")[0];
    container.classList.remove("container-hidden");
    console.log("C is gedrukt");
}

function dispatchEvent(event) {
    if (event.keyCode == 67) {
        document.dispatchEvent(drukC);
    }
}
document.addEventListener("keydown", dispatchEvent);
document.addEventListener("drukC", showContainer);
