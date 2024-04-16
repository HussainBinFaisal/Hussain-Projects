#! usr/bin/env node


import inquirer from "inquirer";

let myBalance = 100000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "ENTER PIN: ",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct Pin");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check Balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    myBalance -= amountAns.amount;

    console.log("your remaining balance is: " + myBalance)

  } else if (operationAns.operation === "check Balance") {
    console.log("Your balance is: " + myBalance)
  }
} 

else {
  console.log("Wrong Pin");
}
