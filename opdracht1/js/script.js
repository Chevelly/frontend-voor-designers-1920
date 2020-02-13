/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

const listItems = document.querySelectorAll('.main li');
const allimages = document.querySelectorAll('.main .gallery .images');

function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active');
}

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
