"use strict";
import { printOut } from "../../common/script/utils.mjs";

const carType = [
    {value: 1, option: "Volvo"},
    {value: 2, option: "BMW"},
    {value: 3, option: "Opel"},
    {value: 4, option: "Tesla"}
]

const domContainer = document.getElementById("domContainer");
const domSelectCar = document.getElementById("domSelectCar");
domSelectCar.addEventListener("change", domSelectChange)

for(let i = 0; i < carType.length; i++){
    const car = carType[i];
    const domOption = document.createElement("option");
    domOption.value = car.value;
    domOption.innerText = car.option;
    domSelectCar.appendChild(domOption);
}

function domSelectChange(){
    const car = parseInt(domSelectCar.value);
    switch(carType){
        case carType.Volvo:
            printOut("You have a Volvo!")
            break;
        case carType.BMW:
            printOut("You have a BMW!")
            break;
        case carType.Opel:
            printOut("You have a Opel!")
            break;
    }
}