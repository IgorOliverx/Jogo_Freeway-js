//variavéis de colisão:
let colisao = false;
let meusPontos = 0;

//variáveis do ator
xAtor = 100;
yAtor = 320;
wAtor = 30;
hAtor = 30;

let venceu = false;



function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 1;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 1;
        if(yAtor==330) {
            yAtor = 320
        }
    }
}

function verificaColisao() {
    for(let i=0; i < imagemCarros.length; i++) {
       colisao = collideRectCircle(xCarros[i], yCarros[i], wCar, hCar, xAtor, yAtor, 12);
       if(colisao) {
        yAtor = 320;
        xAtor = 100;
        somColisao.play();
        if(meusPontos>0){
        meusPontos-=1 ;} else {
            meusPontos = 0;
        }
       }
   }

}

function gameWin() {
    
    if(meusPontos == 5) {
    background(loadWin);   
    } 
  }




  function incluiPontos() {
    textAlign(CENTER);
    fill(139,0,139)
    textSize(25);
    text(meusPontos, width /2, 25);
  }

  function marcarPontos(){
    if(yAtor < 3) {
         meusPontos += 1;
        yAtor = 320;
        xAtor = 100;
        somPonto.play();
       
    }
  }






  


 
