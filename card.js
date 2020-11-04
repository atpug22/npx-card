#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:aryaman.gupta.met19@iitbhu.ac.in");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good Bye, See ya soon!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Aryaman Gupta"),
    handle: chalk.white("@atpug22"),
    fact: chalk.hex('#B10000')('           A Lazy Self-Taught Programmer'),
    twitter: chalk.hex('#2B65EC')("https://twitter.com/") + chalk.hex("#488AC7")("_ryaman"),
    github: chalk.hex('#2B65EC')("https://github.com/") + chalk.hex("#488AC7")("atpug22"),
    linkedin: chalk.hex('#2B65EC')("https://linkedin.in/") + chalk.hex("#488AC7")("ryaman"),

    labelFact: chalk.hex('#FF6262').bold(""),
    labelTwitter: chalk.hex('#EAC117').bold("        Twitter:"),
    labelGitHub: chalk.hex('#EAC117').bold("        GitHub:"),
    labelLinkedin: chalk.hex('#EAC117').bold("        Linkedin:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `  ${data.fact}`,
        ``,
        `${data.labelTwitter}   ${data.twitter}`,
        `${data.labelGitHub}    ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        ``,
        `${chalk.bold(
            "  Hello! I'm Aryaman, Junior Undergrad from IIT BHU "
        )}`,
        `${chalk.bold("  Full Stack Web Developer from India, and currently")}`,
        `${chalk.bold(
            "  focussed on Competitive Programming, and excited learner"
        )}`,
        `${chalk.bold(
            "  for new things. Send me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your browser.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());