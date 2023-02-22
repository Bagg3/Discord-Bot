import { Client, Events, GatewayIntentBits, Guild, Message } from "discord.js";
import { voiceHandlerClass } from "./voice.js";
import { RateLimiter } from "discord.js-rate-limiter";
import { commands } from "./commands.js";
export class clientClass {
  public client: Client;
  rateLimiter: RateLimiter;
  public botCommands: commands;
  voiceHandler: voiceHandlerClass;

  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
      ],
    });
    this.rateLimiter = new RateLimiter(1, 2000);
    this.botCommands = new commands();
    this.voiceHandler = new voiceHandlerClass();
    //this.botCommands = new commands(this);
  }

  loginClient() {
    const token: string = process.env.TOKEN;

    this.client.once(Events.ClientReady, (c) => {
      console.log(`Ready! Logged in as ${c.user.tag}`);
    });

    this.client.login(token);

    this.client.on("messageCreate", this.onMessageCreate.bind(this));
  }

  checkIfmessageIsgood(messageCreate: any): boolean {
    if (messageCreate.author.bot) {
      return false;
    }
    //Check if user is rate limited
    let rateLimited = this.rateLimiter.take(messageCreate.author.id);

    if (rateLimited) {
      return false;
    }

    return true;
  }

  public getGuilds(messageCreate: any) {
    return this.client.guilds.cache.get(messageCreate.guildId);
  }

  onMessageCreate(messageCreate: Message): Promise<void> {
    // Checks if the message is good
    const check = this.checkIfmessageIsgood(messageCreate);
    if (!check) {
      return;
    }

    // Get guilds cache
    const guilds = this.getGuilds(messageCreate);

    if (messageCreate.content.toLocaleLowerCase() === "bagge") {
      this.voiceHandler.JoinVoiceChannel(
        messageCreate.channelId,
        messageCreate.guildId,
        guilds
      );
      this.voiceHandler.playSound();
      this.voiceHandler.VoicedestroyConnection();
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
