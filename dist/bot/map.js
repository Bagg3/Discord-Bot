import { EmbedBuilder } from "discord.js";
export function newCommands(message) {
    const commands = new Map();
    commands.set("bagge", bonkCommand);
    commands.set("ea", randomLizard);
    commands.set("smartcast", smartcastCommand);
    commands.set("e", pandaCommand);
    commands.set("fie", fieCommand);
    commands.set(".bot", dotBotCommand);
    const command = commands.get(message.content.toLocaleLowerCase());
    if (command) {
        command(message);
    }
}
function randomLizard(messageCreate) {
    const randomLizard = Math.floor(Math.random() * 3) + 1;
    if (randomLizard === 1) {
        const lizardEmbed = new EmbedBuilder().setImage("https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif");
        messageCreate.channel.send(lizardEmbed);
    }
    if (randomLizard === 2) {
        const lizardEmbed2 = new EmbedBuilder().setImage("https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif");
        messageCreate.channel.send(lizardEmbed2);
    }
    if (randomLizard === 3) {
        const lizardEmbed3 = new EmbedBuilder().setImage("https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif");
        messageCreate.channel.send(lizardEmbed3);
    }
}
function bonkCommand(messageCreate) {
    const bonkEmbed = new EmbedBuilder().setImage("https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif");
    messageCreate.channel.send(bonkEmbed);
}
function pandaCommand(messageCreate) {
    const panda = new EmbedBuilder().setImage("https://media.tenor.com/v0zpv4iRa7IAAAAC/panda-lazy.gif");
    messageCreate.channel.send(panda);
}
function dotBotCommand(messageCreate) {
    const dotBotCommands = "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\nType 'E' for E\nType 'Fie' for Fie\n";
    messageCreate.channel.send(dotBotCommands);
}
function fieCommand(messageCreate) {
    const Fie = new EmbedBuilder().setImage("https://media.tenor.com/6tlB3xGf1AoAAAAC/cat-white.gif");
    messageCreate.channel.send(Fie);
}
function smartcastCommand(messageCreate) {
    const viktor = "https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg";
    messageCreate.channel.send(viktor);
}
export class botHashMap {
    constructor() {
        //this.botMapHandler = new Bot();
        this.botCommandsMap = new Map();
    }
    initBotCommandsMap() {
        this.botCommandsMap.set("bagge", this.bonkCommand);
        this.botCommandsMap.set("ea", this.randomLizard);
        this.botCommandsMap.set("smartcast", this.smartcastCommand);
        this.botCommandsMap.set("e", this.pandaCommand);
        this.botCommandsMap.set("fie", this.fieCommand);
        this.botCommandsMap.set(".bot", this.dotBotCommand);
    }
    // Function to return the map
    getBotCommandsMap() {
        return this.botCommandsMap;
    }
    randomLizard(messageCreate) {
        const randomLizard = Math.floor(Math.random() * 3) + 1;
        if (randomLizard === 1) {
            const lizardEmbed = new EmbedBuilder().setImage("https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif");
            messageCreate.channel.send(lizardEmbed);
        }
        if (randomLizard === 2) {
            const lizardEmbed2 = new EmbedBuilder().setImage("https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif");
            messageCreate.channel.send(lizardEmbed2);
        }
        if (randomLizard === 3) {
            const lizardEmbed3 = new EmbedBuilder().setImage("https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif");
            messageCreate.channel.send(lizardEmbed3);
        }
    }
    bonkCommand(messageCreate) {
        const bonkEmbed = new EmbedBuilder().setImage("https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif");
        messageCreate.channel.send(bonkEmbed);
    }
    pandaCommand(messageCreate) {
        const panda = new EmbedBuilder().setImage("https://media.tenor.com/v0zpv4iRa7IAAAAC/panda-lazy.gif");
        messageCreate.channel.send(panda);
    }
    dotBotCommand(messageCreate) {
        const dotBotCommands = "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\nType 'E' for E\nType 'Fie' for Fie\n";
        messageCreate.channel.send(dotBotCommands);
    }
    fieCommand(messageCreate) {
        const Fie = new EmbedBuilder().setImage("https://media.tenor.com/6tlB3xGf1AoAAAAC/cat-white.gif");
        messageCreate.channel.send(Fie);
    }
    smartcastCommand(messageCreate) {
        const viktor = "https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg";
        messageCreate.channel.send(viktor);
    }
}
//# sourceMappingURL=map.js.map