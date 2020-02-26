# Opdracht 1: Een Micro-interactie uitwerken en testen
## Verslaglegging door Chevelly Hiralall, 500700481

Dit verslag beschrijft en visualiseert de stappen van het schetsen tot het ontwerpen van een user interface voor een gegeven use case. Het ontwerp is uitgewerkt in HTML, CSS en Javascript om te kunnen testen in een browser.


## Use case
Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.


## Werkwijze
Ik heb bewust gekozen voor de use case waarbij ik moet filteren omdat ik dit tijdens mijn eindopdracht voor Frontend Development als een obstakel ervaren heb. Door deze opdracht te voldoen hoop ik de kunst van het filteren in Javascript te kunnen masteren. Ik begin met het maken van een schets waarna ik codeer in HTML, CSS en Javascript en verschillende versies van mijn ontwerp test in een browser.


## Planning
1. Les 1: Briefing opdracht 1 en beginnen met schetsen en coderen
2. Les 2: Eerste versie testen
2. Les 3: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [Github](https://github.com).

## Proces

### 01 Schetsen
Om mijn ideeën te visualiseren ben ik begonnen met het maken van een schets. In de schets visualiseer ik de lay-out van de user interface en beschrijf ik de elementen die ik nodig heb om dit te kunnen realiseren.
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/schets01.JPG "Schetsen")
In mijn eerste idee wilde ik een color wheel verwerken waarbij de gebruiker met een color picker een kleur kon kiezen. Hieropvolgend zouden alleen foto's getoond worden in de desbetreffende kleur. Na overleg met de docent bleek dit idee iets té enthousiast. Het werd mij aangeraden bij de basis te beginnen en hier steeds meer aan toe te voegen.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/schets02.JPG "Schetsen")
Mijn tweede idee is een stuk simpeler. Ik maak het filteren op kleur voor de gebruiker gemakkelijk door buttons in mijn ontwerp te verwerken die ik door middel van CSS een corresponderende kleur geef. Daarnaast zijn alle foto's in een galerij zichtbaar zodat de gebruiker in een oogopslag en met weinig clicks ziet welke foto's hij of zij kan gebruiken voor de Visual Research. Om de uitwerking hiervan nog uitdagender te maken wil ik het ontwerp op zo een manier coderen dat het toevoegen van foto's en/of een kleur laagdrempelig is.

### 02 Buttons
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht1/img/Proces/stap01.png "Buttons")
Met het HTML-element *ul* maak ik list items aan die fungeren als buttons waarmee de gebruiker met één druk op de knop foto's te zien krijgt die corresponderen met de kleur van de button waarop geklikt is. De buttons krijgen hun kleur en grootte door een *class* aan de list items toe te voegen en deze in het CSS bestand aan te roepen.

### 03 Gallerij
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
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/5ylRF9dOr1I/0.jpg)](http://www.youtube.com/watch?v=5ylRF9dOr1I&feature=youtu.be)

