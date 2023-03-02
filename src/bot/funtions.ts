import { Client, Message } from "discord.js";

export function terminateCommand(messageCreate: Message) {
  const termniator = "issolate, terminate";
  messageCreate.channel.send(termniator);
}
