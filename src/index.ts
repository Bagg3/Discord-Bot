// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";

import * as dotenv from 'dotenv';

const result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

const token: string = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent,] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

//register message event listener and reply to message
client.on('messageCreate', 
function (messageCreate){
    if(messageCreate.content.toLocaleLowerCase()==='bagge') 
    messageCreate.channel.send('Lizards'); //reply hello word message with senders name
});

client.on("messageCreate", async (message) => {
  console.log('messageCreate');
  if (message.author.bot) return;
})