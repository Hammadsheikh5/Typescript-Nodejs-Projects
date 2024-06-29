#! /usr/env/bin node
import inquirer from "inquirer";
//Function to add task in Todo list
let addtodo = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "addNewTask",
            type: "input",
            message: "\nAdd Your New Task "
        }
    ]);
    myTodoList.push(newTask.addNewTask);
    console.log(`${newTask.addNewTask} \nThis task is added to your todo list`);
};
//Function to display todo list
let displayTodo = () => {
    console.log("\nYour Todo List is : \n");
    myTodoList.forEach((addNewTask, index) => {
        console.log(`${index + 1} : ${addNewTask}`);
    });
};
let myTodoList = ["hi", "nno"];
console.log("\n\t\t\tWelcome To My Todo List\n");
const userOption = await inquirer.prompt([
    {
        name: "userChoice",
        type: "list",
        message: "Select any option?",
        choices: ["Add Todo", "View Todo", "Delete Todo", "Update Todo", "Exit"]
    }
]);
if (userOption.userChoice === "Add Todo") {
    addtodo();
}
else if (userOption.userChoice === "View Todo") {
    displayTodo();
}
else if (userOption.userChoice === "Delete Todo") {
}
else if (userOption.userChoice === "Update Todo") {
}
else if (userOption.userChoice === "Exit") {
}
