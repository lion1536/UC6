//Importação do readline
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
//Set-up do readline
const rl = readline.createInterface({ input, output });
//Perguntar ao usuário até qual número natural ele quer que some
const entrada = parseInt(await rl.question('Digite um número natural: '));
//Escrever a soma dos números até o número que o usuário digitar
console.log('A soma dos números naturais de 1 até '+ entrada +' é: '+ (1+entrada)*entrada/2);
//Fechar o readline
rl.close();