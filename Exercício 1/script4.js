/*Componha um algoritmo que calcula se um ano é
bissexto*/
//Importação do readline
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
//Set-up do readline
const rl = readline.createInterface({ input, output });
//Perguntar ao usuário um ano
const entrada = parseInt(await rl.question('Digite um ano:'));
//Determinar se o ano é bissexto
//Se o ano for divisível por 4 e não for divisível por 100
//Ou
//Se o ano for divisível por 400 e for divisível por 100
const saida = (entrada%4 == 0 && entrada%100!= 0) || (!entrada%400);
//Escrever se o ano é ou não bissexto
console.log(`O ano ${entrada} ${saida ? 'é' : 'não é'} bissexto!`);
//Fechar o readline
rl.close();