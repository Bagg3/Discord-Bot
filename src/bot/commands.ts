import { EmbedBuilder, Message, Client } from "discord.js";
import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import {
  terminateCommand,
  makeRandomLizard,
  fieCommand,
  dotBotCommand,
  smartcastCommand,
  makePandaCommand,
  printCommands,
  makeBonkCommand,
} from "./funtions.js";

export class Commands {
  botCommandsMap: Map<string, Function>;
  voiceHandler: VoiceHandlerClass;
  mongo: MongoClass;

  constructor(private c: Client) {
    this.voiceHandler = new VoiceHandlerClass();
    this.botCommandsMap = new Map();
    this.mongo = new MongoClass();
    this.botCommandsMap.set("bagge", makeBonkCommand(c, this.voiceHandler));
    this.botCommandsMap.set("ea", makeRandomLizard(c, this.voiceHandler));
    this.botCommandsMap.set("smartcast", smartcastCommand);
    this.botCommandsMap.set("e", makePandaCommand());
    this.botCommandsMap.set("fie", fieCommand);
    this.botCommandsMap.set(".bot", dotBotCommand);
    this.botCommandsMap.set("terminator", terminateCommand);
    this.botCommandsMap.set("!leaderboard", printCommands.bind(this));
  }

  // Function to return the map
  getBotCommandsMap() {
    return this.botCommandsMap;
  }
  /*
  //Function to agregate the commands in the database
  async agregateCommands(messageCreate: Message) {
    const database = this.mongo.client.db("discord");
    const collectionDb = database.collection("commands");

    const pipeline = [
      { $group: { _id: "$name", count: { $sum: "$count" } } },
      { $sort: { count: -1 } },
    ];
    const res = collectionDb.aggregate(pipeline);

    for await (const doc of res) {
      messageCreate.channel.send(doc._id + " " + doc.count);
      console.log(doc);
    }
  }
  */
}
