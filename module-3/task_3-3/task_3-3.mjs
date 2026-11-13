"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printTodaysDate() {
    const dateOption = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const toDay = new Date();
    printOut(toDay.toLocaleDateString("no-NB", dateOption));
    return toDay;
}

printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
function calcDaysToGTA() {
    const today = printTodaysDate();
    const GTADate = new Date("2026-11-19T00:00:00");
    printOut(GTADate.toLocaleString("no-NB"));
    const days = (GTADate - today) / (1000 * 60 * 60 * 24);
    printOut(`There are ${Math.floor(days)} days left to GTA VI release.`);
}

calcDaysToGTA();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircle(aRadius){
    const diameter = aRadius * 2;
    const circumference = diameter * Math.PI;
    const area = Math.PI * Math.pow(aRadius, 2);
    printOut(`The diameter of the circle is ${diameter}`);
    printOut(`The circumference of the circle is ${circumference}`);
    printOut(`The area of the circle is ${area}`);
}
calculateCircle(5)
printOut(newLine)

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcRectangle(aWidth, aHeight){
    const circumference = (2 * aWidth) + (2 * aHeight);
    const area = aWidth * aHeight;

    printOut(`The circumference of the rectangle is ${circumference}`);
    printOut(`The area of the rectangle is ${area}`);
}

calcRectangle(2, 4);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Fahrenheit = (Kelvin - 273.15) * 9/5 + 32
// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9
// Celsius = Kelvin - 273.15
//Kelvin = (Fahrenheit - 32) * 5/9 + 273.15
//Kelvin = Celsius + 273.15

const TempType = { //Enum type er dette. Husk på Eksamen!
    Fahrenheit: 1, Celsius: 2, Kelvin: 3
}

function convertTemp(aTemp, aType){

    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;

    //Vi bruker her en switch statement for å sjekke hvilken type vi får.
    switch(aType){
        case TempType.Fahrenheit:
            Fahrenheit = aTemp;
            Celsius = (Fahrenheit - 32) * 5/9;
            Kelvin = (Fahrenheit - 32) * 5/9 + 273.15;
            break;
        case TempType.Celsius:
            Celsius = aTemp;
            Fahrenheit = (Celsius * 9/5) + 32;
            Kelvin = Celsius + 273.15;
            break;
        case TempType.Kelvin:
            Kelvin = aTemp;
            Fahrenheit = (Kelvin - 273.15) * 9/5 + 32;
            Celsius = Kelvin - 273.15;
            break;
    }
    printOut(`The temperature is ${Celsius.toFixed(0)} in Celsius, ${Fahrenheit.toFixed(0)} in Fahrenheit and ${Kelvin.toFixed(0)} in Kelvin`)
}

convertTemp(38, TempType.Celsius);
convertTemp(-40, TempType.Fahrenheit);
convertTemp(0, TempType.Kelvin)

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcVAT(aValue, aVATGroup){
let VAT = 0;
const VATGroup = aVATGroup.toLowerCase();
switch(VATGroup){
    case "normal":
        VAT = 25;
        break;
    case "food":
        VAT = 15;
        break;
    case "hotel":
    case "transport":
    case "cinema":
        VAT = 10;
        break;
    default:
        printOut("Unknown VAT group!");
        return; // Vi kan bruke return for å avslutte funksjonen tidlig.
}

//if (vat != 0){
const VATValue = VAT * aValue/100;
const netValue = aValue + VATValue;

printOut(`The bruto amount is: ${aValue}, the VAT encrases the value by: ${VATValue}, the netprice is: ${netValue}`);
//}
}

calcVAT(100, "normal");
calcVAT(90, "cinema");
calcVAT(50, "smågodt");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcMotion(aSpeed, aDistance, aTime){
    if(aSpeed != undefined && aDistance != undefined && aTime == undefined){
        return aDistance / aSpeed;
    } else if (aSpeed != undefined && aDistance == undefined && aTime != undefined){
        return aSpeed * aTime;
    } else if (aSpeed == undefined && aDistance != undefined && aTime != undefined){
        return aDistance / aTime;
    } else {
        return NaN;
    }
}

let speed = calcMotion(undefined, 100, 2);
printOut(`Speed is ${speed}km per hour`);
let time = calcMotion(50, 100, undefined);
printOut(`The time was ${time} hours`);
let distance = calcMotion(50, undefined, 2);
printOut(`The distance is ${distance}km`);
let distance2 = calcMotion(undefined, undefined, 3)
printOut(`The distance is ${distance2}km`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function justifyText(aText, aMaxSize, aChar, aBefore){
    let length = aText.length;
    while(length < aMaxSize){
        if(aBefore){
            aText = aChar + aText;
        } else {
            aText = aText + aChar;
        }
        length++;
    }
    return aText;
}

let newText = justifyText("Hello World!", 57, "&nbsp;", true)
printOut(newText);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let counter = 1;

function calcLeftSide(aRound){
    let sum = 0;
    for (let i =1; i <= aRound + 1; i++){
        sum += counter;
        counter++;
    }
    return sum;
}

function calcRightSide(aRound){
    let sum = 0;
    for(let i = 1; i <= aRound; i++){
        sum += counter;
        counter++;
    }
    return sum;
}

let mathIsCorrect = true
for (let round = 1; round <= 200; round++){
    const left = calcLeftSide(round); 
    const right = calcRightSide(round);
    if(left !== right){
        printOut(`The left side is not equal to he right side for round ${round}`);
        mathIsCorrect = false;
        break; //her can vi stoppe for-løkken
    }
}

if(mathIsCorrect){
    printOut("Math is fun!!!")
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(aValue){
    let sum = 1;
if(aValue > 1){
        sum = aValue * factorial(aValue - 1);
    }    
    return sum;
}

const factorialInput = 7;
const result = factorial(factorialInput);
printOut(`The Factorial value of ${factorialInput} is ${result}`);

printOut(newLine);
