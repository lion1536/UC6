/*Componha um algoritmo que calcula a soma
dos dígitos de um número de 2 dígitos*/
//Importação do readline
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
//Set-up do readline
const rl = readline.createInterface({ input, output });
//Perguntar ao usuário um número de 2 dígitos
const entrada = parseInt(await rl.question('Digite um número de 2 dígitos:'));
//Saber a soma dos dois dígitos
const saida = entrada%10 + Math.floor(entrada/10);
//Escrever a soma dos dois dígitos
console.log(`A soma dos dois dígitos de ${entrada} é: ${saida}!`);
//Fechar o readline
rl.close();