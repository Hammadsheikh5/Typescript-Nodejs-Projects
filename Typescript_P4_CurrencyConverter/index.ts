#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Print welcome message
console.log(chalk.cyanBright.bold("\n\t\t\tWelcome To Cureency Converter Project\n"));

// Define currency rates relative to USD
const Currency: any = {
    "USD": 1,
    "EUR": 0.91,
    "GBP": 0.76,
    "INR": 74.57,
    "PKR": 280
}
// Prompt user for input
const userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.blue.italic("From Currency : "),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.blue.italic("To Currency : "),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.blue.italic("Amount : ")
    }
])
// Extract user input
let fromcurrency = Currency[userAnswer.from];

let tocurrency = Currency[userAnswer.to];

let amount = userAnswer.amount;

// Calculate conversion
let baseresult = amount / fromcurrency;
let total = baseresult * tocurrency
// Print result
console.log(chalk.yellowBright.bold(`\n ${amount} ${userAnswer.from} is equal to ${total} ${userAnswer.to}`));

