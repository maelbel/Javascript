## Approfondissement des objets en JavaScript

Pour approfondir sur les objets en JavaScript, concentrons-nous sur les aspects fondamentaux et avancés des objets.

### 1. **Création d'Objets avec Littéraux**
Le littéral d'objet (`{}`) est la manière la plus courante de créer des objets en JavaScript. Un objet regroupe des données sous la forme de paires clé-valeur, où chaque valeur peut être de n'importe quel type (string, nombre, fonction, tableau, ou même un autre objet).

```javascript
let utilisateur = {
  nom: 'Alice',
  age: 30,
  adresse: {
    ville: 'Paris',
    pays: 'France'
  },
  saluer: function() {
    console.log(`Bonjour, je m'appelle ${this.nom}.`);
  }
};
```

Ici, l'objet `utilisateur` a des propriétés simples (`nom` et `age`), une propriété objet (`adresse`) et une méthode (`saluer`). La méthode `saluer` utilise `this` pour accéder aux autres propriétés de l'objet.

### 2. **Ajout et Suppression de Propriétés**
Les propriétés peuvent être ajoutées, modifiées, ou supprimées après la création d'un objet.

```javascript
utilisateur.email = "alice@example.com";   // Ajoute une nouvelle propriété
utilisateur.nom = "Alicia";                // Modifie une propriété existante
delete utilisateur.age;                    // Supprime une propriété
```

### 3. **Accéder aux Propriétés Dynamiquement**
Les crochets `[]` permettent d'accéder aux propriétés via des variables.

```javascript
let propriete = 'nom';
console.log(utilisateur[propriete]);  // Accède à la propriété 'nom'
```

### 4. **Méthodes de Manipulation d'Objet**

- **`Object.assign()`** : Permet de copier toutes les propriétés d'un objet vers un autre.

```javascript
let copieUtilisateur = Object.assign({}, utilisateur);
```

- **`Object.freeze()`** et **`Object.seal()`** : Gèrent les niveaux d’accès en empêchant les modifications (avec `freeze`) ou les ajouts et suppressions (avec `seal`).

```javascript
Object.freeze(utilisateur);
utilisateur.nom = "Bob";  // Ne changera pas le nom car l'objet est figé
```

### 5. **Utiliser `this` dans les Objets**
Le mot-clé `this` dans une méthode fait référence à l'objet lui-même, utile pour accéder aux autres propriétés ou méthodes.

```javascript
let voiture = {
  marque: 'Toyota',
  demarrer: function() {
    console.log(`La ${this.marque} démarre.`);
  }
};
```

### 6. **Méthodes d'Itération des Objets**

- **`Object.keys()`** et **`Object.values()`** : Retourne respectivement un tableau des clés et des valeurs.

```javascript
console.log(Object.keys(utilisateur));  // ['nom', 'adresse', 'email', 'saluer']
console.log(Object.values(utilisateur));  // ['Alicia', {...}, 'alice@example.com', f]
```

- **`Object.entries()`** : Renvoie les paires clé-valeur sous forme de tableau de sous-tableaux.

```javascript
Object.entries(utilisateur).forEach(([cle, valeur]) => {
  console.log(`${cle}: ${valeur}`);
});
```

### 7. **Fonctions Constructrices**
Avant l'introduction des classes, les fonctions constructrices étaient souvent utilisées pour créer des objets similaires :

```javascript
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
  this.saluer = function() {
    console.log(`Bonjour, je m'appelle ${this.nom}.`);
  };
}

let personne1 = new Personne('Alice', 30);
personne1.saluer();  // "Bonjour, je m'appelle Alice."
```

Cette approche reste valable et offre une alternative aux classes, permettant la création de plusieurs objets avec des propriétés et méthodes similaires.