import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
 
const rl = readline.createInterface({ input, output });
 
console.log(`Olá, ${await rl.question('Qual é o seu nome? ')}!`);
rl.close();