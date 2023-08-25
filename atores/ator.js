//variavéis de colisão:
let colisao = false;
  

//variáveis do ator
xAtor = 100;
yAtor = 366;
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
        yAtor = 366;
        xAtor = 100;
       }
   }

}

function gameWin() {
    
    if(yAtor == 10) {
        print("Voce Ganhou!")
    }
}