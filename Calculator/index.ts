
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter Your First number", type: "number", name: "FirstNum" },
  { message: "Enter your second number", type: "number", name: "SecNum" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division","Flah"],
  },
]);

// conditional statement
if (answer.operator == "Addition") {
  console.log("Your Value is", +answer.FirstNum + answer.SecNum);
} else if (answer.operator == "Substraction") {
  console.log("Your Value is", +answer.FirstNum - answer.SecNum);
} else if (answer.operator == "Multiplication") {
  console.log("Your Value is", +answer.FirstNum * answer.SecNum);
} else if (answer.operator == "Division") {
  console.log("Your Value is", +answer.FirstNum / answer.SecNum);
} else {
  console.log("Please select valid operator");
}
