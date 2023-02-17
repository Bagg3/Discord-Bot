import { Client, Events, GatewayIntentBits } from "discord.js";
import { Ressources } from "./ress.js";
import { RateLimiter } from "discord.js-rate-limiter";
export class Bot {
    // Constructor to create a new rate limiter
    constructor() {
        this.rateLimiter = new RateLimiter(1, 2000);
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessages,
            ],
        });
    }
    // Function to use in send random lizard
    randomLizard(messageCreate) {
        const randomLizard = Math.floor(Math.random() * 3) + 1;
        if (randomLizard === 1) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed] });
        }
        if (randomLizard === 2) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed2] });
        }
        if (randomLizard === 3) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed3] });
        }
    }
    // Function to wait for 5 secs
    waitFiveSeconds(messageCreate) {
        setTimeout(function () {
            messageCreate.channel.send("5 seconds have passed");
        }, 5000);
    }
    // Function to send bot commands
    sendBotCommands(messageCreate) {
        const bot = new Bot();
        if (messageCreate.content.toLocaleLowerCase() === "bagge") {
            messageCreate.channel.send({ embeds: [Ressources.bonkEmbed] });
            //player.play(ressources);
        }
        // Function to wait for 5 secs
        if (messageCreate.content.toLocaleLowerCase() === "wait") {
            messageCreate.channel.send("Waiting for 5 seconds");
            bot.waitFiveSeconds(messageCreate);
        }
        // Send bot commands when .bot is written
        if (messageCreate.content.toLocaleLowerCase() === ".bot") {
            messageCreate.channel.send(Ressources.botCommands);
        }
        // Random generator to send a random lizard gif when lizards is written
        if (messageCreate.content.toLocaleLowerCase() === "ea") {
            bot.randomLizard(messageCreate);
        }
        // Sends a link to a viktor picture when smartcast is written
        if (messageCreate.content.toLocaleLowerCase() === "smartcast") {
            messageCreate.channel.send(Ressources.viktor);
        }
    }
    checkIfmessageIsgood(messageCreate) {
        if (messageCreate.author.bot) {
            return;
        }
        //Check if user is rate limited
        let rateLimited = this.rateLimiter.take(messageCreate.author.id);
        if (rateLimited) {
            return 0;
        }
    }
    initClient() {
        const token = process.env.TOKEN;
        this.client.once(Events.ClientReady, (c) => {
            console.log(`Ready! Logged in as ${c.user.tag}`);
        });
        this.client.login(token);
    }
}
//# sourceMappingURL=bot.js.map