#!/usr/bin/env node
import * as say from "../src/cli.js";
import readlineSync from "readline-sync";

say.greating;
say.userName;
say.hello;

const getRandomInt = (max) => {
   return Math.floor(Math.random() * Math.floor(max));
};

const isEven = (num) => num % 2 === 0;

const brainIsEven = () => {
   console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
   let count = 0;
   for (let i = 0; i < 3; i += 1) {
      let random = getRandomInt(100);
      console.log(`Question: ${random}`);
      let ansver = readlineSync.question("Your answer: ");
      if (isEven(random)) {
         if (ansver === "yes") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'${ansver}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${say.userName}!`);
            break;
         }
      }
      if (!isEven(random)) {
         if (ansver === "no") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'${ansver}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${say.userName}!`);
            break;
         }
      }
   }
   console.log(`Congratulations, ${say.userName}!`);
};
brainIsEven();