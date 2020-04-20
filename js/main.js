'use strict';

console.log('hello' + 'world');
console.log(12*2);

let price =150;

console.log(price*150);

//const定数  let 変数

price = 170;
console.log(price*150);

console.log('5' + 3);
console.log(parseInt('5', 10) + 3);

const kkk =1200;

console.log(kkk === 1000);

const score = 40;
const name ='taguchi';

score >= 80 ? console.log('A') : console.log('B')

if (score >= 50 && name === 'taguchi') {
  console.log('Good job!');
}

const signal = 'red';

switch(signal){
  case 'red':
    console.log('stop');
    break;
}

for (let i = 1; i <=10; i++){
  // console.log('Hello')
  console.log(`hello ${i}`)
}

let hp =-50;

do {
  console.log(`${hp} left`);
  hp -=15;
}while(hp>0);

for (let i = 1; i <=10; i++){
  if(i===4){
    break;
  }
  console.log(i);
}

function showAD(message = 'Ad'){
  console.log('----------')
  console.log(`--- ${message} ---`)
  console.log('----------')
}

showAD('Header Ad');
console.log('TOM');
console.log('Bon');
// showAD('Ad');
showAD();
console.log('steve');
console.log('rechman')
showAD('Footer Ad');


// const sum = (a,b,c) => a+b+c;

// const total = sum (1,2,3) +sum(3,4,5);
// console.log(total);

const double = a =>a*2;
console.log(double(12));


const x = 2;

function f() {
  const x = 1;
  console.log(x);
}

f();
console.log(x);

{
  const x = 100;
  console.log(x);
}