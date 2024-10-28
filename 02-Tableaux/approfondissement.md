## Approfondissement des tableaux en JavaScript

### 1. **Déclaration et Initialisation**
Les tableaux peuvent contenir différents types de données, même mélangés :

```javascript
let mixte = ['texte', 42, { nom: 'objet' }, [1, 2, 3]];
```

Vous pouvez créer un tableau vide et y ajouter des éléments plus tard :

```javascript
let nombres = [];
nombres.push(5);  // [5]
```

### 2. **Modifier un Tableau**

#### **Ajout et Suppression aux Index Spécifiques**
- **`splice()`** : Peut insérer, supprimer ou remplacer des éléments dans le tableau.

```javascript
let fruits = ['pomme', 'banane', 'orange'];
fruits.splice(1, 0, 'mangue');  // Insère 'mangue' à l'index 1 : ['pomme', 'mangue', 'banane', 'orange']
fruits.splice(2, 1);            // Supprime 1 élément à partir de l'index 2 : ['pomme', 'mangue', 'orange']
```

#### **Extraction d’une Partie de Tableau**
- **`slice()`** : Crée une copie partielle d'un tableau entre deux index.

```javascript
let fruitsPartiels = fruits.slice(1, 3);  // ['mangue', 'orange']
```

### 3. **Itération Avancée**
La méthode `forEach()` est idéale pour appliquer une fonction à chaque élément sans créer de nouveau tableau :

```javascript
fruits.forEach((fruit, index) => console.log(`Fruit ${index + 1}: ${fruit}`));
```

#### **Transformation et Création de Nouveaux Tableaux**
- **`map()`** et **`filter()`** créent des tableaux transformés :

```javascript
let fruitsEnMajuscules = fruits.map(fruit => fruit.toUpperCase());
let fruitsCourts = fruits.filter(fruit => fruit.length < 6);
```

#### **Trouver et Vérifier les Éléments**
- **`find()`** : Retourne le premier élément satisfaisant une condition.
- **`some()`** : Vérifie si au moins un élément satisfait la condition.
- **`every()`** : Vérifie si tous les éléments satisfont la condition.

```javascript
let fruitCherche = fruits.find(fruit => fruit === 'pomme');
let tousCourts = fruits.every(fruit => fruit.length < 10);
```

### 4. **Méthodes de Tri et de Réduction**

- **`sort()`** : Trie les éléments par ordre alphabétique par défaut, mais peut être modifié.

```javascript
let nombres = [30, 4, 20];
nombres.sort((a, b) => a - b); // Tri en ordre croissant : [4, 20, 30]
```

- **`reduce()`** : Permet de calculer une valeur unique, souvent une somme ou un produit.

```javascript
let somme = nombres.reduce((total, nombre) => total + nombre, 0);  // 54
```

### 5. **Détection de Contenu et Taille du Tableau**
La propriété **`length`** permet de vérifier le nombre d'éléments :

```javascript
console.log(fruits.length);  // Affiche 3
```

La méthode **`includes()`** est pratique pour vérifier la présence d'un élément :

```javascript
let aPomme = fruits.includes('pomme');  // true
```

Ces méthodes permettent de manipuler les tableaux de façon flexible et puissante en JavaScript, pour des tâches allant de l’itération à la transformation complexe.