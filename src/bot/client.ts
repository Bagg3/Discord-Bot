import { Client, Events, GatewayIntentBits, Guild, Message } from "discord.js";
import { voiceHandlerClass } from "./voice.js";
import { RateLimiter } from "discord.js-rate-limiter";
import { commands } from "./commands.js";

export class clientClass {
  client: Client;
  rateLimiter: RateLimiter;
  botCommands: commands;
  voiceHandler: voiceHandlerClass;

  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
      ],
    });
    this.rateLimiter = new RateLimiter(1, 2000);
    this.botCommands = new commands();
    this.voiceHandler = new voiceHandlerClass(this);
  }

  loginClient() {
    const token: string = process.env.TOKEN;

    this.client.once(Events.ClientReady, (c) => {
      console.log(`Ready! Logged in as ${c.user.tag}`);
    });

    this.client.login(token);

    this.client.on("messageCreate", this.onMessageCreate.bind(this));
  }

  checkIfmessageIsgood(messageCreate: any): number {
    if (messageCreate.author.bot) {
      return;
    }
    //Check if user is rate limited
    let rateLimited = this.rateLimiter.take(messageCreate.author.id);

    if (rateLimited) {
      return 0;
    }
  }

  onMessageCreate(messageCreate: Message): void {
    // Checks if the message is good
    const check = this.checkIfmessageIsgood(messageCreate);
    if (check === 0) {
      return;
    }

    // Check to see if the message is a command and if it is run it from the map
    const botCommandsMap = this.botCommands.getBotCommandsMap();
    const message = messageCreate.content.toLocaleLowerCase();
    if (botCommandsMap.has(message)) {
      const command = botCommandsMap.get(message);
      command(messageCreate);
    }
  }
}
