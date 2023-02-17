// Require the necessary discord.js classes
import * as dotenv from "dotenv";
import { Bot } from "./bot/bot.js";

const result = dotenv.config();
const botCommands = new Bot();

if (result.error) {
  throw result.error;
}

botCommands.loginClient();
