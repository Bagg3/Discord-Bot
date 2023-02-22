import { EmbedBuilder, Message, Client } from "discord.js";
import { clientClass } from "./client.js";
import { voiceHandlerClass } from "./voice.js";
export class commands {
  botCommandsMap: Map<string, Function>;
  voiceHandler: voiceHandlerClass;
  //c: Client;

  //constructor(client: Client)

  constructor() {
    this.voiceHandler = new voiceHandlerClass();
    this.botCommandsMap = new Map();
    this.botCommandsMap.set("bagge", this.bonkCommand);
    this.botCommandsMap.set("ea", this.randomLizard);
    this.botCommandsMap.set("smartcast", this.smartcastCommand);
    this.botCommandsMap.set("e", this.pandaCommand);
    this.botCommandsMap.set("fie", this.fieCommand);
    this.botCommandsMap.set(".bot", this.dotBotCommand);
    this.botCommandsMap.set("terminator", this.terminateCommand);
    //this.c = client;
  }

  // Function to return the map
  getBotCommandsMap() {
    return this.botCommandsMap;
  }

  bonkCommand(messageCreate: Message) {
    const bonkEmbed = new EmbedBuilder().setImage(
      "https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif"
    );
    messageCreate.channel.send({ embeds: [bonkEmbed] });

    /*
    
    //this.c.getGuilds(messageCreate.guildId);
    //this.client.getGuilds(messageCreate.guildId);

    const guild = this.c.guilds.cache.get(messageCreate.guildId);
    //console.log(guild);

    console.log(messageCreate.channelId);
    console.log(messageCreate.guildId);

    this.voiceHandler.JoinVoiceChannel(
      messageCreate.channelId,
      messageCreate.guildId,
      guild
    );
    this.voiceHandler.playSound();
    this.voiceHandler.VoicedestroyConnection();

    */
  }

  randomLizard(messageCreate: any) {
    const randomLizard = Math.floor(Math.random() * 3) + 1;
    if (randomLizard === 1) {
      const lizardEmbed = new EmbedBuilder().setImage(
        "https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif"
      );
      messageCreate.channel.send({ embeds: [lizardEmbed] });
    }
    if (randomLizard === 2) {
      const lizardEmbed2 = new EmbedBuilder().setImage(
        "https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif"
      );
      messageCreate.channel.send({ embeds: [lizardEmbed2] });
    }
    if (randomLizard === 3) {
      const lizardEmbed3 = new EmbedBuilder().setImage(
        "https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif"
      );
      messageCreate.channel.send({ embeds: [lizardEmbed3] });
    }
  }

  pandaCommand(messageCreate: Message) {
    const panda = new EmbedBuilder().setImage(
      "https://media.tenor.com/v0zpv4iRa7IAAAAC/panda-lazy.gif"
    );
    messageCreate.channel.send({ embeds: [panda] });
  }

  fieCommand(messageCreate: Message) {
    const Fie = new EmbedBuilder().setImage(
      "https://media.tenor.com/6tlB3xGf1AoAAAAC/cat-white.gif"
    );
    messageCreate.channel.send({ embeds: [Fie] });
  }

  dotBotCommand(messageCreate: Message) {
    const dotBotCommands: string =
      "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\nType 'E' for Panda\nType 'Fie' for Fie\n";
    messageCreate.channel.send(dotBotCommands);
  }

  smartcastCommand(messageCreate: Message) {
    const viktor: string =
      "https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg";
    messageCreate.channel.send(viktor);
  }

  terminateCommand(messageCreate: Message) {
    const termniator = "issolate, terminate";
    messageCreate.channel.send(termniator);
  }
}
