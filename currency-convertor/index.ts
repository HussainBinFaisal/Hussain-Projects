#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 83.30,
  GBP: 0.79,
  INR: 83.30,
  PKR: 277.54,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter the currency you want to convert from",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: " Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter the amount you want to convert",
    type: "number",
  }
]);

let fromAmount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let amount  = user_answer.amount
let baseAmount = amount / fromAmount // usd based amount
let convertedAmount = baseAmount * toamount
console.log(convertedAmount)