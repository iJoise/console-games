#!/usr/bin/env node
import { userName } from "../src/cli.js";
import readlineSync from "readline-sync";

userName;

const getRandomInt = (max) => {
   return Math.floor(Math.random() * Math.floor(max));
};

const commonDivisor = () => {
   console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
   let count = 0;
   for (let i = 0; i < 4; i += 0) {
      let random = getRandomInt(100);
      console.log(`Question: ${random}`);
      let oneQuestion = readlineSync.question("Your answer: ");
      if (random % 2 === 0) {
         if (oneQuestion === "yes") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
            break;
         }
      }
      if (random % 2 !==0) {
         if (oneQuestion === "no") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
            break;
         }
      }
      if (count === 3) {
         console.log(`Congratulations, ${userName}!`);
         break;
      }
   }
};
commonDivisor();