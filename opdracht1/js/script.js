// De querySelector selecteert elementen in de html
const listItems = document.querySelectorAll('.main li');
const allImages = document.querySelectorAll('.main .gallery .images');

// Voegt een 'active' class toe of haalt weg als deze al toegevoegd is
function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active');
}

/* Door een Eventlistener aan het element te koppelen wordt een mouse-event gedetecteerd. Wanneer de 'all'-button geclickt wordt, worden alle foto's 'block' = zichtbaar. Zo niet, dan loop-ed de functie door alle foto's tot de data-class overeenkomt met die van de actieve button. De foto's die niet voldoen aan de voorwaarde worden niet zichtbaar = 'none'. */
function toggleImages(dataClass) {
    if (dataClass === 'all') {
        for (let i = 0; i < allImages.length; i++) {
            allImages[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < allImages.length; i++)
            allImages[i].dataset.class === dataClass ? allImages[i].style.display = 'block' : allImages[i].style.display = 'none';
    }
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        toggleActiveClass(listItems[i]);
        toggleImages(listItems[i].dataset.class);
    });
}
