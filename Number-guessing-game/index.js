#! /usr/bin/env node
// GAME RANDOM NUMBER WOHOOO!!!!!!!!
import inquirer from "inquirer";
// 1) computer will generate a random number - DONE
// 2) user input for guessing number  - DONE
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
//console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6 : ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations!!! you have guess correct");
}
else {
    console.log("Retry You Lost hmm");
}
