//Jogo simple de Jokenpo

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

const traduzNumeroParaOpcao = n => {
   let opcao;
   switch(n){
      case 1:
         opcao = 'pedra';
         break;
      case 2:
         opcao = 'papel';
         break;
      case 3:
         opcao = 'tesoura';
         break;
      default: 
         opcao = '0';
   }

   return opcao;
}

rl.question('qual é a sua jogada? \n', resposta => {
   const x = Math.round(1 + Math.random() * 2);
      
   const escolhaDoUsuario = resposta;
   const escolhaDoComputador = traduzNumeroParaOpcao(x);
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
