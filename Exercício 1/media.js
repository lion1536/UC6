import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
 
const rl = readline.createInterface({ input, output });
 
const num1 = parseFloat(await rl.question('Digite um número: '));
const num2 = parseFloat(await rl.question('Digite o segundo número: '));
const num3 = parseFloat(await rl.question('Digite o terceiro número: '));
var numero1 = (num1 + num2 + num3)/3;
 
console.log(`A média de  ${num1}, ${num2} e ${num3} é!: ${numero1}`);
rl.close();