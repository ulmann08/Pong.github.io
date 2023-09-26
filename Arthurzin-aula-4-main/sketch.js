/*
Arthurzin 



indentação-- organização
depuração-- resolver problemas/bug de codigo

fiz a aula de programação condicional hoje (30/0/2023)
*/
//estados do jogo (inicio,jogando,fim_de_jogo)
var estado = "inicio";
var estado = 'fim_de_jogo';
            
//estradinha (rede)
var rede;

//barrinha do player (raquete)
var Raquete;
//barrinha do pc (raquete)
var raquete_pc;
//bolinha
var bola;



var pontos_pc;
var pontos_jogador;

var vida_pc;
var vida_jogador;

//configurações
function setup()
{
//criar a tela
createCanvas(500,500);


//camada = profundidade
//console.log("a camada da rede é: "+ rede.depth);
 



//sprites das raquetes x,y,largura,altura
raquete = createSprite(10,250,10,80);
raquete.shapeColor = "black";
raquete_pc = createSprite(490,250,10,80);
raquete_pc.shapeColor = 'black';




pontos_jogador= 0;
pontos_pc= 0;

vida_jogador= 3;
vida_pc= 3;


//raquete_pc.velocityY = 8;

//raquete_pc.velocityX = 0;

 

bola = createSprite(250,250,20,20);
bola.shapeColor = 'black';
bola.velocityX = 5;
bola.velocityY = 5;

//paredes

parede_cima = createSprite(250,0,500,5);
parede_cima.shapeColor = "black";
parede_baixo = createSprite(250,500,500,5);
parede_baixo.shapeColor = "black";

//paredes invisiveis
parede_direita = createSprite(0,250,5,500);
parede_direita.visible = false; //valor boleano (true, false)

parede_esquerda = createSprite(500,250,5,500);
parede_esquerda.visible = false; //valor boleano (true, false)


}

//acontecer dentro da tela

function draw()
{


 //fundo da tela :)

 background('gray');

 //chamando a função
 rede();

 vida_pontuacao();

 durante_jogo();
 
//variavel, posição x, posiçaõ y 500

 
 //valor boleano = verdadeiro(funciona) ou falso (nao funciona)
 // 12 == 1 - iguais (verdadeiros) 
 // 12 === 1 - nao sao iguais (falso) 
    


 console.log(12 === 1);

 
 if(estado === "inicio")
 {
  fill('red');
  textSize(25);
  text("Aperte espaço para começar",100,100);

 }



//programação condicional - IF (se)

/*

if(condição)            if(eu sair)

{                 {

 consequencia            eu vou comer um sorvete

}                 }

*/ 

//se a bola no x for menor que 0 voltar para o inicio


// &&  e (as duas condições terão que ser verdadeiras)
// || ou (se uma for verdaeira e uma ser falsa = verdadeiro)



if(bola.x>500 || bola.x<0)
{

 estado = "inicio";
 bola.x = 250;
 bola.y = 250;
 bola.velocityX = 0;
 bola.velocityY = 0;

}

//keyDown() - tecla; 

 
 //collide- impede algo de passar 

 //bounce - batida

 //bolinha quicar e voltar


//se a vida for igualzinho a 0 então game over


 
 //raquete_pc.bounceOff(parede_baixo);
 //raquete_pc.bounceOff(parede_cima);
//aparecer todos os sprites na tela
drawSprites();

}


function rede()
{

 //rede
 //line(x1,y1,x2,y2);
 // line(250,0,250,500);

//loop for e loop while
for(var linhas = 0; linhas <500; linhas = linhas + 20)
{
   line(250,linhas,250,linhas + 10);
}


}

function vida_pontuacao()
{

   textSize(30);
   stroke("black"); //contorno
   fill('red'); //pinta dentro
   text("Pontuação: " + pontos_jogador,150,30);
  
  
  textSize(15);
  fill('red');
  text("Vida do PC: "+vida_pc,400,30);
  
  textSize(15);
  fill('red');
  text('Vida do jogador: '+vida_jogador,9,30);

}

function durante_jogo()
{

   
 //isTouching - esta tocando

 if(bola.isTouching(parede_esquerda))
 {
    vida_pc = vida_pc - 1;
    pontos_jogador +=1;
 }

 if(bola.isTouching(parede_direita))
 {
    vida_jogador = vida_jogador - 1;
    pontos_pc += 1;
 }
  
 //controle
 raquete.y = World.mouseY;
 
 //IA= if
  
 raquete_pc.y = bola.y;
 
 if(keyDown('space')) 
 {

 estado = 'jogando';

 bola.velocityX = 15;
 bola.velocityY = 15;

 }

if(bola.isTouching(raquete))
{
   bola.velocityX *= 1.05;
   bola.velocityY *= 1.05;
}



 
 if(vida_jogador===0 && estado == "jogando")
 {
   estado = "Game_Over";
 
   
 }

 if(estado === "Game_Over")
 {
   fill('red');
   textSize(25);
   text('Game Over',180,250);
   bola.velocityX = 0;
   bola.velocityY = 0;
   bola.destroy();
 } 

 bola.bounceOff(parede_baixo);
 bola.bounceOff(parede_cima);
 bola.bounceOff(raquete_pc);
 bola.bounceOff(raquete);
 
}

