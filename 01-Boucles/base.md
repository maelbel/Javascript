## Les boucles en JavaScript

Les boucles en JavaScript permettent d'exécuter un bloc de code plusieurs fois, pratique pour parcourir des tableaux ou répéter des instructions. Voici les boucles principales :

### 1. Boucle `for`
Utilisée pour répéter une action un nombre de fois défini.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // Affiche les nombres de 0 à 4
}
```

### 2. Boucle `while`
Exécute le bloc tant qu’une condition est vraie.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 3. Boucle `do...while`
S'exécute au moins une fois, puis continue tant que la condition est vraie.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4. Boucle `for...of`
Pour parcourir les éléments d’un tableau.

```javascript
let fruits = ['pomme', 'banane', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);  // Affiche chaque fruit
}
```

### 5. Boucle `for...in`
Pour parcourir les propriétés d’un objet.

```javascript
let personne = { nom: "Alice", age: 25 };
for (let prop in personne) {
  console.log(prop, personne[prop]);  // Affiche nom: Alice et age: 25
}
```

Ces boucles permettent d'itérer dans différents contextes, facilitant la gestion des données en JavaScript.