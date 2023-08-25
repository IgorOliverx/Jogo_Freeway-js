//variáveis imgs
let cenario;
let ator;


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(cenario);
  image(ator, xAtor,yAtor,wAtor,hAtor);
  movimentaAtor();
  verificaColisao();
  mostrarCar();
  movimentoCarros();
  gameWin();
}


function preload() {
cenario = loadImage("imgs/estrada.png");
ator = loadImage("imgs/ator-1.png");
carro1 = loadImage("imgs/carro-3.png");
carro2 = loadImage("imgs/carro-2.png");
carro3 = loadImage("imgs/carro-1.png");
carro4 = loadImage("imgs/carro-2.png");
imagemCarros = [carro1,carro2,carro3,carro4];
}

