import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
 
const rl = readline.createInterface({ input, output });
 
const num1 = parseFloat(await rl.question('Digite um número: '));
const num2 = num1 * 2;
 
console.log(`O dobro de ${num1} é ${num2}!`);
rl.close();