// Import voice dependencies from discord/voice
import {
  VoiceConnection,
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  entersState,
  VoiceConnectionStatus,
  StreamType,
  getVoiceConnection,
} from "@discordjs/voice";

// Import discord.js dependencies
import { Client, Events, GatewayIntentBits, Guild, Channel } from "discord.js";
import { clientClass } from "./client.js";

export class voiceHandlerClass {
  client: clientClass;
  guild: Guild;
  // Make a client object from the bot class
  constructor(client: clientClass) {
    this.client = client;
  }

  channel = getVoiceConnection("331120671545360385");

  // Join the voice channel function
  joinVoiceChannel(channel) {
    // Join the voice channel
    const connection = joinVoiceChannel({
      channelId: "331120671545360385",
      guildId: "377176294770606091",
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
  }

  bonkSound = createAudioResource("./Bonk.mp3");
}

/*
const botCommandsMap = this.botCommands.getBotCommandsMap();
const command = botCommandsMap.get(messageCreate.content.toLocaleLowerCase());
if (command) {
  command(messageCreate);
}

*/
