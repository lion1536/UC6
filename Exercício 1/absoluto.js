import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
 
const rl = readline.createInterface({ input, output });
 
const num1 = parseFloat(await rl.question('Digite o primeiro número: '));
var numero1 = Math.sqrt(num1 ** 2);
 
console.log(`O valor absoluto de ${num1} é!: ${numero1}`);
rl.close();