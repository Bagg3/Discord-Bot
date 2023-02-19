import { Client, Events, GatewayIntentBits } from "discord.js";
import { Bot } from "./bot.js";
export class eventHandlerClass {
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessages,
            ],
        });
        this.bot = new Bot();
    }
    loginClient() {
        const token = process.env.TOKEN;
        this.client.once(Events.ClientReady, (c) => {
            console.log(`Ready! Logged in as ${c.user.tag}`);
        });
        this.client.login(token);
        this.client.on("messageCreate", this.onMessageCreate.bind(this));
    }
    onMessageCreate(messageCreate) {
        // Checks if the message is good
        const check = this.bot.checkIfmessageIsgood(messageCreate);
        if (check === 0) {
            return;
        }
        // Rewrite the 7 next lines so they are not hardcoded
        const botCommandsMap = this.bot.botHashMapInstance.getBotCommandsMap();
        const command = botCommandsMap.get(messageCreate.content.toLocaleLowerCase());
        if (command) {
            command(messageCreate);
        }
    }
}
//# sourceMappingURL=event.js.map