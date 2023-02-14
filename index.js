import readLineSync from 'readline-sync'

let list = [];
let counter = 0;
let input = '';

while (input != 'sair'){
    if (input != ''){
        list.push(input);
        counter++;
    }
    input = readLineSync.question('Digite uma propriedade CSS: ').toLocaleLowerCase();
}

// do {
//     input = readLineSync.question('Digite uma propriedade CSS: ').toLocaleLowerCase(); 
//     list.push(input);
//     counter++;
// } while (input != 'sair');

console.log('\nPropriedades adicionadas:', counter);
console.log(list.sort().join('\n'));