// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


let numbers = [1,2,3,4,5,6,7,8,9,10];
let stringNumberlist = "";

for (let n in numbers){
  stringNumberlist += numbers[n]; //concatenate all numbers on string
}

console.log("Convert to Array to String: "+ stringNumberlist); //Output string


let reversedNumString = "";
let reversedArray = [];

for (var x=numbers.length-1; x>=0; x-- ){
    reversedNumString += numbers[x]; //concatenate on string option
    reversedArray[numbers.length-(x+1)] = numbers[x]; //assign to array - limits from 0 to array lenght-1 
}

console.log("Reversed String: " + reversedNumString);
console.log("Reversed Array: " + reversedArray);

//Reverse original array without using an additional array
 console.log("original:  " + numbers);
 let start=0;
 let end=numbers.length-1;
 let swap = 0; 

  while (start < end) {
  swap = numbers[start]; // save tmp 1st start 
  numbers[start] = numbers[end]; 
  numbers[end] = swap; // assign the saved 1st number at the end
  //numbers[z] = numbers[y]; 
  start++; 
  end--;
 }
 console.log("original reversed: " + numbers);