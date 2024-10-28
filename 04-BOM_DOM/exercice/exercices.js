// Exercice 1
console.info(">>>>> Exercice 1");

let monElement = document.getElementById("monElement");

console.log(monElement);

// Exercice 2
console.info(">>>>> Exercice 2");

let mesElements = document.getElementsByClassName("link");

console.log(mesElements);

// Exercice 3
console.info(">>>>> Exercice 3");

let newDiv = document.createElement("div");
newDiv.textContent = "Nouvelle div";
document.body.appendChild(newDiv);


// Exercice 4
console.info(">>>>> Exercice 4");

let elementASupprimer = document.getElementById("elementASupprimer");
document.body.removeChild(elementASupprimer);

// Exercice 5
console.info(">>>>> Exercice 5");

monElement.style.color = "red";
monElement.style.backgroundColor = "yellow";

// Exercice 6
console.info(">>>>> Exercice 6");

monElement.classList.add('nouvelleClasse');

setTimeout(()=>{
    monElement.classList.remove('nouvelleClasse');
}, 3000);

// Exercice 7
console.info(">>>>> Exercice 7");

setTimeout(()=>{
    monElement.textContent = "Le texte vient d'être modifié!";
}, 2000);

// Exercice 8
console.info(">>>>> Exercice 8");

function createParagraphEachSecond(){
    let index = 0;
    let interval = setInterval(() => {
        if(index == 9) clearInterval(interval);
        let newParagraph = document.createElement("p");
        newParagraph.textContent = `Paragraphe n°${index + 1}`;
        document.body.appendChild(newParagraph);
        index++;
    }, 1000);
}

createParagraphEachSecond();

// Exercice 9
console.info(">>>>> Exercice 9");

let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
li1.innerHTML = "li1";
li2.innerHTML = "li2";
li3.innerHTML = "li3";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);

let index = 4;
let interval = setInterval(() => {
    if(index == 8) clearInterval(interval);
    let newLi = document.createElement("li");
    newLi.textContent = `li${index}`;
    ul.appendChild(newLi);
    index++;
}, 2000);

// Exercice 10
console.info(">>>>> Exercice 10");

function addPersonCard(nom, age, profession) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${nom}</h5>
    <p class="card-text">${nom} est ${profession} et à ${age}ans</p>
    <a href="#" class="btn btn-primary">En savoir plus -></a>
  </div>
</div>`;
    document.body.appendChild(newDiv);
}

addPersonCard("Mael", "23", "Étudiant")
