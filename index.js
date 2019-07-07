var api = "https://api.apixu.com/v1/current.json?key=b589a11f299541e28b385534192706&q=Paris"

var ville = document.querySelector("#location");
var temperature = document.querySelector("#temperature");
var newDate = document.querySelector("#newdate");

function callApi() {
    fetch(api, {
        method: "get"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            ville.innerHTML = "location: " + data.location.name;
            temperature.innerHTML = "température: " + data.current.temp_c + "°";
            image.setAttribute("src", data.current.condition.icon)
        });
    }
    callApi();



function Horloge() {
    var dt=new Date();
    document.getElementById("newdate").innerHTML=dt.getHours()+":"+dt.getMinutes();
}
var timer=setInterval("Horloge()", 250);


window.onload = () => {
    let dt=new Date();
    document.body.style.backgroundImage = `url(./media/${dt.getHours()}.jpg)`;
    console.log(dt.getHours())
}



const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('todolist')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [] //scréation d'un tableau et renvoie des valeurs sous forme de string

localStorage.setItem('items', JSON.stringify(itemsArray)) //stockage des données dans le tableau / premier argument c'est notre clé item stocké sous le format json et les données sont stockées sous le format tableau
const data = JSON.parse(localStorage.getItem('items')) //création d'une fonction data sous forme de string et récupération de la cle

const liMaker = text => { // variable qui contient une fonction expression
const li = document.createElement('li') // créer via le dom un élément html qui sera une liste
li.textContent = text // on va ajouter du texte
ul.appendChild(li) // dom appenchil sur le parent ul
}

form.addEventListener('submit', function(e) { //on va dire à notre formulaire 
    e.preventDefault() // La fonction e.preventDefault() empêchera le formulaire d'être soumis par défaut, ce que nous ne voulons pas, puisque nous n'envoyons aucune donnée à un serveur.

itemsArray.push(input.value) //ajout de la nouvelle valeur
localStorage.setItem('items', JSON.stringify(itemsArray)) // stockage et avec le json
liMaker(input.value) // on reprends la liste avec input value
input.value = '' // on lui applique le champ vide
})

data.forEach(item => { // les données récupérées sous forme de string via le jsonparse
liMaker(item) //Ceci affichera toutes les informations stockées sur le front-end à chaque fois que nous ouvrirons l'application.
})

button.addEventListener('click', function() { //créer un événement sur le bouton
localStorage.clear() // netoyage de la base de données
while (ul.firstChild) {
    ul.removeChild(ul.firstChild) // netoyage des enfants
}
})


