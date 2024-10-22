let array, cpt, somme;

// Exercice 1
console.info(">>>>> Exercice 1");

array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element);
});

// Exercice 2
console.info(">>>>> Exercice 2");

array = [];
array.push(1, 2, 3);
console.log(array);

// Exercice 3
console.info(">>>>> Exercice 3");

array = [1, 2, 3];
array.pop();
console.log(array);

// Exercice 4
console.info(">>>>> Exercice 4");

array = [1, 2, 3];
array.shift();
console.log(array);

// Exercice 5
console.info(">>>>> Exercice 5");

array = [1, 2, 3, 4, 5];
delete array[2];
delete array[3];
array.splice(2, 1, 6);
array.splice(3, 1, 7);
console.log(array);

// Exercice 6
console.info(">>>>> Exercice 6");

array = [1, 2, 3, 4, 5];
somme = 0;

array.forEach(element => {
    somme += element;
}); 

console.log(somme);

// Exercice 7
console.info(">>>>> Exercice 7");

array = [1, 2, 3, 4, 5];
let [var1, var2] = array;
console.log(var1, var2);

// Exercice 8
console.info(">>>>> Exercice 8");

array = [[1, 2], [3, 4], [5,6]];

array.forEach(element => {
    element.forEach(nb => {
        console.log(nb);
    });
});

// Exercice 9
console.info(">>>>> Exercice 9");

array = [["Bonjour","à"],["tous"],["et",["bienvenue","au"],"cours"]];
[[Bonjour, a] = tab1, [tous] = tab2, [et, [bienvenue, au] = tab4, cours] = tab3] = array;
console.log(Bonjour, a, tous, et, bienvenue, au, cours);
