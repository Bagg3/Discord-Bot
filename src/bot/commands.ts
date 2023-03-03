import { EmbedBuilder, Message, Client } from "discord.js";
import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import {
  makeRandomLizard,
  makeFieCommand,
  makeDotBotCommand,
  makeSmartcastCommand,
  makePandaCommand,
  makePrintCommands,
  makeBonkCommand,
} from "./funtions.js";
import { ClientClass } from "./client.js";

export class Commands {
  botCommandsMap: Map<string, Function>;
  voiceHandler: VoiceHandlerClass;
  mongo: MongoClass;

  constructor(client: Client) {
    this.voiceHandler = new VoiceHandlerClass();
    this.mongo = new MongoClass();

    this.botCommandsMap = new Map([
      ["bagge", makeBonkCommand(client, this.voiceHandler)],
      ["ea", makeRandomLizard(client, this.voiceHandler)],
      ["smartcast", makeSmartcastCommand()],
      ["e", makePandaCommand()],
      ["fie", makeFieCommand()],
      [".bot", makeDotBotCommand()],
      ["!leaderboard", makePrintCommands(this.mongo)],
    ]);
  }

  // Function to return the map
  getBotCommandsMap() {
    return this.botCommandsMap;
  }
}
