//variavéis de posição:

//ator
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