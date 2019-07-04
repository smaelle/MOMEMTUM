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

/*function heure()
{
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    
    if(minute < 59)
        minute = "0" + minute;
    return heure + "h" + minute;
}
console.log(heure);

heure();

/*var date = new Date();
var heure =date.getHours();
var minute=date.getMinutes();
var f = function() {
if(minute<59)
minute++;
else
{heure++;minute=00;}
console.log(minute);
document.getElementById("newdate").textContent=heure+":"+minute;
setTimeout(f, 1000);
}
setTimeout(f, 1000);*/

function Horloge() {
    var dt=new Date();
    document.getElementById("newdate").innerHTML=dt.getHours()+":"+dt.getMinutes();
}
var timer=setInterval("Horloge()", 250);


/*
function toDoListEnter(){

    const done = document.querySelector("#todolist").value;
    const message = document.createElement("li")
    message.innerHTML = done;

    const list = document.querySelector('#ul')
    list.appendChild(message);

}


// Méthode de stockage
document.getElementById('todolist').onKeyPress = fonction(){
	if(typeof localStorage!='undefined' && JSON) {
		var todolistend = {
			input:document.getElementById('todolist').value,
		};
		localStorage.setItem('objectend',JSON.stringify(todolistend));
		alert("Mémorisation effectuée");
	} else alert("localStorage n'est pas supporté");
};


    /*
    if(key ==="entrer"){Web Storage
Démonstration 3
Cette page utilise JSON en complément de Web Storage.

Nom

Prénom

Ville

        let newlist = document.createElement("li");
        let text = document.createTextNode(input.value);
        newlist.appendChild(text);
        ul.appendChild(newlist);
    //   Permet de supprimer le champ après avoir cliquer
        input.value = " ";
        message.innerHTML = " ";
        }
}

input.addEventListener("onKeypress", toDoListEnter);
    
/*function toDoListEnter (){
    if (input.value === " ") {
        alert("erreur");
        message.innerHTML = "Entrez du texte";
    } else {
        let newlist = document.createElement("li");
        let text = document.createTextNode(input.value);
    newlist.appendChild(text);
    ul.appendChild(newlist);
    //   Permet de supprimer le champ après avoir cliquer
    input.value = " ";
    message.innerHTML = " ";
  }
};

toDoListEnter();*/

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


