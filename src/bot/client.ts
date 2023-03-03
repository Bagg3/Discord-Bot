import { Client, Events, GatewayIntentBits, Guild, Message } from "discord.js";
import { VoiceHandlerClass } from "./voice.js";
import { RateLimiter } from "discord.js-rate-limiter";
import { Commands } from "./commands.js";
import { MongoClass } from "./mongo.js";
export class ClientClass {
  client: Client;
  rateLimiter: RateLimiter;
  botCommands: Commands;
  voiceHandler: VoiceHandlerClass;
  mongo: MongoClass;

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
    this.botCommands = new Commands(this.client);
    this.voiceHandler = new VoiceHandlerClass();
    this.mongo = new MongoClass();
  }

  loginClient() {
    if (!process.env.TOKEN) throw new Error("No token found");

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

  async checkIfCommand(messageCreate: Message, message: string) {
    const botCommandsMap2 = this.botCommands.getBotCommandsMap();
    if (
      botCommandsMap2.has(message) &&
      message != "!leaderboard" &&
      message != ".bot" &&
      messageCreate.guildId != "1075453467742711899"
    ) {
      const count = await this.getCount(messageCreate, message);
      if (count == 0) {
        console.log("New command registered");
        const data = {
          name: messageCreate.author.username,
          command: message,
          count: 1,
        };
        await this.mongo.insertData(data, "commands");
        return;
      }
      this.updateCount(messageCreate, message);
      console.log("Updated count");
    }
  }

  onMessageCreate(messageCreate: Message): Promise<void> {
    // Checks if the message is good
    const check = this.checkIfmessageIsgood(messageCreate);
    if (!check) {
      return;
    }
    const message = messageCreate.content.toLocaleLowerCase();

    this.checkIfCommand(messageCreate, message);

    // Check to see if the message is a command and if it is run it from the map
    const botCommandsMap = this.botCommands.getBotCommandsMap();
    if (botCommandsMap.has(message)) {
      const command = botCommandsMap.get(message);
      command(messageCreate);
    }
  }

  // Function to import the value of count from database by searching for command name and author name
  async getCount(messageCreate: Message, message: string) {
    const database = this.mongo.client.db("discord");
    const collectionDb = database.collection("commands");
    try {
      const result = await collectionDb.findOne({
        name: messageCreate.author.username,
        command: message,
      });
      return result.count;
    } catch (error) {
      return 0;
    }
  }

  // Function to update the value of count from database by searching for command name and author name
  async updateCount(messageCreate: Message, message: string) {
    const database = this.mongo.client.db("discord");
    const collectionDb = database.collection("commands");
    const result = await collectionDb.updateOne(
      { name: messageCreate.author.username, command: message },
      { $inc: { count: 1 } }
    );
    return result;
  }
}
