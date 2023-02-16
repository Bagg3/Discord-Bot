// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv';
import { RateLimiter } from 'discord.js-rate-limiter';
import { Bot } from './bot/bot.js';
import { Ressources } from './bot/ress.js';
// Import voice dependencies from discord.js
new Ressources();
new Bot();
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const token = process.env.TOKEN;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(token);
// Allows the bot to send messages every 2 seconds
const rateLimiter = new RateLimiter(1, 2000);
client.on('messageCreate', function (messageCreate) {
    if (messageCreate.author.bot) {
        return;
    }
    //Check if user is rate limited
    let rateLimited = rateLimiter.take(messageCreate.author.id);
    if (rateLimited) {
        return;
    }
    //Send bonk gif when bagge is written  
    if (messageCreate.content.toLocaleLowerCase() === 'bagge') {
        messageCreate.channel.send({ embeds: [Ressources.bonkEmbed] });
        //player.play(ressources);
    }
    // Function to wait for 5 secs
    if (messageCreate.content.toLocaleLowerCase() === 'wait') {
        messageCreate.channel.send('Waiting for 5 seconds');
        Bot.waitFiveSeconds(messageCreate);
    }
    // Send bot commands when .bot is written
    if (messageCreate.content.toLocaleLowerCase() === '.bot') {
        messageCreate.channel.send(Ressources.botCommands);
    }
    // Random generator to send a random lizard gif when lizards is written
    if (messageCreate.content.toLocaleLowerCase() === 'ea') {
        Bot.randomLizard(messageCreate);
    }
    if (messageCreate.content.toLocaleLowerCase() === 'smartcast') {
        messageCreate.channel.send(Ressources.viktor);
    }
});
//# sourceMappingURL=index.js.map