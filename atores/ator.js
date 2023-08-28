//variavéis de colisão:
let colisao = false;
  

//variáveis do ator
xAtor = 100;
yAtor = 320;
wAtor = 30;
hAtor = 30;

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 1;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 1;
    }
}

function verificaColisao() {
    for(let i=0; i < imagemCarros.length; i++) {
       colisao = collideRectCircle(xCarros[i], yCarros[i], wCar, hCar, xAtor, yAtor, 12);
       if(colisao) {
        yAtor = 320;
        xAtor = 100;
       }
   }

}

function gameWin() {
    
    if(yAtor < 4) {
        background(loadWin);
        
    }
}