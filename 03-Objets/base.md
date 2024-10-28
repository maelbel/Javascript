## Les objets en JavaScript

Les objets en JavaScript sont des structures de données permettant de regrouper des informations et des comportements sous une seule entité. Un objet est une collection de propriétés, et chaque propriété est définie sous la forme de **paires clé-valeur**.

### 1. **Création d'un Objet**
On peut créer un objet de deux façons principales :

#### Littéral d'objet
```javascript
let voiture = {
  marque: 'Toyota',
  modele: 'Corolla',
  annee: 2021,
  demarrer: function() {
    console.log("La voiture démarre.");
  }
};
```

#### Avec le constructeur `Object`
```javascript
let voiture = new Object();
voiture.marque = 'Toyota';
voiture.modele = 'Corolla';
voiture.annee = 2021;
voiture.demarrer = function() {
  console.log("La voiture démarre.");
};
```

### 2. **Accéder et Modifier les Propriétés**
Les propriétés d’un objet peuvent être accédées ou modifiées de deux façons :
```javascript
console.log(voiture.marque);       // Accès avec un point
console.log(voiture['modele']);    // Accès avec des crochets
voiture.annee = 2022;              // Modification de la valeur
```

### 3. **Méthodes d'un Objet**
Une méthode est une fonction définie à l'intérieur d'un objet et associée à une propriété.

```javascript
voiture.demarrer();  // Affiche "La voiture démarre."
```

### 4. **Boucler sur les Propriétés d'un Objet**
On peut parcourir les propriétés d’un objet avec `for...in` :

```javascript
for (let prop in voiture) {
  console.log(prop + ": " + voiture[prop]);
}
```

### 5. **Manipuler les Objets**
JavaScript offre des méthodes pour travailler avec les objets :

- **`Object.keys()`** : Retourne les clés d'un objet sous forme de tableau.
- **`Object.values()`** : Retourne les valeurs.
- **`Object.entries()`** : Retourne les paires clé-valeur sous forme de tableau.

```javascript
console.log(Object.keys(voiture));    // ['marque', 'modele', 'annee', 'demarrer']
console.log(Object.values(voiture));  // ['Toyota', 'Corolla', 2022, f]
```

Les objets en JavaScript permettent de structurer et de gérer les données plus facilement, en organisant les informations sous forme de propriétés et de méthodes.