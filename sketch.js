//variáveis imgs
let cenario;
let ator;
let carro1;
let carro2;
let carro3;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(cenario);
  image(ator, xAtor,yAtor,wAtor,hAtor);
  image(carro1, xCar1,40,wCar,hCar);
  image(carro2, xCar2,150,wCar,hCar);
   image(carro2, xCar3,210,wCar,hCar);
   image(carro3, xCar4,320,wCar,hCar);
   movimentaCar1();
   movimentaCar2();
   movimentaCar3();
   movimentaCar4();
   movimentaAtor();

}

function preload() {
cenario = loadImage("imgs/estrada.png")
ator = loadImage("imgs/ator-1.png")
carro1 = loadImage("imgs/carro-3.png")
carro2 = loadImage("imgs/carro-2.png")
carro3 = loadImage("imgs/carro-1.png")
}

