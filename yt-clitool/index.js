#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer"
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation"
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgGreen("Hi mom"))

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who Wants to Be a JavaScript Millionare? \n"
  )

  await sleep();
  rainbowTitle.stop()

  console.log(`
    ${chalk.bgBlue("How to Play")}
    I am a process on yout computer.
    If you get any question wrong I will be ${chalk.bgRed("Killed")}
    So get all the questions right...
    `)
}

async function askName(){
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player"
    },
  })

  playerName = answers.player_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "JavaScript was created in 10 days then released on \n",
    choices: [
      'May 23, 1995',
      'Nov 24, 1995',
      'Dec 4, 1995',
      'Dec 17, 1996',
    ],
  })

  return handleAnswers(answers.question_1 == "Dec 4, 1995")
}

async function handleAnswers(isCorrect) {
  const spinner = createSpinner("Checking Answer...").start()
  await sleep()
  if(isCorrect){
    spinner.success({text: `Nice work ${playerName}. That's a legit answer`})
  } else{
    spinner.error({text: `Game Over, you lose ${playerName}!`})
    process.exit(1)
  }

}

function winner(){
  console.clear()
  const msg = `Congrats , ${playerName} ! \n $ 1 , 0 0 0 , 0 0 0`

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data))
  });
}








await welcome()
await askName()
await question1()
await winner();