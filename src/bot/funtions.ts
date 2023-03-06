import { Client, Message } from "discord.js";
import { EmbedBuilder } from "discord.js";
import { ClientClass } from "./client.js";
import { VoiceHandlerClass } from "./voice.js";
import { MongoClass } from "./mongo.js";

export function makeBonkCommand(
  client: Client,
  voiceHandler: VoiceHandlerClass
) {
  return (messageCreate: Message) => {
    const bonkEmbed = new EmbedBuilder().setImage(
      "https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif"
    );
    messageCreate.channel.send({ embeds: [bonkEmbed] });
    if (!messageCreate.guildId) {
      // Handle the error
      return;
    }
    const guild = client.guilds.cache.get(messageCreate.guildId);
    voiceHandler.JoinVoiceChannel(
      messageCreate.channelId,
      messageCreate.guildId,
      guild
    );
    voiceHandler.playSound("bonkCartoon.mp3");
    voiceHandler.VoiceDestroyConnection();
  };
}

export function makeRandomLizard(
  client: Client,
  voiceHandler: VoiceHandlerClass
) {
  return (messageCreate: Message) => {
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

    if (!messageCreate.guildId) {
      // Handle the error
      return;
    }
    const guild = client.guilds.cache.get(messageCreate.guildId);

    voiceHandler.JoinVoiceChannel(
      messageCreate.channelId,
      messageCreate.guildId,
      guild
    );
    voiceHandler.playSound("Illuminati.mp3");
    voiceHandler.VoiceDestroyConnection();
  };
}

export function makePandaCommand() {
  return (messageCreate: Message) => {
    const panda = new EmbedBuilder().setImage(
      "https://media.tenor.com/v0zpv4iRa7IAAAAC/panda-lazy.gif"
    );
    messageCreate.channel.send({ embeds: [panda] });
  };
}

export function makeFieCommand() {
  return (messageCreate: Message) => {
    const Fie = new EmbedBuilder().setImage(
      "https://media.tenor.com/6tlB3xGf1AoAAAAC/cat-white.gif"
    );
    messageCreate.channel.send({ embeds: [Fie] });
  };
}

export function makeDotBotCommand() {
  return (messageCreate: Message) => {
    const dotBotCommands: string =
      "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\nType 'E' for Panda\nType 'Fie' for Fie\n";
    messageCreate.channel.send(dotBotCommands);
  };
}

export function makeSmartcastCommand() {
  return (messageCreate: Message) => {
    const viktor: string =
      "https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg";
    messageCreate.channel.send(viktor);
  };
}

// Function to print out the commands that have been used in a server
export function makePrintCommands(mongo: MongoClass) {
  return (messageCreate: Message) => {
    messageCreate.channel.send("The command leaderboard is:");
    agregateCommandsLeaderboard(messageCreate, mongo);
  };
}

async function agregateCommandsLeaderboard(
  messageCreate: Message,
  mongo: MongoClass
) {
  const database = mongo.client.db("discord");
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

export function makeUsernameStatus(mongo: MongoClass) {
  return (messageCreate: Message) => {
    messageCreate.channel.send("The users must used commands are:");
    agregateUsernameLeaderboard(messageCreate, mongo);
  };
}

async function agregateUsernameLeaderboard(
  messageCreate: Message,
  mongo: MongoClass
) {
  const database = mongo.client.db("discord");
  const collectionDb = database.collection("commands");

  const pipeline = [{ $match: { _id: "$name" } }, { $sort: { count: -1 } }];
  const res = collectionDb.aggregate(pipeline);

  for await (const doc of res) {
    messageCreate.channel.send(doc._id + " " + doc.count);
    console.log(doc);
  }
}
