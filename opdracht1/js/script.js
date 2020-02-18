// De querySelector selecteert elementen in de html
const listItems = document.querySelectorAll('.main li');
const allimages = document.querySelectorAll('.main .gallery .images');

// Voegt een 'active' class toe of haalt weg als deze al toegevoegd is
function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active');
}

/* Door een Eventlistener aan het element te koppelen wordt een mouse-event gedetecteerd. Wanneer de 'all'-button geclickt wordt, worden alle foto's 'block' = zichtbaar. Zo niet, dan loop-ed de functie door alle foto's tot de data-class overeenkomt met die van de actieve button. De foto's die niet voldoen aan de voorwaarde worden niet zichtbaar = 'none'. */
function toggleimages(dataClass) {
    if (dataClass === 'all') {
        for (let i = 0; i < allimages.length; i++) {
            allimages[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}
