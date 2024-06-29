#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myAccountBalance: number = 15000;
const myAccountPin: number = 8333;

console.log(chalk.green.italic("\n\t\t\t Welcome! To The ATM\n "));

const userAuthentication = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: chalk.blue.bold(" Enter your 4 digit pin number "),
    },
]);
if (userAuthentication.userPin === myAccountPin) {
 console.log(chalk.green.bold("\nCorrect Pin\nNow you can use our services\n"));
 while(true){

    const operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.blue.bold(" What operation do you want to perform ? "),
            choices: ["Deposit", "Fast Cash", "Withdraw", "Check Balance","Quit"],
        },
    ]);
    if (operations.operation === "Deposit") {
        const depositAmount = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: chalk.blue.bold(" Enter the amount you want to deposit : "),
            },
        ]);
        myAccountBalance += depositAmount.Amount;
        console.log(chalk.green.bold(`\nYour account balance is ${myAccountBalance}\n`));
    } else if (operations.operation === "Fast Cash") {
        while (true) {
            const fastCashAmount = await inquirer.prompt([
                {
                    name: "yourAmount",
                    message: chalk.blue.bold("\nSelect any amount\n"),
                    type: "list",
                    choices: [
                        "500",
                        "1000",
                        "2000",
                        "3000",
                        "4000",
                        "5000",
                        "6000",
                        "10000",
                        "20000",
                    ],
                },
            ]);
            if (fastCashAmount.yourAmount > myAccountBalance) {
                console.log(chalk.red.bold("\nInsufficient Balance , try another amount"));
                continue;
            } else {
                myAccountBalance -= fastCashAmount.yourAmount;
                console.log(chalk.green.bold(`\nYou withdraw your amount successsfully `));
                console.log(chalk.green.bold(
                    `Your remaining account balance is ${myAccountBalance}\n`
                ));
                break;
            }
        }
    } else if (operations.operation === "Withdraw") {
        while (true) {
            const withdrawAmount = await inquirer.prompt([
                {
                    name: "userwithdrawAmount",
                    message: chalk.blue.bold("\nEnter the amount you want to withdraw in multiples of 500 : "),
                    type: "number",
                },
            ]);
            if (withdrawAmount.userwithdrawAmount > myAccountBalance) {
                console.log(chalk.red.bold("\nInsufficient Balance , try another amount"));
                continue;
            } else {
                myAccountBalance -= withdrawAmount.userwithdrawAmount;
                console.log(chalk.green.bold(`\nYou withdraw your amount successsfully `));

                console.log(chalk.green.bold(
                    `Your remaining account balance is ${myAccountBalance}\n`
                ));
                break;
            }
        }
    } else if (operations.operation === "Check Balance") {
        console.log(chalk.green.bold(`\nYour current balance is ${myAccountBalance}\n`));
    } else if (operations.operation==="Quit"){
        console.log(chalk.green.bold("Thank you for choosing our ATM"));
        break;
    }

}}
 else {
    console.log(chalk.red.bold("\nInvalid Pin code ! \nPlease try again."));
}
