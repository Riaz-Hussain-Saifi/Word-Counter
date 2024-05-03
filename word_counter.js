#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan("\n\t Welcome to Saifi Developer's CLI Word Counter\n"));
console.log(chalk.green("*".repeat(66)));
console.log(`\n`);
// Function to count words and characters
function wordCounter() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "word",
            message: chalk.yellow("Enter a sentence or word: "),
        },
    ])
        .then((answers) => {
        const input = answers.word;
        const words = input.split(/\s+/); // Split input by whitespace
        const wordCount = words.length;
        const characterCount = input.replace(/\s/g, "").length; // Remove whitespaces and count characters
        // Output word and character count
        console.log(chalk.blue(`\nYour input "${chalk.greenBright(input)}" contains ${chalk.yellowBright(wordCount)} ${chalk.magenta(wordCount === 1 ? "word" : "words")} and ${chalk.greenBright(characterCount)} characters.`));
        // Determine if word length is longer than or equal to 10
        if (characterCount >= 10) {
            console.log(chalk.yellow(`\t Your input is ${chalk.greenBright(characterCount)} characters. \n`));
        }
        else {
            console.log(chalk.yellow("\t Your input has fewer than 10 characters. \n"));
        }
        // Ask if user wants to count another word
        inquirer
            .prompt([
            {
                type: "confirm",
                name: "countAgain",
                message: chalk.yellowBright(" Do you want to count another sentence or word?"),
            },
        ])
            .then((answer) => {
            if (answer.countAgain) {
                wordCounter(); // Count another word
            }
            else {
                console.log(chalk.cyan("\n\t Thank you for using Saifi Developer's CLI Word Counter. Goodbye!"));
            }
        });
    });
}
// Start word counting
wordCounter();
