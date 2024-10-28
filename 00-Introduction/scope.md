## Scope

Le **scope** (ou portée) en JavaScript désigne la zone dans laquelle une variable est accessible. Il existe plusieurs types de scope :

1. **Scope global** : Les variables déclarées en dehors des fonctions ou blocs sont accessibles partout dans le programme.

   ```javascript
   let x = 10;  // Variable globale
   function test() {
     console.log(x);  // Peut accéder à x
   }
   ```

2. **Scope local** (ou fonction) : Les variables déclarées à l'intérieur d'une fonction ne sont accessibles qu'au sein de cette fonction.

   ```javascript
   function test() {
     let y = 5;  // Scope local
     console.log(y);
   }
   console.log(y);  // Erreur : y n'est pas défini
   ```

3. **Scope de bloc** : Utilisé avec `let` et `const`, les variables sont accessibles uniquement à l'intérieur d'un bloc (comme un `if`, `for`).

   ```javascript
   if (true) {
     let z = 20;  // Scope de bloc
   }
   console.log(z);  // Erreur : z n'est pas défini
   ```

Le **scope** permet d'organiser les variables et d'éviter les conflits de noms dans le code.