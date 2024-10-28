## Les tableaux en JavaScript

Les tableaux en JavaScript sont des structures de données permettant de stocker une collection d'éléments. Voici les concepts essentiels et des exemples pratiques.

### 1. **Déclaration d'un Tableau**
On déclare un tableau avec des crochets `[]` :

```javascript
let fruits = ['pomme', 'banane', 'orange'];
```

### 2. **Accéder aux Éléments**
On accède aux éléments avec leur index, commençant à 0.

```javascript
console.log(fruits[0]);  // Affiche "pomme"
```

### 3. **Méthodes de Manipulation**

#### Ajouter et Supprimer des Éléments
- **`push()`** : Ajoute à la fin.
- **`pop()`** : Supprime le dernier élément.
- **`unshift()`** : Ajoute au début.
- **`shift()`** : Supprime le premier élément.

Exemple :

```javascript
fruits.push('mangue');    // ['pomme', 'banane', 'orange', 'mangue']
fruits.pop();             // ['pomme', 'banane', 'orange']
```

#### **Concaténation**
- **`concat()`** : Combine deux tableaux.

```javascript
let legumes = ['carotte', 'poivron'];
let aliments = fruits.concat(legumes); // ['pomme', 'banane', 'orange', 'carotte', 'poivron']
```

### 4. **Boucles et Tableaux**
- **`forEach()`** : Parcourt chaque élément.

```javascript
fruits.forEach(fruit => console.log(fruit));
```

- **`map()`** : Transforme chaque élément.

```javascript
let fruitsMajuscules = fruits.map(fruit => fruit.toUpperCase());  // ['POMME', 'BANANE', 'ORANGE']
```

### 5. **Autres Méthodes Utiles**
- **`filter()`** : Retourne les éléments correspondant à un critère.
- **`find()`** : Trouve le premier élément correspondant à un critère.
- **`sort()`** : Trie les éléments.

Exemple de filtre :

```javascript
let fruitsCourt = fruits.filter(fruit => fruit.length <= 5);  // ['pomme', 'banane']
```

### 6. **Vérifications et Longueur**
- **`includes()`** : Vérifie si un élément existe dans le tableau.
- **`length`** : Donne la taille du tableau.

```javascript
console.log(fruits.includes('pomme')); // true
console.log(fruits.length);            // Nombre d'éléments
```

Les tableaux en JavaScript offrent ainsi une grande flexibilité pour stocker et manipuler des données.