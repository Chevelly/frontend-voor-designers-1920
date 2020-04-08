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

Om de gebruiker een totaalbeleving te geven van het filmische karakter van mijn ontwerp heb ik in Javascript een regel code toegevoegd die een 'tadaaaaah' audio afspeelt wanneer de gebruiker de gordijnen opent en een willekeurige film aangeboden krijgt. De audio is afkomstig van een [online bron](https://www.myinstants.com/media/sounds/tadaa.mp3).


### 04 MouseEvent
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/hover1.png "Hoveren")
Zoals in mijn schets te zien was wilde ik oorspronkelijk dat het mogelijk was om de achterkant van de poster te bekijken voor meer informatie. Net als hoe je vroeger in de videotheek een film uitkoos, je op de voorkant de poster zag en op de achterkant meer erover kon lezen. Door middel van het *MouseEvent* *hoveren* heb ik de poster kunnen omdraaien waarbij je een gespiegelde versie van de poster ziet. Nu is het de taak om de achter de poster een *div* te plakken waarin de samenvatting van de film vanuit JSON geladen wordt.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/hover2.png "Hoveren")
Ik kwam er zelf niet uit dus heb ik opnieuw een hulplijn ingezet en Sanne gemaild. Toen bleek dat het bij mij niet lukte om de poster te draaien met een *MouseEvent* omdat de poster onder een aantal lagen verstopt zat, waaronder de gordijnstukken en de spotlights, waardoor het *hover-event* niet ontvangen werd door de poster. Sanne heeft dit voor mij aangepast door de gordijnen op een andere manier te coderen (zonder checkbox). De aanpassingen die ik vervolgens gedaan heb waren de *border*, die heb ik dezelfde kleur en *ridge* gegeven als die van de poster. En om ervoor te zorgen dat de grootte van de samenvatting niet afweek van van de grootte van de poster, zoals op de foto te zien is, heb ik de *overflow* op *hidden* gezet.


### 05 KeyboardEvent
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits1.png "Credits")
Om de gebruiker te laten weten dat de experience tot zijn eind is gekomen, maak ik gebruik van een KeyboardEvent. Met een speechbubble vraag ik de gebruiker of hij of zij tevreden is met de filmkeuze. Wanneer dit niet het geval is wordt er gevraagd *sluiten* te roepen, waardoor de gordijnen sluiten en bij openen er opnieuwe een willekeurige film getoond wordt. Een wel heel erg simpele manier van het toepassen van de [interface design principle 04](http://bokardo.com/principles-of-user-interface-design/) waarbij ik de gebruiker vertel wat er te doen is en wat hem of haar te verwachten staat.

Wanneer de gebruiker tevreden is met de film, kan er op de keyboard-toets C gedrukt worden. Wat er dan gebeurd is hieronder te zien:

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits2.png "Credits")
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits3.png "Credits")
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/credits4.png "Credits")
De gekozen film maakt plaats voor de credits. In de eerste en tweede afbeelding is te zien hoe de namen van beneden (uit het beeld) naar boven (uit het beeld) schuiven. In CSS codeer ik dit met een 12 seconden durende *linear infinite animation* met een verticale verplaatsing door middel van *transform: translateY(-115%)* waarbij ik rekening houd dat de namen uit en weer in het beeld moeten schuiven. Ten opzichte van de eerste en tweede afbeelding, zijn de namen in de derde afbeelding in de html gecodeerd als *list-items* in een *ul*.

In Javascript roep ik aan dat wanneer op de 'C' *van credits én Chevelly ;)* gedrukt wordt de *class* die ervoor zorgt dat de credits *hidden* zijn verwijderd worden.

Dit is het einde van de 'Quaranthemed Movie Generator' experience.


### 06 UI Stack: Loading State
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/loadingstate.png "LoadingState")
De grootste uitdaging van deze opdracht was ontwerpen op basis van de UI Stack. Ik heb mij er goed in verdiept en meerdere mogelijkheden uitgeprobeerd maar door lack of skills was ik al snel geneigd aan een stuk door te COMMAND-Z'en en terug te keren naar mijn vertrouwde ontwerp. Ik had graag meer states willen toevoegen maar ik ben niet verder gekomen dan de loading state.

De *loading state* heb ik middels Javascript en *onload* verbonden aan de *body*. Wanneer de pagina geladen wordt en 3000ms verstreken zijn roep ik in Javascript op dat de landingspagina getoond moet worden. Om de landingspagina te tonen wordt er door middel van het toevoegen van een *display: none* aan de preloader de loading state onzichtbaar gemaakt en de landingspagina zichtbaar.

Het laadcirkeltje heb ik ontworpen met een witte *border-radius* van 50% en een gele *border-top* en de *liniear infinite spin animation* van 0 tot 360 graden te draaien.
