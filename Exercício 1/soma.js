import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
 
const rl = readline.createInterface({ input, output });
 
const num1 = parseFloat(await rl.question('Digite o primeiro número: '));
const num2 = parseFloat(await rl.question('Digite o segundo número: '));
const num3 = num1 + num2;

 
console.log(`A soma de ${num1} e ${num2} é: ${num3}!`);
rl.close();