// Exercice 1
console.info(">>>>>>>>> EXERCICE 1");
class Person {

    #age;

    constructor(name, age, address) {
        this.name = name;
        this.#age = age;
        this.address = address;
    }

    afficherInfos() {
        console.log(`Name: ${this.name} \nAge: ${this.#age}\nAddress: ${this.address}`);
    }

    get age() {
        return this.#age;
    }

    set age(nouvelAge) {
        this.#age = nouvelAge;
    }

}

const person = new Person("Mael", 23, "4 Boulevard Eugène Réguillon, 69100 Villeurbanne");
person.afficherInfos();
console.log(person.age);
person.age = 25;
person.afficherInfos();

// Exercice 2
console.info(">>>>>>>>> EXERCICE 2");
class CompteBancaire {

    #solde = 0;

    constructor(titulaire) {
        this.titulaire = titulaire;
    }

    get solde() {
        return this.#solde;
    }

    set solde(solde) {
        this.#solde = solde; 
    }

    afficherSolde() {
        console.log(`Solde: ${this.#solde}`);
    }

    deposer(montant) {
        this.#solde += montant;
    }

    retirer(montant) {
        if(this.solde - montant < 0){
            console.error("Error: Solde insuffisant");
        } else {
            this.#solde -= montant;
        }
    }
}

const compte = new CompteBancaire("Mael");
compte.afficherSolde();
compte.deposer(100);
compte.afficherSolde();
console.log(compte.solde);
compte.retirer(110);
compte.retirer(50);
compte.afficherSolde();

// Exercice 3
console.info(">>>>>>>>> EXERCICE 3");
class Product {

    #prixHT;

    constructor(nom, prixHT, quantite) {
        this.nom = nom;
        this.#prixHT = prixHT;
        this.quantite = quantite;
    }

    get prixHT() {
        return this.#prixHT;
    }

    set prixHT(prixHT) {
        this.#prixHT = prixHT; 
    }

    afficherInfos() {
        console.log(`Nom: ${this.nom}\nPrix HT: ${this.prixHT}\nQuantité: ${this.quantite}`);
    }

    calculerPrixTTC() {
        return this.prixHT * (1 + 0.2);
    }

    static calculerTVA(prixHT){
        return prixHT * (1 + 0.2);
    }
}

const product = new Product("Stylo", 4, 10);
product.afficherInfos();
console.log(product.calculerPrixTTC());
console.log(Product.calculerTVA(1));
console.log(product.prixHT);
product.prixHT = 50;
product.afficherInfos();

// Exercice 4
console.info(">>>>>>>>> EXERCICE 4");
class Voiture {

    #kilometrage;

    constructor(marque, kilometrage, annee) {
        this.marque = marque;
        this.#kilometrage = kilometrage;
        this.annee = annee;
    }

    get kilometrage() {
        return this.#kilometrage;
    }

    set kilometrage(nouveauKilometrage) {
        this.#kilometrage = nouveauKilometrage;
    }

    ajouterKilometres(km) {
        this.#kilometrage += km;
    }

    afficherInfos() {
        console.log(`Marque: ${this.marque}\nKilométrage: ${this.kilometrage}\nAnnée: ${this.annee}`)
    }

    static creerVoitureDeBase() {
        return new Voiture("Renault", 0, 2022);
    }
}

const voiture = new Voiture("Toyota Supra Mk4", 10000, 2000);
const renault = Voiture.creerVoitureDeBase();
voiture.afficherInfos();
renault.afficherInfos();
console.log(voiture.kilometrage);
voiture.kilometrage = 20000;
voiture.ajouterKilometres(1000);
voiture.afficherInfos();