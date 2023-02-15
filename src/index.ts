// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits, Guild } from "discord.js";

import { EmbedBuilder } from 'discord.js';
import { TIMEOUT } from "dns";

import * as dotenv from 'dotenv';

const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

const token: string = process.env.TOKEN;



// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

// Bonk gif
const exampleEmbed = new EmbedBuilder()
	.setImage('https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif');



//Send bonk gif when bagge is written
client.on('messageCreate', 
function (messageCreate){
    if(messageCreate.content.toLocaleLowerCase()==='bagge') 
    messageCreate.channel.send({ embeds: [exampleEmbed] });
});


client.on('messageCreate',
function (messageCreate){
    if(messageCreate.content.toLocaleLowerCase()==='wait') 
    messageCreate.channel.send('Waiting for 5 seconds');
    //setTimeout(5000);
    messageCreate.channel.send('5 seconds have passed');   
    //reply hello word message with senders name
});

// wait for 5 seconds
//setTimeout(5000);



// Link to bonk gif
//https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif

//Error handling
/*
client.on("messageCreate", async (message) => {
  console.log('messageCreate');
  if (message.author.bot) return;
})

*/