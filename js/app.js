

let firstVariable = "";
firstVariable = "Hello World";
firstVariable = 42;
secondVariable = firstVariable;
secondVariable = "Goodbye World";
console.log(firstVariable);

yourName = "David Epps";
let greeting = ("Hello, my name is " + yourName);
console.log(greeting);

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b + c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');

//The Farm

const theFarm = (animal) => {

if (animal === "cow")  {
	console.log("mooooo");
}
	else {
		console.log(`You\'re not a cow.  (You look more like a ${animal}..)`);
	}
}
theFarm("cow");
theFarm("horse");

//-output as expected

// Driver's License

let age=15;

if (age >= 16) {
	console.log ("Here are the keys");
	}
	else {
		console.log ("Sorry, you\'re too young.")
	}

//-

// Just Loop It
/*
for (i=1; i<101; i++){
	console.log(i);
}

for (i=10; i<4001; i++){
	console.log(i);
}

for (i=10; i<4001; i+=2){
	console.log(i);
}
 //-
*/
 // Let's Get Even

 for (i=1;i<101; i++){
 	if (i%2 === 0){
 	console.log(i + " is an even number.");
 }
}

//-

//Give Me a Five

for (i=1; i<101; i++){
	if (i%5 === 0){
		console.log(`I found a ${i}. High five!`);
	}
	else if (i%3 === 0) {
		console.log(`I found a ${i}. Three\'s a crowd!`);
	}
}

//-

// Savings Account

let bank_account = 0;

for (i=1; i<101; i++){
	bank_account+=i*2;
}
console.log(bank_account);

//-

// Multiples of 3 and 5 - Project Euler

let euler = 0;

for (i=1; i<1000; i++){
	if (i % 3 === 0 || i % 5 === 0){
		euler+=i;
		//console.log(i, euler);
		}
	}
	console.log(`Total sum = ${euler} = Project Euler`);

//-

// Easy Does It
const douglasAdamsQuotes = ['Time is an illusion. Lunchtime doubly so.', 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.', 'One is never alone with a rubber duck.'];

console.log(douglasAdamsQuotes[0]);
console.log(douglasAdamsQuotes[1]);
console.log(douglasAdamsQuotes[2]);

//-

// Random
const randomThings = [1, 10, "Hello", true];
console.log(randomThings);
console.log(`To access the first element of the array 'randomThings', use 'randomThings[1]' = ${randomThings[1]}`);
console.log(randomThings[2] + " now equals");
randomThings[2]="World";
console.log(randomThings[2]);

//-

// We've Got Class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
console.log(`ourClass=${ourClass}`);
console.log(`To access the third element of this array, use 'ourClass[2]' = ${ourClass[2]}`);
console.log("now equals");
ourClass[2]="Octocat";
console.log(`${ourClass[2]}. Adding 'Cloud City' to the array in register [${ourClass.push("Cloud City")-1}]`);
console.log("This is our array once we\'re done: " + ourClass);

//-

// Mix It Up

const myArray = [5 ,10 ,500, 20]
console.log(myArray);
console.log("Adding to the end of this array: ");

console.log(`${myArray.push('Egon')} elements would make this a good array, but I don't want ${myArray.pop()} to be last.`);
console.log(`A ${myArray.unshift('Bob Marley')}th was just added to the beginning of this array, but ${myArray.shift()} has now been removed with the 'shift' method`);

/*
const reverseMyArray = (myArray) 
	for (i=0; i<(myArray.length-1); i++) {
		reverseMyArray.push(myArray.pop());
	}

console.log(`Of course, I guess anyone can be first: ${reverseMyArray}`);
*/
let myReversed = myArray.reverse();
console.log(`Of course, anyone can be first: ${myReversed}`);

//-

// Biggie Smalls

smallsNumber = window.prompt("Enter a number", 50);
if (smallsNumber<100) {
	console.log("little number");
}
else {
console.log("big number");
}

monkeyNumber = window.prompt("Enter a number", 25);
if (monkeyNumber<5){
	console.log("little number")
} 
else if (monkeyNumber>10){
	console.log("big number");
}
else {
console.log("monkey");
}

//-

// What's In Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
const kristynShoe=(kristynsCloset.shift());
kristynsCloset.push("raybans");
kristynsCloset[6]="stained knit hat";

fierceShirt=thomsCloset[0][0];
fiercePants=thomsCloset[1][1];
fierceAccesory=thomsCloset[2][2];
console.log(`Thom is stepping out in style in his ${fierceShirt}, ${fiercePants}, and ${fierceAccesory}.`);

thomsCloset[2][3]="Footie Pajamas";

//-

// Functions > printGreeting

const printGreeting = (name) => {
	return greet=(`Hello there, ${name}!`);

}
console.log(printGreeting("Slimer"));

//-

// reverseWordOrder

const reverseOrder = (string1) => {
	const stringArray = string1.split(" ");
	let wordsReversed = stringArray.reverse();
	let wordsJoined = wordsReversed.join(' ');
	return wordsJoined;
}

console.log(`${reverseOrder("far so story The")}.`);

//-

// calculate

const calculate = (num1, num2, operation) => {
	if (operation==="add") {
		return (num1 + num2);
	}
	else if (operation==="sub") {
		return (num1 - num2);
	}
	else if (operation==="mult") {
		return (num1 * num2);
	}
	else if (operation==="div") {
		return (num1 / num2);
	}
	else if (operation==="exp") {
		return (Math.pow(num1,num2));
	}
	else {
		return (`invalid operation`);
	}
	}
//console.log(`${calculate(window.prompt("Enter num1",10)),(window.prompt("Enter num2",10)),(window.prompt("Enter opr","add/sub/mult/div/exp"))}`); **returns opr only
console.log(`${calculate(10,10,"add")}`)

//-

// FUNCTIONS 1

const printCool = (name) => {
	return cool=(`${name} is cool!`);
}
console.log(printCool("Johnny Bravo"));

//-

// FUNCTIONS 2

const printCube = (num) => {
	return cube=(num*num*num);
}
console.log(printCube(3));

//-

// FUNCTIONS 3

const isAVowel = (char) => {
	charLow=(char.toLowerCase());
	if (charLow==="a" || charLow==="e" || charLow==="i" || charLow==="o" || charLow==="u"){
		return true;
	}
	else {
		return false;
	}
	}
console.log(isAVowel("A"));

//-

// FUNCTIONS 4


const getTwoLengths=(string1, string2) => {
	return [string1.length, string2.length];
}
console.log(`${getTwoLengths("Hank", "Hippopopalous")}`);

//- 

// FUNCTIONS 5

const newMultiple=[];
const getMultipleLengths=multiArray => {
	for (x=0; x<multiArray.length; x++) {
		newMultiple.push(multiArray[x].length);
	}
	return newMultiple;
}
console.log(`${getMultipleLengths(["hello", "what", "is", "up", "dude"])}`);

//-

// FUNCTIONS 6

const maxOfThree = (max1, max2, max3) => {
	return (Math.max(max1,max2,max3));
}
	console.log(`${maxOfThree(12, 34, 34)}`);

//-

// FUNCTIONS 7
/*
const printLongestWord = (wordArray) => {
	lengthArray=[];
	for (i=0; i<wordArray.length-1; i++) {
		console.log(lengthArray.push(wordArray[i].length));
	}
	console.log(lengthArray);
}
console.log(wordArray("BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"));
*/
//-** BROKEN

// FUNCTIONS 8
const transmorgify = (num1,num2,num3) => {
	return (Math.pow((num1*num2),(num3)));
}
console.log(transmorgify(5,3,2));

//-

// Objects>Syntax
// {} bracket notation
// x.meth dot notation
// [] array


// Me

const me = {
	'name':
	'David',
	'age':
	45,
	'email':
	'david.epps.ga@gmail.com'
}

console.log(me.name);
me.age=100;
console.log(me.age);









