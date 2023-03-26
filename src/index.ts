// Importing the bot class for all the commands
import { ClientClass } from "./bot/client.js";
import * as dotenv from "dotenv";
import * as os from "os";

let result;

if (os.arch() === "arm" && os.platform() === "linux") {
  // Running on a Raspberry Pi
  result = dotenv.config({ path: "/home/andre/project1/.env" });
} else {
  // Running on a PC
  result = dotenv.config();
}

if (result.error) {
  throw result.error;
}

// Creating a new bot object
const client = new ClientClass();

// Login the bot and event handling
client.loginClient();
