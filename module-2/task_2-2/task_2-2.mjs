"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const test1 = 2 + 3 * 2 - 4 * 6;
const newMatExp = "2 + 3 * (2-4) * 6";
const test2 = 2 + 3 * (2 - 4) * 6;
printOut(orgMatExp);
printOut(test1);
printOut(newMatExp);
printOut(test2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p2millPrInch = 25.4;
const p2Meter = 25.34;
let p2Millimeter = p2Meter * 1000;
let sum = (p2Millimeter / p2millPrInch).toFixed(2);

printOut(`25,34 meter = ${sum} inch`);
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p3Days = 3;
const p3Hours = 12;
const p3Minutes = 14;
const p3Seconds = 45;
let DtoM = p3Days * (24 * 60);
let HtoM = p3Hours * 60;
let StoM = p3Seconds / 60;
let Answer = DtoM + HtoM + p3Minutes + StoM;

printOut(`3 Days, 12 Hours, 14 Minutes and 45 Seconds = ${Answer} Minutes`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Minutes1 = 6322.52;
let p4Days = Minutes1 / (24 * 60);
let WholeDays = Math.floor(p4Days);
let p4Hours = (p4Days - WholeDays) * 24;
let WholeHours = Math.floor(p4Hours);
let p4Minutes = (p4Hours - WholeHours) * 60;
let WholeMinutes = Math.floor(p4Minutes);
let p4Seconds = (p4Minutes - WholeMinutes) * 60;
let WholeSeconds = Math.floor(p4Seconds);

printOut(`Days = ${WholeDays}`);
printOut(`Hours = ${WholeHours}`);
printOut(`Minutes = ${WholeMinutes}`);
printOut(`Seconds = ${WholeSeconds}`);
printOut(`${Minutes1} Minutes = ${WholeDays} Days, ${WholeHours} Hours, ${WholeMinutes} Minutes and ${WholeSeconds} Seconds`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const DolltoNok = 76 / 8.6;
const NoktoDoll = 8.6 / 76;
let Nok = 54 * DolltoNok;
let Doll = Nok * NoktoDoll;
printOut(`54 Dollars = ${Math.round(Nok)} Norwegian Kroner`);
printOut(`${Math.round(Nok)} Norwegian Kroner = ${Doll.toFixed(2)} Dollars`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand";
printOut(`The texts length is ${text.length} characters.`);
printOut(`The 19th character is "${text.charAt(19)}"`);
printOut(`The letters between index 35 and 43 are "${text.substring(35, 35 + 8)}"`);
printOut(`The word "earth" is found at index ${text.indexOf("earth")}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`Is 5 greater that 3? Answer: ${5 > 3}`);
printOut(`Is 7 greater or equal to 7? Answer: ${7 >= 7}`);
const p7a = 5;
const p7b = 7;
printOut(`If we say that a = 5 and b = 7, is a still greater than b? Answer: ${p7a > p7b}`);
printOut(`Is 1 lesser than a? Answer: ${1 < p7a}`);
const p7c = 4;
const p7d = 6;
printOut(`If we say that c = 4 and d = 6, is 2500 lesser than abcd? Answer: ${2500 < (p7a * p7b * p7c * p7d)}`);
printOut(`"arne" is not equal to "thomas"? Answer: Syntax Error`);
printOut(`"2 equals 5" is this statement true? Answer: ${2 == 5}`);
printOut(`"abcd is greater than bcd" is this statement false? Answer: ${p7a * p7b * p7c * p7d < p7b * p7c * p7d}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text1 = "254";
let testp8 = console.log("---Converting '254'---");
let test2p8 = Number(text1);
printOut(`Number = ${test2p8}`);

printOut(newLine);

const text2 = "57.23";
let test3p8 = console.log("---Converting '57.23'---");
let test4p8 = parseInt(text2);
let test5p8 = parseFloat(text2);
let test6p8 = Number(text2);
printOut(`ParseInt = ${test4p8}`);
printOut(`ParseFloat = ${test5p8}`);
printOut(`Number = ${test6p8}`);

printOut(newLine);

const text3 = "25 kroner";
let test7p8 = console.log("---Converting '25 kroner'---");
let test8p8 = parseInt(text3);
let test9p8 = parseFloat(text3);
let test10p8 = Number(text3);
printOut(`ParseInt = ${test8p8}`);
printOut(`ParseFloat = ${test9p8}`);
printOut(`Number = ${test10p8}`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;
printOut(`The random Floor number is ${r}`);
printOut(newLine);

let r2 = Math.ceil(Math.random() * 360);
printOut(`The random Ceil number is ${r2}`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 131;
let weeks = Math.floor(days / 7);
let p10days = days % 7;
printOut(`There are ${weeks} weeks and ${p10days} days in 131 days`);
printOut(newLine);