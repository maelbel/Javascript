let array, cpt, somme;

// Exercice 1
console.info(">>>>> Exercice 1")

array = [1, 2, 3, 4, 5]

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// Exercice 2
console.info(">>>>> Exercice 2")

cpt = 0

while(cpt < array.length){
    console.log(array[cpt])
    cpt++
}

// Exercice 3
console.info(">>>>> Exercice 3")

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
somme = 0

for (let index = 0; index < array.length; index++) {
    somme += array[index]
}

console.log(somme)

// Exercice 4
console.info(">>>>> Exercice 4")

cpt = 0

while (cpt < array.length) {
    if(array[cpt] % 2 == 0){
        console.log(array[cpt])
    }
    cpt++
}

// Exercice 5
console.info(">>>>> Exercice 5")

for (let index = array.length-1; index >= 0 ; index--) {
    console.log(array[index])
}

// Exercice 6
console.info(">>>>> Exercice 6")

somme = 0

for (let index = 0; index < array.length; index++) {
    if(array[index] % 2 == 0){
        somme += array[index]
    }    
}

console.log(somme)

// Exercice 7
console.info(">>>>> Exercice 7")

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("3 x " + element + " = " + 3 * element)
}