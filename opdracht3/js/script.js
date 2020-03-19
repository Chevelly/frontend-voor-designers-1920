const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;
    showTitle(movies);
    console.log(movies);
}

function showTitle(jsonObj) {

    var i;
    for (i = 0; i < 20; i++) {
        const title = document.createElement('p');
        title.textContent = jsonObj[i]['title'];
        header.appendChild(title);
    }
}
