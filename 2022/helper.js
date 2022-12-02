import * as dotenv from 'dotenv'
dotenv.config()
import { AocClient } from 'advent-of-code-client'

export async function getDayInput(day) {
    return await new AocClient({
      year: 2022, // the year of the challenge
      day: day, // the day of the challenge
      token: process.env.TOKEN, // the session cookie from adventofcode.com
    }).getInput();
}
