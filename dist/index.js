// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import { EmbedBuilder } from 'discord.js';
import * as dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const token = process.env.TOKEN;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(token);
// Bonk gif
const bonkEmbed = new EmbedBuilder()
    .setImage('https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif');
// Lizard gifs
const lizardEmbed = new EmbedBuilder()
    .setImage('https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif');
const lizardEmbed2 = new EmbedBuilder()
    .setImage('https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif');
const lizardEmbed3 = new EmbedBuilder()
    .setImage('https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif');
const viktor = 'https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg';
const getBotCommands = 'Type .bot to get a list of commands';
const botCommands = "Type 'bagge' to get a bonk gif\n Type 'wait' to wait 5 seconds\n Type 'lizards' to get a random lizard gif\n";
// Function to wait for 5 secs
function waitFiveSeconds(messageCreate) {
    setTimeout(function () {
        messageCreate.channel.send('5 seconds have passed');
    }, 5000);
}
function randomLizard(messageCreate) {
    const randomLizard = Math.floor(Math.random() * 3) + 1;
    if (randomLizard === 1) {
        messageCreate.channel.send({ embeds: [lizardEmbed] });
    }
    if (randomLizard === 2) {
        messageCreate.channel.send({ embeds: [lizardEmbed2] });
    }
    if (randomLizard === 3) {
        messageCreate.channel.send({ embeds: [lizardEmbed3] });
    }
}
client.on('messageCreate', function (messageCreate) {
    //Send bonk gif when bagge is written  
    if (messageCreate.content.toLocaleLowerCase() === 'bagge') {
        messageCreate.channel.send({ embeds: [bonkEmbed] });
    }
    // Function to wait for 5 secs
    if (messageCreate.content.toLocaleLowerCase() === 'wait') {
        if (messageCreate.author.bot) {
            return;
        }
        messageCreate.channel.send('Waiting for 5 seconds');
        waitFiveSeconds(messageCreate);
    }
    // Send bot commands when .bot is written
    if (messageCreate.content.toLocaleLowerCase() === '.bot') {
        messageCreate.channel.send(botCommands);
    }
    // Random generator to send a random lizard gif when lizards is written
    if (messageCreate.content.toLocaleLowerCase() === 'lizards' || messageCreate.content.toLocaleLowerCase() === 'lizard') {
        randomLizard(messageCreate);
    }
    if (messageCreate.content.toLocaleLowerCase() === 'smartcast') {
        messageCreate.channel.send(viktor);
    }
});
// Random generator to send a random lizard gif when lizards is written
// Link to bonk gif
//https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif
//Error handling
/*
client.on("messageCreate", async (message) => {
  console.log('messageCreate');
  if (message.author.bot) return;
})

*/ 
//# sourceMappingURL=index.js.map