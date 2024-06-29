#! /usr/bin/env node


import chalk from "chalk"; // Importing the chalk library for colored output in the console
import inquirer from "inquirer"; // Importing the inquirer library for interactive command line prompts

// Displaying the game title and instructions
console.log(
  chalk.blue.bold(
    "\t\t\t...........Number Guessing Game.............. \n\t\t\t\t You have five wrong attempts\n"
  )
);

let score = 0; // Initializing the starting score to 0
let attempts = 5; // Initializing the total number of attempts to 5

// Prompting the user to choose between starting the game or quitting
const answer = await inquirer.prompt([
  {
    message: "Select Start to start the game and Quit for end the game : ",
    type: "list",
    name: "option",
    choices: ["Start", "Quit"],
  },
]);
// Check if the user chose to start the game
if (answer.option === "Start") {
  // Loop until the user runs out of attempts
  while (attempts > 0) {
    const guess = await inquirer.prompt([
      {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number Between 1-6 : ",
      },
    ]);
    // Generating a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // Check if the user's guess is correct
    if (guess.userGuessNumber === randomNumber) {
      console.log("Congratulations \nYou Guess Correct Number");
      score += 1; //Increament the score if the userGuessNumber is correct
      continue;
    } else {
      console.log("You Guess Wrong Number");
      attempts -= 1; //Decreament the attempts if the userGuessNumber is wrong
      console.log(`Your remaining attempts : ${attempts} `);
    }
  }
  // Display the final score and end of the game message
  console.log(
    chalk.bgBlue.italic(
      `You Guess only ${score} correct number\nYour Score is ${score}`
    )
  );
  console.log(chalk.red.bold("........Game Over............"));
} else {
  // Display the end of the game message if the user chooses to quit
  console.log(chalk.red.bold("........Game Over............"));
}
