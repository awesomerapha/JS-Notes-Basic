///////////Primitives
/* let numbers = 4;
numbers = 5;
let numbersArrays = [1,2,3,4,5];
console.log(numbers);

let string = 'string';
let strings = "strings";

let boolean = true; //also false */

//////////

//const firstName = 'Rob';
//const job = 'Student';
//const birthYear = 2002;
//let isMarried = false;

//console.log("Hello my name is " + firstName + "I am a" + job + "and I was born in " + birthYear + " and am I married?");

//console.log(`Hello my name is ${firstName}, I am a ${job}, I was born in ${birthYear} and am I married?` );

/*
const now = new Date().getFullYear();
const yearIlsa = 2003;
let fullAge= 18;
let isFullAge =now - yearIlsa >= fullAge;
//console.log(isFullAge);
let ageWill = now - 2002;
let ageNick = 18;
let averageAge = (ageNick + ageWill) / 2;
console.log(averageAge);

let x,y,q,z; 
*/
/*x = 5;
y = x;
z = y;
q = z;
console.log(z); 
*/

//if else statements

/*
let firstName = 'Paul';
let status = 'married';

if (status === 'single') {
    console.log(`${firstName} is single and ready to mingle`);
} else{
    console.log (`Someone made a big mistake with ${firstName} `);
}
// triple equals when same type and value are being checked for, always use
*/

/*
const robWeight = 78;
const dejWeight = 92;
const robHeight = 1.69;
const dejHeight = 1.95;
const robBmi = robWeight / (robHeight * robHeight);
const dejBmi = dejWeight / (dejHeight * dejHeight);

if(robBmi > dejBmi){
    console.log(`Rob is heavier`);
} else{
    console.log(`Dejon is heavier`);
}
*/

/*
let firstName = 'Sarah';
let age = 35;

if (age < 13) {
    console.log(`${firstName} is a young lady`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager.....ugh`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young woman`);
} else {
    console.log(`She is a boomer`);
}
//check from top to bottom so first one to come true is the only one that runs.
*/

/*

/////Ternary Operator
let firstName = 'Melkadze';
let age = 22;

age >= 21 ? console.log(`${firstName} will drink alcohol`) : console.log(`${firstName} will drink Chocy Milk`);
//Shortcut for an if/else statement

*/

//Truthy and Falsey and equality operators

//falsey values: null, 0, undefined, '', NaN, false
//Truthy values: Anything not above this line
/*
let height = 22;

if(height == '22') {
    console.log('Hey this is type coercial');
} else {
    console.log('No type coercion with triple ===');
}
*/
//Type of values is different but still comes out true due to double equals

//Functions
/*
function calculateAge(birthYear) {
    //console.log (2019 - birthYear);
    return 2019 - birthYear;
    //Value of the functions result is returned
}
let galloBirth = 2002;
//calculateAge(galloBirth);

//functions have to be called to do anything
//functionCall(argument goes here);

function noArg() {
    console.log(`something`);
}
noArg();

const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2004);
//console.log(ageGallo,ageIlsa,ageThami)

let firstName = 'Brendan';
function yearsUntilRetire(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;

    console.log(`${firstName} retires in ${retirement} years`);
}
yearsUntilRetire(2002, firstName);
*/

//function whatDoYouDo(job, firstName) {}; Function declaration without definition/expression

/*
let whatDoYouDo = function(job,firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teachers children';
        case 'driver':
            return firstName + ' drivers people.....over Bryan';
        case 'designer':
            return firstName + ' designers things';
        default:
            return firstName + ' is almost as lazy as Bryan';
            
    }
}
console.log(whatDoYouDo('teacher', 'Thami'));
console.log(whatDoYouDo('driver', 'Veda'));
console.log(whatDoYouDo('musician', 'Rob'));
*/

//////Arrays

////////Initializing an array
/* let names = ['Brian', 'Andrew', 'Winny', 'kaey'];
let numbers = [1,25,6,7,8];
let crazyArray = ['string', 203, true];
/* console.log(names[0]);
console.log(names.length);
 */
/* 
 names.forEach(function(el){
     console.log(el);
 })
  */

//names.push('melkadze sir');
//Adds to the end of an array
//pop takes item out of array
//const namePairs = [ names[0] + names[1], names[2] + names[3] ]; 

/* function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

const bills = [140, 45, 270];
const 
 */
/////// Objects and Methods
const spiderMan = {
    alias:'Spider-man',
    firstname: 'Peter',
    lastName:'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

console.log(spiderMan.location.city);

const me = Object.create(spiderMan);
console.log(spiderMan);
spiderMan.alias = 'superman';
console.log(me.alias);
