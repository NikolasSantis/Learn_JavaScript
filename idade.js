// Rodar 'npm install prompt-sync' antes de executar

const prompt = require('prompt-sync')();
const input = prompt('Qual é sua idade? ');

if ( input <= 12 ) {
    console.log('Você é uma criança')
}
else if ( input > 12 && input <= 20 ) {
    console.log('Você é um adolescente')
}
else if ( input > 20 && input <= 40 ) {
    console.log('Você é um jovem')
}
else if ( input > 40 && input <= 60 ) {
    console.log('Você é um adulto')
}
else if ( input > 60 && input <= 100) {
    console.log('Você é um idoso')
}