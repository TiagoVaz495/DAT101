"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const wakeUpTime = 7;
const time = 7;
if (wakeUpTime === time) {
    printOut("Take the bus!");
} else if (time === 8) {
    printOut("Take the train!");
} else {
    printOut("Take the car!");
}
printOut(newLine);

printOut("Personal Test(fikk hjelp av fyse gruppe)");

const wakeUpTime2 = Math.floor(Math.random() * 4) + 6;
printOut(`The wake up time is ${wakeUpTime2}`)
const time2 = 7;
const time3 = 8;
if (wakeUpTime2 <= time2) {
    printOut("Take the bus!");
} else if (wakeUpTime2 === time3) {
    printOut("Take the train!");
} else {
    printOut("Take the car!");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p4Number = 0;
if (p4Number > 0) {
    printOut("The number is positive.");
} else if (p4Number < 0) {
    printOut("The number is negative. ");
} else {
    printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`)
if (imageUserSize >= imageMinSize) {
    if (imageUserSize <= imageMaxSize) {
        printOut("Thank You");
    } else {
        printOut("Image is to Lage")
    }
} else {
    printOut("Image is to Small")
}

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Juni", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);

switch (monthName) {
    case "Mai":
    case "Juni":
    case "Juli":
    case "August":
    printOut(monthName + " har ikke r i seg. Du skal ikke ta vitamin D");
    break;

    default:
    printOut(monthName + " har r i seg, ta vitamin D");
    break;
}

switch (monthName) {
    case "January":
    case "Mars":
    case "Mai":
    case "Juli":
    case "August":
    case "October":
    case "December":
        printOut("There are 31 Days in this month.");
        break;
    case "February":
        printOut("There are 28 Days in this month.");
        break;
    default:
        printOut("There are 30 Days in this month");
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || (monthName === "May")) {
    printOut("Sorry, the gallery is closed")
} else if (monthName === "April") {
    printOut("Sorry, main gallery is closed, your are welcome into the premesiss next door!")
} else {
    printOut("Welcome to my gallery")
}
printOut(newLine);
