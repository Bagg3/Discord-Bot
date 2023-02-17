// Require the necessary discord.js classes
import * as dotenv from "dotenv";
import { Bot } from "./bot/bot.js";
const result = dotenv.config();
const botCommands = new Bot();
if (result.error) {
    throw result.error;
}
botCommands.initClient();
botCommands.client.on("messageCreate", function (messageCreate) {
    // Checks if the message is good
    const check = botCommands.checkIfmessageIsgood(messageCreate);
    if (check === 0) {
        return;
    }
    // Sends bot commands when a message is sent
    botCommands.sendBotCommands(messageCreate);
});
//# sourceMappingURL=index.js.map