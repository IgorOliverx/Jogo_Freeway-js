
//O código poderia estar um pouco mais organizado, usando mais arrays e laços.


let xCarros = [620,619,618,617];
let yCarros = [32,127,180,278];


wCar = 50;
hCar = 40;

velCar1 = 5;
velCar2 = 6;
velCar3 = 7;
velCar4 = 8;



function movimentaCar1() {
    xCarros[0] -= velCar1;
    if(xCarros[0] < - 30){
        xCarros[0] = 619;
    }
}

function movimentaCar2() {
    xCarros[1] -= velCar2;
    if(xCarros[1] < - 30){
        xCarros[1] = 619;
    }
}

function movimentaCar3() {
    xCarros[2] -= velCar3;
    if(xCarros[2] < - 30){
        xCarros[2] = 619;
    }
}

function movimentaCar4() {
    xCarros[3] -= velCar4;
    if(xCarros[3] < - 30){
        xCarros[3] = 619;
    }
}

function movimentoCarros(){
    movimentaCar1();
    movimentaCar2();
    movimentaCar3();
    movimentaCar4();
}


function mostrarCar() {

    for(let i=0; i<imagemCarros.length; i++) {
  image(imagemCarros[i], xCarros[i],yCarros[i],wCar,hCar);
}

}