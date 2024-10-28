// Exercice 1
console.info(">>>>> Exercice 1");

const personne = {
    nom: '',
    age:''
};
personne.nom = "Alice";
personne.age = 25;
console.log(personne);

// Exercice 2
console.info(">>>>> Exercice 2");

console.log(personne.nom);
console.log(personne.age);

// Exercice 3
console.info(">>>>> Exercice 3");

personne.saluer = function() {
    console.log(`Bonjour, je m'appelle ${this.nom}`)
}

personne.saluer();

// Exercice 4
console.info(">>>>> Exercice 4");

const voiture = {
    marque: 'Toyota',
    modele: 'Supra MK4',
    annee: '2000'
}

Object.entries(voiture).forEach(([key, value], index) => {
    console.log(`[${index}] ${key} : ${value}`);
});

// Exercice 5
console.info(">>>>> Exercice 5");

const livre = {
    titre: 'Les mésirables',
    auteur: 'Victor Hugo',
    pages: '189'
}

Object.keys(livre).forEach((index) => {
    console.log(index);
});

// Exercice 6
console.info(">>>>> Exercice 6");

Object.values(livre).forEach((value) => {
    console.log(value);
});

// Exercice 7
console.info(">>>>> Exercice 7");

Object.entries(livre).forEach(([key, value], index) => {
    console.log(`[${index}] ${key} : ${value}`);
});

// Exercice 8
console.info(">>>>> Exercice 8");

delete personne.age;

console.log(personne);

// Exercice 9
console.info(">>>>> Exercice 9");

const personnes = [
    {
        nom: "Michel",
        age: 58
    },
    {
        nom: "Paul",
        age: 32
    },
    {
        nom: "Jack",
        age: 67
    }
]

const personnesNames = personnes.map((personne) => {
    return personne.nom;
});

console.log(personnesNames);

// Exercice 10
console.info(">>>>> Exercice 10");

const arrayNb = [1, 2, 3, 4, 5];

const sum = arrayNb.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const moyenne = sum/arrayNb.length;

console.log(moyenne);

// Exercice 11
console.info(">>>>> Exercice 11");

const arrayWord = ['apple', 'banana', 'apple', 'orange', 'banana','apple']

const arrayWordOccurence = arrayWord.reduce((compteur, mot) => {
    compteur[mot] = (compteur[mot] || 0) + 1;
    return compteur;
}, {});

console.log(arrayWordOccurence);

// Exercice 12
console.info(">>>>> Exercice 12");

const produits = [
    {
        nom: "Pomme",
        prix: 58
    },
    {
        nom: "Pêche",
        prix: 32
    },
    {
        nom: "Poire",
        prix: 67
    }
]

const prixTotal = produits.reduce((sommePrix, produit) => {
    return sommePrix + produit.prix;
}, 0);

console.log(prixTotal);