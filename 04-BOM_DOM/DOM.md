## DOM

Le DOM (Document Object Model) est une représentation de la structure HTML d'une page web sous forme d'un arbre d'objets que JavaScript peut manipuler pour modifier le contenu, la structure, ou le style d'une page de façon dynamique.

### 1. **Structure du DOM**
Chaque élément HTML est un **nœud** dans cet arbre. Par exemple, un document avec `<body><h1>Titre</h1></body>` aura un nœud parent `<body>` et un enfant `<h1>`.

### 2. **Accéder aux Éléments du DOM**
Pour sélectionner et manipuler des éléments :
   - **`document.getElementById()`** : Sélectionne un élément par son ID.
   - **`document.getElementsByClassName()`** : Sélectionne des éléments par leur classe.
   - **`document.querySelector()`** : Sélectionne le premier élément correspondant au sélecteur CSS spécifié.
   - **`document.querySelectorAll()`** : Sélectionne tous les éléments correspondant au sélecteur.

Exemple :
```javascript
let titre = document.getElementById('titre');
let paragraphes = document.getElementsByClassName('paragraphe');
```

### 3. **Manipuler le Contenu**
On peut modifier le contenu d'un élément en utilisant des propriétés comme `textContent` ou `innerHTML` :

```javascript
titre.textContent = "Nouveau Titre";
```

### 4. **Modifier les Styles**
Les styles d’un élément peuvent être modifiés via la propriété `style` :

```javascript
titre.style.color = "blue";
```

### 5. **Ajouter et Supprimer des Éléments**
Pour ajouter un nouvel élément :
- **`document.createElement()`** : Crée un nouvel élément HTML.
- **`appendChild()`** : Ajoute cet élément comme enfant d'un autre.

Pour supprimer un élément :
- **`removeChild()`** : Retire un élément enfant d'un parent.

Exemple :
```javascript
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Texte ajouté";
document.body.appendChild(nouveauParagraphe);
```

### 6. **Écouteurs d'Événements**
Les **écouteurs d’événements** permettent d’exécuter du code lorsqu’un utilisateur interagit avec la page (clic, survol, etc.).

```javascript
titre.addEventListener("click", function() {
  alert("Titre cliqué !");
});
```

### 7. **Navigation dans le DOM**
On peut naviguer dans les éléments voisins, parents ou enfants d'un élément avec des propriétés comme :
- **`parentNode`** : Accède au parent d'un élément.
- **`childNodes`** : Liste les enfants.
- **`nextSibling`** et **`previousSibling`** : Accèdent aux éléments voisins.

Manipuler le DOM en JavaScript permet de créer des pages web interactives et dynamiques en réagissant aux actions des utilisateurs.