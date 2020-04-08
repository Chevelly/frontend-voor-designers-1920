## GitHub Pages
[Klik hier om de live site van Opdracht 3 te bekijken.](https://chevelly.github.io/frontend-voor-designers-1920/opdracht3/)

# Opdracht 3: Een interactie uitwerken met externe data
## Verslaglegging door Chevelly Hiralall, 500700481

Dit verslag beschrijft en visualiseert de stappen van het schetsen tot het ontwerpen van een uitgewerkte interactie met externe data. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers mijn ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond. Het ontwerp is uitgewerkt in HTML, CSS en Javascript om te kunnen testen in een browser.


## Ontwerp
Voor de eindopdracht wil een 'Quaranthemed Movie Generator' ontwerpen die de gebruiker een willekeurige film als suggestie laat zien om te bekijken tijdens deze vreemde en vervelende situatie waar we ons in bevinden. Het is een tool om de verveling voor velen tegen te gaan.


## Werkwijze
Aan de hand van de beschikbare externe JSON data heb ik een functionaliteit bedacht die je op meerdere manieren kunt bedienen. Ik heb eerst geschetst hoe de functionaliteit er uit komt te zien. Daarna schets ik een breakdown van hoe de verschillende elementen technisch moeten gaan werken. Tot slot codeer ik de functionaliteit in HTML, CSS en Javascript en test ik verschillende versies van mijn ontwerp in een browser.


## Criteria
1. De uitwerking van mijn ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak ik gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers mijn ontwerp op verschillende manieren kunnen bedienen.
5. In de demo houd ik rekening met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Mijn ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat is gepubliceerd op Github


## Proces

### 01 Het ontwerp
Om mijn ideeën te visualiseren ben ik begonnen met het maken van een schets. In de schets visualiseer ik de breakdown van de user interface en de functionaliteiten en beschrijf ik de technische opzet die nodig is om dit te kunnen realiseren.
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/schets01.jpg "Schetsen")
De beschikbare externe JSON data was een verzameling van films en meer informatie over die film, waaronder een korte samenvatting, de acteurs, het genre en de waardering. Kort nadat we de eindopdracht uitgelegd kregen moest heel Nederland in quarantaine vanwege het corona-virus. Ik zal al snel stories voorbij komen op Instagram van mensen die zich verveelden en op zoek waren naar leuke titels om te bekijken op Netflix. Netflix heeft een gigantisch aanbod aan titels dus de keuze kan al snel overweldigend zijn. Dit zorgt bij velen voor keuzestress. En dit was dan ook de challenge waarvoor ik een ontwerp wilde maken.

### 02 De gordijnen
Tijdens het realiseren van mijn ontwerp ben ik begonnen met de gordijnen die altijd gesloten zijn bij aankomst van de gebruiker. Door twee *div'jes* door middel van een class die ik aanroep in de CSS een linker- en rechterpositie te geven kon ik de *div'jes* naast elkaar positioneren. Dit is belangrijk omdat de gordijnen dan opzij kunnen schuiven.
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn1.png "Gordijnen")
In mijn eerste poging heb ik gebruik gemaakt van een plaatje van gordijnen. Al snel vond dat ik er op deze manier te gemakkelijk van afkwam dus besloot ik het effect van gordijnen na te maken met behulp van CSS.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn2.png "Gordijnen")
Met behulp van een [CSS tricks bron](https://css-tricks.com/stripes-css/) heb ik geprobeerd het effect van gordijnen te immiteren en diepte te creeëren door afwisselend lichte en donkere roodgekleurde banen naast elkaar te plaatsen. Ook heb ik de *radius* van de gordijnstukken links- en rechtsonder een bolling gegeven wat het visueel effect geeft dat er achter de gordijnen nog iets aanwezig is.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn3.png "Gordijnen")
Om het ontwerp van de landingspagina één algehele sfeer te geven heb ik een [Google font](https://fonts.google.com/specimen/Ewert?query=ewer) voor de titel op het gordijn. Net als de gordijnstukken heb ik ook deze titel in tweeën gehakt waarbij het ene deel zich in de linker-*div* bevindt en het andere deel in rechter-*div*. Wanneer de gebruiker op de gordijnen klikt zullen de gordijnen en de titel vanuit het midden naar links of rechts en buiten het beeld schuiven. Dit heb ik gedaan met behulp van CSS waarbij ik met *transform: translateX(calc(+ / -))* voor een horizontale verplaatsing zorg.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn4.png "Gordijnen")
In het eindontwerp is de grootste verandering dat je naast klikken nu ook met stembediening de gordijnen kan openen en sluiten. Dit heb ik met behulp van [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) en Sanne voor elkaar gekregen. In Javascript heb ik een *luisterobject* aangemaakt en haar *commando's* aangeleerd zoals *openen* en *sluiten*. Daarnaast is de titel op de landingspagina aangepast zodat, met de [interface design principle 04](http://bokardo.com/principles-of-user-interface-design/) in gedachten, het de gebruiker begeleidt in het gebruiken van de website en vertelt wat hem of haar te verwachten staat.

### 03 Het ophalen van de film
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/renderen1.png "Renderen")
Tijdens de les waarbij de eindopdracht en de werking van JSON uitgelegd werd was ik vanwege ziekte helaas niet aanwezig. Ik moest er dus zelfstandig uit zien te komen. Na veel gezucht en gevloek besloot ik Sanne om hulp te vragen. Hij stuurde mij [de link naar een codepen](https://codepen.io/shooft/pen/LYVBeVv) die ik deels gekopieerd heb om een begin te kunnen maken aan het ophalen van de externe data. Ik kies er voor nu voor om de titel van een film, een simpele plot en een poster te gebruiken als data in mijn ontwerp.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/renderen2.png "Renderen")
Met de coderegel *var randomMovie = Math.floor(Math.random() * (movies.length));* is het mij gelukt om alle films in de array in JSON te doorlopen en een willekeurige film terug te keren. De gebruiker krijgt elke keer wanneer de gordijnen openen een willekeurige film te zien. Helaas worden de rest van de films uit de array ook eronder weergeven. Dit zorgt voor wat lichtelijke frustratie. Ik ben er namelijk bijnaaaaaa.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/renderen3.png "Renderen")
Door de *overflow* van de *body* op *hidden* te zetten is het gelukt om niet meer te laten zien dan wat de *body* toelaat. De achtergrond waar de film getoond wordt heb ik in de CSS bewust met een *radial-gradient* ontworpen waarbij ik gebruik maken van drie zwarttinten die richting het midden steeds lichter worden. Dit geeft het visuele effect van het scherm zoals in de bioscoop.


### 03 Lights, camera, action!
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/spotlights.png "Spotlights")
Door de titel bewust een ander lettertype, grootte en kleur te geven dan het plot van de film houd ik rekening met [interface design principle 11](http://bokardo.com/principles-of-user-interface-design/) waarbij ik een sterke visuele hiërarchie creeër. Ook de plaatsing van de verschillende elementen verteld dat eerst de titel gelezen moet worden om het plot te kunnen begrijpen. De poster die daaronder geplaatst is, is als toevoeging op bovenstaande.

Om het filmische effect van het ontwerp te vergroten heb ik spotlights toegevoegd die over en weer, links en rechts, de willekeurig gekozen film belichten. Ik kies voor een gele kleur net als de kleur van een lamp. Met *rgba* geef ik een *opacity* aan de kleur waardoor, wanneer het over de film heen beweegt, de film nog steeds zichtbaar is. Voor een speels en realistisch effect zet ik de duur van het rechter-spotlight op 5 seconden en die van de linker op 4 seconden.

### 04 MouseEvent
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/hover1.png "Hoveren")


![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/hover2.png "Hoveren")

### 05 KeyboardEvent
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits1.png "Credits")
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits2.png "Credits")
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits3.png "Credits")
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits4.png "Credits")

### 06 UI Stack: Loading State
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/loadingstate.png "LoadingState")

