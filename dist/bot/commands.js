import { EmbedBuilder } from "discord.js";
import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import { terminateCommand } from "./funtions.js";
export class Commands {
    constructor(c) {
        this.c = c;
        this.voiceHandler = new VoiceHandlerClass();
        this.botCommandsMap = new Map();
        this.mongo = new MongoClass();
        this.botCommandsMap.set("bagge", this.bonkCommand.bind(this));
        this.botCommandsMap.set("ea", this.randomLizard.bind(this));
        this.botCommandsMap.set("smartcast", this.smartcastCommand);
        this.botCommandsMap.set("e", this.pandaCommand.bind(this));
        this.botCommandsMap.set("fie", this.fieCommand);
        this.botCommandsMap.set(".bot", this.dotBotCommand);
        this.botCommandsMap.set("terminator", terminateCommand);
        this.botCommandsMap.set("!leaderboard", this.printCommands.bind(this));
    }
    // Function to return the map
    getBotCommandsMap() {
        return this.botCommandsMap;
    }
    bonkCommand(messageCreate) {
        const bonkEmbed = new EmbedBuilder().setImage("https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif");
        messageCreate.channel.send({ embeds: [bonkEmbed] });
        const guild = this.c.guilds.cache.get(messageCreate.guildId);
        this.voiceHandler.JoinVoiceChannel(messageCreate.channelId, messageCreate.guildId, guild);
        this.voiceHandler.playSound("bonkCartoon.mp3");
        this.voiceHandler.VoiceDestroyConnection();
    }
    randomLizard(messageCreate) {
        const randomLizard = Math.floor(Math.random() * 3) + 1;
        if (randomLizard === 1) {
            const lizardEmbed = new EmbedBuilder().setImage("https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif");
            messageCreate.channel.send({ embeds: [lizardEmbed] });
        }
        if (randomLizard === 2) {
            const lizardEmbed2 = new EmbedBuilder().setImage("https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif");
            messageCreate.channel.send({ embeds: [lizardEmbed2] });
        }
        if (randomLizard === 3) {
            const lizardEmbed3 = new EmbedBuilder().setImage("https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif");
            messageCreate.channel.send({ embeds: [lizardEmbed3] });
        }
        const guild = this.c.guilds.cache.get(messageCreate.guildId);
        this.voiceHandler.JoinVoiceChannel(messageCreate.channelId, messageCreate.guildId, guild);
        this.voiceHandler.playSound("Illuminati.mp3");
        this.voiceHandler.VoiceDestroyConnection();
    }
    pandaCommand(messageCreate) {
        const panda = new EmbedBuilder().setImage("https://media.tenor.com/v0zpv4iRa7IAAAAC/panda-lazy.gif");
        messageCreate.channel.send({ embeds: [panda] });
        const guild = this.c.guilds.cache.get(messageCreate.guildId);
        this.voiceHandler.JoinVoiceChannel(messageCreate.channelId, messageCreate.guildId, guild);
        this.voiceHandler.playSound("pandaPanda.mp3");
        this.voiceHandler.VoiceDestroyConnection();
    }
    fieCommand(messageCreate) {
        const Fie = new EmbedBuilder().setImage("https://media.tenor.com/6tlB3xGf1AoAAAAC/cat-white.gif");
        messageCreate.channel.send({ embeds: [Fie] });
    }
    dotBotCommand(messageCreate) {
        const dotBotCommands = "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\nType 'E' for Panda\nType 'Fie' for Fie\n";
        messageCreate.channel.send(dotBotCommands);
    }
    smartcastCommand(messageCreate) {
        const viktor = "https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg";
        messageCreate.channel.send(viktor);
    }
    //Function to agregate the commands in the database
    async agregateCommands(messageCreate) {
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
    // Function to print out the commands that have been used in a server
    async printCommands(messageCreate) {
        if (messageCreate.content.toLocaleLowerCase() === "!leaderboard") {
            messageCreate.channel.send("The command leaderboard is:");
            this.agregateCommands(messageCreate);
        }
    }
}
//# sourceMappingURL=commands.js.map