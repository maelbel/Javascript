let array, cpt, somme;

// Exercice 1
console.info(">>>>> Exercice 1");

let monBouton = document.getElementById('monBouton');

monBouton.addEventListener('click', () => {
    alert("Bouton cliqué!");
});

// Exercice 2
console.info(">>>>> Exercice 2");

let monParagraphe = document.getElementById('monParagraphe');

monParagraphe.addEventListener('mouseover', () => {
    monParagraphe.textContent = "Survolé!";
});

// Exercice 3
console.info(">>>>> Exercice 3");

let monFormulaire = document.getElementById('monFormulaire');
let monChamp = document.getElementById('monChamp');

monFormulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(monChamp.value);
});

// Exercice 4
console.info(">>>>> Exercice 4");

let ajouterElement = document.getElementById('ajouterElement');

ajouterElement.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.textContent = "nouvel élément";
    document.body.appendChild(paragraph);
});

// Exercice 5
console.info(">>>>> Exercice 5");

let compteurBouton = document.getElementById('compteurBouton');
let compteur = document.getElementById('compteur');

compteurBouton.addEventListener('click', () => {
    compteur.textContent = (parseInt(compteur.textContent) || 0) + 1;
});

// Exercice 6
console.info(">>>>> Exercice 6");

let styleDiv = document.getElementById('styleDiv');

styleDiv.addEventListener('dblclick', (e) => {
    styleDiv.style.backgroundColor = 'blue';
    styleDiv.style.color = 'white';
});

// Exercice 7
console.info(">>>>> Exercice 7");

let champTexte = document.getElementById('champTexte');
let affichageTexte = document.getElementById('affichageTexte');

champTexte.addEventListener('input', () => {
    affichageTexte.textContent = champTexte.value;
});

// Exercice 8
console.info(">>>>> Exercice 8");

let formEmailCheck = document.getElementById('formEmailCheck');
let email = document.getElementById('email');
let soumettre = document.getElementById('soumettre');
let errorForm = document.getElementById('errorForm');

formEmailCheck.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!email.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        errorForm.textContent = "Erreur: email invalid!";
    }
});

// Exercice 9
console.info(">>>>> Exercice 9");

let afficherMasquer = document.getElementById('afficherMasquer');
let texteConditionnel = document.getElementById('texteConditionnel');
let isVisible = true; 

afficherMasquer.addEventListener('click', () => {
    if(isVisible){
        texteConditionnel.style.display = 'none';
        isVisible = false; 
    } else {
        texteConditionnel.style.display = 'block';
        isVisible = true; 
    }
});

afficherMasquer.click();

// Exercice 10
console.info(">>>>> Exercice 10");

let formNom = document.getElementById('formNom');
let nom = document.getElementById('nom');
let listeNoms = document.getElementById('listeNoms');

formNom.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    li.textContent = nom.value;
    listeNoms.appendChild(li);
});