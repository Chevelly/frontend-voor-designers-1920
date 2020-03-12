# Opdracht 2: Een interactie uitwerken voor verschillende gebruikers input
## Verslaglegging door Chevelly Hiralall, 500700481

Dit verslag beschrijft en visualiseert de stappen van het schetsen tot het ontwerpen van een user interface voor een gegeven use case. Het ontwerp is uitgewerkt in HTML, CSS en Javascript om te kunnen testen in een browser.


## Use case
Portfolio website met meerdere projecten en een biografie. Als ik naar 'beneden' scroll vult de betreffende section zich met informatie. Als ik op tab klik ga ik ook naar de volgende section. Of als ik 'volgende' roep.


## Werkwijze
Aan de hand van de use case heb ik een functionaliteit bedacht die je op meerdere manieren kunt bedienen. Ik heb eerst geschetst hoe de functionaliteit er uit komt te zien. Daarna schets ik een breakdown van hoe de verschillende elementen technisch moeten gaan werken. Tot slot codeer ik de functionaliteit in HTML, CSS en Javascript en test ik verschillende versies van mijn ontwerp in een browser.


## Planning
1. Les 3: Briefing opdracht 2 en beginnen met schetsen en coderen
2. Les 4: Eerste versie testen
3. Les 5: Oplevering en beoordeling


## Criteria
1. In de demo maak je gebruik van verschillende [User Interface events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent).
2. In de demo dien je rekening te houden met de interface design principles 04, 08 & 09 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github. <br>Voeg ook je breakdown-schets toe, en beschrijf je eerste idee en technische opzet en hoe het uiteindelijk is geworden.

## Proces

### 01 Schetsen
Om mijn ideeën te visualiseren ben ik begonnen met het maken van een schets. In de schets visualiseer ik de breakdown van de user interface en beschrijf ik de technische opzet die nodig is om dit te kunnen realiseren.
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/schets01.JPG "Schetsen")
Bij het lezen van de use cases voor deze opdracht had ik in eerste instantie gekozen voor de vakantiefoto caroussel. Mijn reden hiervoor was dat het goed aansloot op de trip naar Stuttgart en het een leuke manier was om kiekjes daarvan te delen. Tijdens het coderen van de schets merkte ik al snel dat ik weinig gemotiveerd was om verder te gaan omdat de opdracht mij onvoldoende uitdaagde. Ook heb ik al eens eerder een caroussel gecodeerd waardoor de kans om iets nieuws te leren ontbrak.

![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/schets02.JPG "Schetsen")
Ik heb uiteindelijk gekozen voor de use case waarvoor ik een portfolio website maak. Wanneer ik naar 'beneden' scroll vult de betreffende section zich met informatie. Als ik op tab klik ga ik ook naar de volgende section. Of als ik 'volgende' roep.

### 02 Viewports
#### Viewport 01
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/vp1.png "Schetsen")

#### Viewport 02
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/vp2.png "Schetsen")

#### Viewport 03
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/vp3.png "Schetsen")

#### Viewport 04
![alt text](https://github.com/Chevelly/frontend-voor-designers-1920/blob/master/opdracht2/img/Proces/vp4.png "Schetsen")


## Resources
- Bekijk hier de lijst [User Interface Events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) die je in javascript kunt gebruiken.
- Als je iets wil doen met scrollen, dan kun je het event 'scroll' gebruiken. Misschien kun je ook iets doen met de [Intersection observer](https://pawelgrzybek.com/the-intersection-observer-api-explained/)
- Als een onderdeel van je pagina in beeld moet verschijnen na een click, dan kun je iets doen met [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
