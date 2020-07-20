//Jogo simples de Jokenpo

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

const opcoes = ['pedra', 'papel', 'tesoura'];

rl.question('qual é a sua jogada? \n', resposta => {
   const indiceRandomico = Math.round(Math.random() * 2);
      
   const escolhaDoUsuario = resposta;
   const escolhaDoComputador = opcoes[indiceRandomico];
   console.log(
      `A escolha do computador foi ${escolhaDoComputador}...`
   );

   if(escolhaDoComputador == escolhaDoUsuario){
      console.log('Empate!');
   }else{
      if(
         escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura' ||
         escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra' ||
         escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel'
         ){
         console.log('Você ganhou!');
      }else{
         console.log('Você perdeu :(');
      }
   }
   
   
   rl.close();
});
