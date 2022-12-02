import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { AocClient } from 'advent-of-code-client';
// import { execute, day } from './day1.js';
import { execute, day } from './day2.js';

const client = new AocClient({
  year: 2022, // the year of the challenge
  day: day, // the day of the challenge
  token: process.env.TOKEN // the session cookie from adventofcode.com
});

const input = await client.getInput();
const answer = execute(input)

console.log(answer)

process.exit() 
