#!/usr/bin/env node
import * as say from "../src/cli.js";
import readlineSync from "readline-sync";

say.greating;
say.userName;
say.hello;

const getRandomInt = (max) => {
   return Math.floor(Math.random() * Math.floor(max));
};

const commonDivisor = () => {
   console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
   let count = 0;
   for (let i = 0; i < 3; i += 0) {
      let random = getRandomInt(100);
      console.log(`Question: ${random}`);
      let oneQuestion = readlineSync.question("Your answer: ");
      if (random % 2 === 0) {
         if (oneQuestion === "yes") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'${oneQuestion}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${say.userName}!`);
            break;
         }
      }
      if (random % 2 !==0) {
         if (oneQuestion === "no") {
            console.log("Correct!");
            count += 1;
         } else {
            console.log(`'${oneQuestion}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${say.userName}!`);
            break;
         }
      }
      if (count === 3) {
         console.log(`Congratulations, ${say.userName}!`);
         break;
      }
   }
};
commonDivisor();