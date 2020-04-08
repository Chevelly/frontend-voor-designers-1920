## GitHub Pages
[Klik hier om de live site van Opdracht 3 te bekijken.] (https://chevelly.github.io/frontend-voor-designers-1920/opdracht3/)

# Opdracht 3: Een interactie uitwerken met externe data
## Verslaglegging door Chevelly Hiralall, 500700481

Dit verslag beschrijft en visualiseert de stappen van het schetsen tot het ontwerpen van een uitgewerkte interactie met externe data. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers mijn ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond. Het ontwerp is uitgewerkt in HTML, CSS en Javascript om te kunnen testen in een browser.


## Ontwerp
Voor de eindopdracht wil een 'Quaranthemed Movie Generator' ontwerpen die de gebruiker een willekeurige film als suggestie laat zien om te bekijken tijdens deze vreemde en vervelende situatie waar we ons in bevinden. Het is een tool om de verveling voor velen tegen te gaan.


## Werkwijze
Aan de hand van de beschikbare externe JSON data heb ik een functionaliteit bedacht die je op meerdere manieren kunt bedienen. Ik heb eerst geschetst hoe de functionaliteit er uit komt te zien. Daarna schets ik een breakdown van hoe de verschillende elementen technisch moeten gaan werken. Tot slot codeer ik de functionaliteit in HTML, CSS en Javascript en test ik verschillende versies van mijn ontwerp in een browser.


## Planning
Les 5: Briefing opdracht 3, API uitzoeken, tutorial doorlopen, schetsen en beginnen met coderen
Les 6: Eerste versie testen. Meenemen: breakdown-schets, JSON laden in de console, daarna in Javascript HTML elementen aanmaken, de data koppelen en toevoegen aan de DOM
Les 7: Demo presenteren
Les 8: Oplevering en beoordeling


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
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn1.jpg "Gordijnen")
In mijn eerste poging heb ik gebruik gemaakt van een plaatje van gordijnen. Al snel vond dat ik er op deze manier te gemakkelijk van afkwam dus besloot ik het effect van gordijnen na te maken met behulp van CSS.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn2.jpg "Gordijnen")
Met behulp van een [CSS tricks bron](https://css-tricks.com/stripes-css/) heb ik geprobeerd het effect van gordijnen te immiteren en diepte te creeëren door afwisselend lichte en donkere roodgekleurde banen naast elkaar te plaatsen.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn3.jpg "Gordijnen")
Om het ontwerp van de landingspagina één algehele sfeer te geven heb ik een [Google font](https://fonts.google.com/specimen/Ewert?query=ewer) voor de titel op het gordijn. Net als de gordijnstukken heb ik ook deze titel in tweeën gehakt waarbij het ene deel zich in de linker-*div* bevindt en het andere deel in rechter-*div*. Wanneer de gebruiker op de gordijnen klikt zullen de gordijnen en de titel vanuit het midden naar links of rechts en buiten het beeld schuiven. Dit heb ik gedaan met behulp van CSS waarbij ik met *transform: translateX(calc(+ / -))* voor een horizontale verplaatsing zorg.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht3/img/Proces/gordijn4.jpg "Gordijnen")
In het eindontwerp is de grootste verandering dat je naast klikken nu ook met stembediening de gordijnen kan openen en sluiten. Dit heb ik met behulp van [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) en Sanne voor elkaar gekregen. In Javascript heb ik een *luisterobject* aangemaakt en haar *commando's* aangeleerd zoals *openen* en *sluiten*. Daarnaast is de titel op de landingspagina aangepast zodat, met de [interface design principle 04](http://bokardo.com/principles-of-user-interface-design/) in gedachten, het de gebruiker begeleidt in het gebruiken van de website en vertelt wat hem of haar te verwachten staat.


### 03 Het ophalen van de film
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap02.png "Gallerij")
Voor de gallerij zet ik elke foto in een individuele *div*. Het totaal aantal foto's in de gallerij deel ik door de hoeveelheid kolommen die ik wil, namelijk 4. De foto's binnen een kolom zitten in een *div* genaamd *column*. In het CSS bestand stel ik vast dat de maximale breedte van een kolom 25% van de breedte van het scherm mag hebben waardoor er vier kolommen naast elkaar komen. Met de *padding property* creeër ik ruimte tussen de foto's.


### 04 Javascript
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap03.png "Versprongen")
De eerste poging tot het toevoegen van Javascript verliep niet heel soepeltjes. Het ontwerp was volledig versprongen en ook de opmaak was veranderd. Na lang zoeken naar waar de fout lag bleek de link naar het CSS bestand inactief te zijn. Door het bestand opnieuw te linken kreeg ik een werkend ontwerp te zien.


![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap04.png "Werkend01")
In de eerste uitgewerkte versie van het ontwerp kon je enkel kiezen uit de kleuren van de buttons maar was er geen mogelijkheid om na het kiezen van een kleur terug te gaan naar de volledige weergave van alle foto's. Hierom heb ik een regenboog kleurige button toegevoegd die alle foto's laat zien wanneer erop geklikt wordt.


![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap05.png "Werkend02")
Wanneer de 'all'-button geclickt wordt, worden alle foto's 'block' = zichtbaar. Zo niet, dan loop-ed de functie door alle foto's tot de data-class overeenkomt met die van de actieve button. De foto's die niet voldoen aan de voorwaarde worden niet zichtbaar = 'none'. Op bovenstaande foto is op de groene button geklikt waardoor de gallerij enkel de foto's laat zien die voldoen aan de voorwaarde dat zij een groene kleur hebben.


### 05 Final touch
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap06.png "Final touch")
Voor de eindoplevering van de eerste opdracht heb ik meer kleuren en foto's toegevoegd aan het ontwerp om te benadrukken dat de code op zo een manier geschreven is dat dit zonder enige moeite aangepast kan worden. Daarnaast heb ik de opmaak van het ontwerp een kleine touch-up gegeven zodat het een beter geheel is.


### 06 Eindresultaat
*Klik op de image om doorverwezen te worden naar de video.*
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/5ylRF9dOr1I/0.jpg)](http://www.youtube.com/watch?v=5ylRF9dOr1I&feature=youtu.be)
