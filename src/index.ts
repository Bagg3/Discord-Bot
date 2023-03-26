// Importing the bot class for all the commands
import { ClientClass } from "./bot/client.js";
import * as dotenv from "dotenv";

// For the raspberry pi to find the .env file
const result = dotenv.config({ path: "/home/andre/project1/.env" });

// For the windows to find the .env file
// const result = dotenv.config();

if (result.error) {
  throw result.error;
}

// Creating a new bot object
const client = new ClientClass();

// Login the bot and event handling
client.loginClient();
