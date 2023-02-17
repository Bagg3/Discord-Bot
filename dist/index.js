// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { RateLimiter } from "discord.js-rate-limiter";
import { Bot } from "./bot/bot.js";
//import { Ressources } from "./bot/ress.js";
// Import voice dependencies from discord.js
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const token = process.env.TOKEN;
// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(token);
// Allows the bot to send messages every 2 seconds
const rateLimiter = new RateLimiter(1, 2000);
client.on("messageCreate", function (messageCreate) {
    if (messageCreate.author.bot) {
        return;
    }
    //Check if user is rate limited
    let rateLimited = rateLimiter.take(messageCreate.author.id);
    if (rateLimited) {
        return;
    }
    // Sends bot commands when a message is sent
    Bot.sendBotCommands(messageCreate);
});
//# sourceMappingURL=index.js.map