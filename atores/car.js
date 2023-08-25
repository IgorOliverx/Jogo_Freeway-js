//car1
xCar1 = 599;
xCar2 = 599;
xCar3 = 599;
xCar4 = 599;
yCar1 = 40;
yCar2 = 150;
yCar3 = 210;
yCar4 = 320;
wCar = 50;
hCar = 40;

velCar1 = 5;
velCar2 = 6;
velCar3 = 7;
velCar4 = 8;

let parar = 1;


function movimentaCar1() {
    xCar1 -= velCar1;
    if(xCar1 < - 30){
        xCar1 = 599;
    }
}

function movimentaCar2() {
    xCar2 -= velCar2;
    if(xCar2 < - 30){
        xCar2 = 599;
    }
}

function movimentaCar3() {
    xCar3 -= velCar3;
    if(xCar3 < - 30){
        xCar3 = 599;
    }
}

function movimentaCar4() {
    xCar4 -= velCar4;
    if(xCar4 < - 30){
        xCar4 = 599;
    }
}