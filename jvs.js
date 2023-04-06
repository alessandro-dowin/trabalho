var frase = "aprendendo javascript";  
console.log(frase)
var numero = 1100;
var zero = 0;
var numeroNegativo = -250;
var numeroReal = 25.65;
var pi = 3.1415;
var realNegativo = -19.13;
var realZero = 10.0;

function returnGame(){
    var game = 'Free Fire';
    if (game ==='Free Fire'){
        var game = 'Valorant';
    console.log('Dentro do IF: ' + game);
    }
    console.log('Fora do IF: ' + game);
} 
returnGame()

function returnGame(){
    let game = 'Free Fire';
    if(game === 'Free Fire'){
        let game = 'Valorant';
        console.log('Dentro do IF:' + game);
    }
    console.log('Fora do IF:'   + game);
}
returnGame()

const IP = '127.0.0.1';
console.log(IP);

const USER_ADMIN = { name:'Erick Ramos',
login:'root'
};
USER_ADMIN.login='admin'; // Alteramos o valor da propriedade login
console.log(USER_ADMIN);

var n1 = parseInt(1);
var n2 = parseInt(2);
var soma = n1 + n2;
console.log(soma)

var n1 = parseInt(2);
var n2 = parseInt(1);
var subtracao = n1 - n2;
console.log(subtracao)

var n1 = parseInt(3);
var n2 = parseInt(2);
var multiplicacao = n1 * n2;
console.log(multiplicacao)

var n1 = parseInt(3);
var n2 = parseInt(3);
var divisao = n1 / n2;
console.log(divisao)
