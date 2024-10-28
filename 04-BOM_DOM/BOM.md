## BOM

Le BOM (Browser Object Model) en JavaScript est l'ensemble des objets que le navigateur met à disposition pour interagir avec la fenêtre du navigateur et l'environnement global. Le BOM permet de manipuler des éléments comme la fenêtre elle-même, l'historique de navigation, les URL, et plus encore.

### 1. **L'Objet `window`**
L'objet `window` représente la fenêtre du navigateur. Toutes les variables globales, fonctions et objets sont des propriétés de `window`. Par exemple :

```javascript
console.log(window.innerWidth);  // Largeur de la fenêtre
alert("Salut !");  // alert() est en fait window.alert()
```

### 2. **Manipuler la Fenêtre du Navigateur**

- **`window.open()`** : Ouvre une nouvelle fenêtre ou un nouvel onglet.
- **`window.close()`** : Ferme la fenêtre courante (si elle a été ouverte avec JavaScript).
- **`window.moveTo()` et `window.resizeTo()`** : Déplacent et redimensionnent la fenêtre.

### 3. **Objet `location`**
L'objet `location` contient des informations sur l'URL courante et permet de la manipuler.

- **`location.href`** : Affiche ou modifie l'URL complète.
- **`location.reload()`** : Recharge la page.
- **`location.assign("nouvelle_url")`** : Redirige vers une nouvelle URL.

Exemple :
```javascript
console.log(location.href);  // Affiche l'URL courante
location.reload();  // Recharge la page
```

### 4. **Objet `history`**
L'objet `history` permet de naviguer dans l'historique de navigation.

- **`history.back()`** et **`history.forward()`** : Reculer et avancer dans l'historique.
- **`history.go(n)`** : Aller à une position dans l'historique (ex. `history.go(-1)` pour revenir d'une page).

### 5. **Objet `navigator`**
L'objet `navigator` donne des informations sur le navigateur lui-même (nom, version, si le navigateur est en ligne, etc.).

- **`navigator.userAgent`** : Donne des informations sur le navigateur et l’OS.
- **`navigator.language`** : Affiche la langue du navigateur.
- **`navigator.onLine`** : Indique si le navigateur est connecté.

Exemple :
```javascript
if (navigator.onLine) {
  console.log("Vous êtes en ligne !");
}
```

### 6. **Objet `screen`**
L'objet `screen` contient des informations sur l'écran de l'utilisateur.

- **`screen.width` et `screen.height`** : Largeur et hauteur de l'écran.
- **`screen.availWidth` et `screen.availHeight`** : Taille de l'écran sans la barre des tâches.

Le BOM est puissant pour interagir avec l'environnement du navigateur, créer des redirections, des pop-ups, et s'adapter aux paramètres utilisateurs, ce qui enrichit les possibilités d'interaction et de personnalisation.