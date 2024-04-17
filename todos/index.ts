#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition) {
let task = await inquirer.prompt([
  {
    name: "todo",
    type: "input",
    message: "What do you want to add to the list/TODOS?",
  },
  
  {
    
    name: "ADDMORE",
    type: 'confirm',
    message: "Would you like to add more Tasks?",
    default: "false",
  },
]
);
todos.push(task.todo);
condition = task.ADDMORE
console.log(todos)
}  

