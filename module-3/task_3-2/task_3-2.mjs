"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++) {
    task1Line += i + " ";
}
printOut(task1Line);
task1Line = "Line 2: ";
for (let i = 10; i >= 1; i--) {
    task1Line += i + " ";
}
printOut(task1Line);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber) {
    task2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + task2RandomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task3GuessNumber = 45;
let task3RandomNumber = 0;
let task3Attempts = 0;
let task3TimeStart = Date.now();
while (task3RandomNumber !== task3GuessNumber) {
    task3RandomNumber = Math.floor(Math.random() * 100000000) + 1;
    task3Attempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = (task3TimeEnd - task3TimeStart);
printOut(`The random number is: ${task3RandomNumber}`);
printOut(`Number of attempts: ${task3Attempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = [2];
for (let i = 3; i <= 200; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
printOut(`The prime numbers between 2 and 200 are: ${primes.join(", ")}`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

{
    for (let row = 1; row <= 7; row++) {
        let rowText = "";

        for (let column = 1; column <= 9; column++) {
            rowText += `${column === 1 ? "" : " "} K${column}R${row}`;
        }

        printOut(rowText);
    }
}

printOut(newLine);
printOut("--- Part 5.2: Arne Svar----------------------------------------------------------------------------------------------");

printOut(newLine);

let rowText = "";
for (let row = 1; row <= 7; row++) {
    for (let col = 1; col <= 9; col++) {
        rowText += " K" + col + "R" + row;
    }
    rowText += newLine;
}

printOut(rowText);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

{
    for (let student = 1; student <= 5; student++) {
        const points = Math.floor(Math.random() * 236) + 1;
        const percentage = (points / 236) * 100;
        let letterGrade;

        if (percentage >= 89) {
            letterGrade = "A";
        } else if (percentage >= 77) {
            letterGrade = "B";
        } else if (percentage >= 65) {
            letterGrade = "C";
        } else if (percentage >= 53) {
            letterGrade = "D";
        } else if (percentage >= 41) {
            letterGrade = "E";
        } else {
            letterGrade = "F";
        }

        printOut(`Student ${student}: ${points}/236 points (${percentage.toFixed(1)}%) — grade ${letterGrade}`);
    }
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const d1 = Math.floor(Math.random() * 6) + 1;
const d2 = Math.floor(Math.random() * 6) + 1;
const d3 = Math.floor(Math.random() * 6) + 1;
const d4 = Math.floor(Math.random() * 6) + 1;
const d5 = Math.floor(Math.random() * 6) + 1;
const d6 = Math.floor(Math.random() * 6) + 1;

const diceThrow = `${d1}${d2}${d3}${d4}${d5}${d6}`;

printOut(`The dice throw is equal to: ${diceThrow}`);

let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
for (let i = 0; i < 6; i++) {
    const c = diceThrow.charAt(i);
    if (c === "1") {
        c1++;
    } else if (c === "2") {
        c2++;
    } else if (c === "3") {
        c3++;
    } else if (c === "4") {
        c4++;
    } else if (c === "5") {
        c5++;
    } else {
        c6++;
    }
}
const diceCount = `${c1}${c2}${c3}${c4}${c5}${c6}`

printOut(`The dice count is: ${diceCount}`);

const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

printOut(`The magic pattern string is: ${countString}`);


printOut(newLine);
