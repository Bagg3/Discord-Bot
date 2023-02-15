"use strict";
exports.__esModule = true;
// Require the necessary discord.js classes
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    throw result.error;
}
var token = process.env.TOKEN;
// Create a new client instance
var client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(discord_js_1.Events.ClientReady, function (c) {
    console.log("Ready! Logged in as ".concat(c.user.tag));
});
// Log in to Discord with your client's token
client.login(token);
/*
client.on('message',
function (messages){
    if(messages.content.toLocaleLowerCase()==='bagge')
    messages.channel.send('Lizards'); //reply hello word message with senders name
})
*/
client.on("message", function (msg) {
    if (msg.content === "bagge") {
        msg.reply("Lizards");
    }
});
client.on("message", function (msg) {
    if (msg.content === "Bagge") {
        msg.reply("Lizards");
    }
});
