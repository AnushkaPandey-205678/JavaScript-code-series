const score = 400
// console.log(score);

const balance = new Number(100)//explicitly mentioning as a number

// console.log(balance);

// console.log(balance.toString().length);//converting to string

// console.log(balance.toFixed(1));//give decimal  values upto one decimal place----mostly used in e commerce website during the calculation of gst

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//gives values upto precision of 4 after rounding off

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//gives value in indian number pattern with commas 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//formulae for calculating random value which are between max value and min value given.