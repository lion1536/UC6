import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
const entrada = parseInt(await rl.question('Digite um número: '));
const horas = Math.floor(entrada/3600);
const minutos = Math.floor((entrada%3600)/60);
const seg = (entrada%3600)%60;
console.log(`o tempo é de ${horas} horas, ${minutos} minutos, ${seg} segundos`);
rl.close();