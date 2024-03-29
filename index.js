#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6.",
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations you guessed right number.");
}
else {
    console.log("opps you guessed a wrong number.");
}
