// Importing the bot class for all the commands
import { clientClass } from "./bot/client.js";
import * as dotenv from "dotenv";
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
// Creating a new bot object
const client = new clientClass();
// Login the bot and event handling
client.loginClient();
//# sourceMappingURL=index.js.map