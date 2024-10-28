## Initiation à JavaScript

### 1. **Variables**

En JavaScript, il existe trois manières principales de déclarer des variables :

- **`let`** : Permet de déclarer des variables dont la valeur peut changer au cours de l'exécution du programme.
- **`const`** : Permet de déclarer des variables qui ne peuvent pas être modifiées après leur initialisation.
- **`var`** : Ancienne manière de déclarer des variables. `let` et `const` sont désormais préférés pour éviter certains problèmes de portée.

**Exemple :**

```javascript
let age = 30;        // Variable modifiable
const nom = "Alice"; // Variable non modifiable
var ville = "Paris"; // Ancienne manière, pas recommandée
```

#### Portée des variables :
- **`let` et `const`** ont une portée de bloc (existe seulement à l’intérieur du bloc où elles sont définies, comme une boucle ou une condition).
- **`var`** a une portée de fonction (sa portée est la fonction dans laquelle elle est définie).

---

### 2. **Types de Données**

Les principaux types de données en JavaScript sont :

- **String** : Chaîne de caractères, entourée de guillemets simples ou doubles.
  
```javascript
let texte = "Bonjour";
```

- **Number** : Nombres, qu’ils soient entiers ou flottants.

```javascript
let prix = 42;
let pi = 3.14;
```

- **Boolean** : Valeur binaire (vrai ou faux).

```javascript
let estAdulte = true;
```

- **Array (Tableau)** : Une liste d’éléments.

```javascript
let fruits = ["Pomme", "Banane", "Cerise"];
```

- **Object** : Une collection de propriétés, définie avec des paires clé-valeur.

```javascript
let personne = { nom: "Alice", age: 25 };
```

---

### 3. **Conditions**

Les conditions permettent d'exécuter du code en fonction de certaines situations. Les principaux mots-clés sont `if`, `else if`, et `else`.

**Syntaxe :**

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adulte");
} else {
  console.log("Mineur");
}
```

#### Opérateurs de comparaison :
- `==` : Compare les valeurs sans tenir compte du type.
- `===` : Compare à la fois la valeur et le type.
- `!=` et `!==` : Non égalité (avec ou sans vérification du type).

#### Opérateurs logiques :
- `&&` : ET logique (toutes les conditions doivent être vraies).
- `||` : OU logique (au moins une condition doit être vraie).
- `!` : NON logique (inverse une valeur booléenne).

---

### 4. **Boucles**

Les boucles permettent de répéter un bloc de code un certain nombre de fois ou jusqu'à ce qu'une condition soit remplie.

- **Boucle `for`** : Pour exécuter un nombre spécifique de répétitions.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- **Boucle `while`** : Pour exécuter un bloc de code tant qu'une condition est vraie.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- **Boucle `do...while`** : Exécute le bloc de code au moins une fois, puis continue tant que la condition est vraie.

```javascript
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

---

### 5. **Fonctions**

Une fonction est un bloc de code réutilisable. On peut la définir avec le mot-clé `function`.

**Fonction classique :**

```javascript
function addition(a, b) {
  return a + b;
}

console.log(addition(3, 4));  // 7
```

**Fonctions fléchées (ES6)** : Syntaxe plus concise.

```javascript
const addition = (a, b) => a + b;

console.log(addition(3, 4));  // 7
```

- Une fonction peut également avoir des paramètres par défaut, si aucune valeur n'est fournie lors de l'appel.

```javascript
function salut(nom = "visiteur") {
  return `Salut, ${nom}`;
}
```

---

### 6. **Manipulation du DOM**

Le **DOM** (Document Object Model) représente la structure HTML de la page web. JavaScript permet de manipuler ces éléments pour modifier leur contenu ou leur style.

- **Sélection d'un élément HTML** avec `getElementById` :

```javascript
let titre = document.getElementById("titre");
titre.innerHTML = "Nouveau texte";
```

- **Modification d’un style** :

```javascript
document.getElementById("titre").style.color = "red";
```

- **Ajout de contenu** :

```javascript
document.getElementById("contenu").innerHTML = "<p>Texte ajouté via JS</p>";
```

---

### 7. **Événements**

Les événements sont des actions déclenchées par l'utilisateur (clic, saisie, survol) ou le navigateur.

- **Ajouter un écouteur d'événement** : Utilisation de `addEventListener`.

```javascript
document.getElementById("monBouton").addEventListener("click", function() {
  alert("Bouton cliqué !");
});
```

- **Événements courants** :
  - `click` : Quand l'utilisateur clique sur un élément.
  - `mouseover` : Quand l'utilisateur survole un élément.
  - `keydown` : Quand une touche du clavier est pressée.

**Exemple :** Faire changer la couleur d’un texte lorsque l’utilisateur clique sur un bouton.

```javascript
document.getElementById("changerCouleur").addEventListener("click", function() {
  document.getElementById("texte").style.color = "blue";
});
```

---

### 8. **Objets**

En JavaScript, un **objet** est une collection de paires clé-valeur, ce qui permet de modéliser des entités plus complexes.

**Création d'un objet** :

```javascript
let personne = {
  nom: "John",
  age: 30,
  direBonjour: function() {
    console.log("Bonjour, je m'appelle " + this.nom);
  }
};

personne.direBonjour();  // "Bonjour, je m'appelle John"
```

- Les objets peuvent contenir des **propriétés** (valeurs associées à des clés) et des **méthodes** (fonctions associées à un objet).

---

### 9. **Promesses et Asynchronisme**

Les **promesses** sont utilisées pour gérer des opérations asynchrones, comme les appels à un serveur ou la lecture de fichiers, sans bloquer le flux principal.

**Création d'une promesse :**

```javascript
let promesse = new Promise((resolve, reject) => {
  let succes = true;
  
  if (succes) {
    resolve("Opération réussie !");
  } else {
    reject("Opération échouée !");
  }
});

promesse.then(result => {
  console.log(result);  // Affiche "Opération réussie !"
}).catch(error => {
  console.log(error);
});
```