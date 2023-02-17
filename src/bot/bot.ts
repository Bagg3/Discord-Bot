import { Client, Events, GatewayIntentBits, Guild } from "discord.js";
import { Ressources } from "./ress.js";
import { RateLimiter } from "discord.js-rate-limiter";
import * as dotenv from "dotenv";

export class Bot {
  // Function to use in send random lizard
  public static randomLizard(messageCreate: any) {
    const randomLizard = Math.floor(Math.random() * 3) + 1;
    if (randomLizard === 1) {
      messageCreate.channel.send({ embeds: [Ressources.lizardEmbed] });
    }
    if (randomLizard === 2) {
      messageCreate.channel.send({ embeds: [Ressources.lizardEmbed2] });
    }
    if (randomLizard === 3) {
      messageCreate.channel.send({ embeds: [Ressources.lizardEmbed3] });
    }
  }

  // Function to wait for 5 secs
  public static waitFiveSeconds(messageCreate: any) {
    setTimeout(function () {
      messageCreate.channel.send("5 seconds have passed");
    }, 5000);
  }
  // Function to send bot commands
  public static sendBotCommands(messageCreate: any) {
    if (messageCreate.content.toLocaleLowerCase() === "bagge") {
      messageCreate.channel.send({ embeds: [Ressources.bonkEmbed] });
      //player.play(ressources);
    }

    // Function to wait for 5 secs
    if (messageCreate.content.toLocaleLowerCase() === "wait") {
      messageCreate.channel.send("Waiting for 5 seconds");
      Bot.waitFiveSeconds(messageCreate);
    }
    // Send bot commands when .bot is written
    if (messageCreate.content.toLocaleLowerCase() === ".bot") {
      messageCreate.channel.send(Ressources.botCommands);
    }

    // Random generator to send a random lizard gif when lizards is written
    if (messageCreate.content.toLocaleLowerCase() === "ea") {
      Bot.randomLizard(messageCreate);
    }

    // Sends a link to a viktor picture when smartcast is written
    if (messageCreate.content.toLocaleLowerCase() === "smartcast") {
      messageCreate.channel.send(Ressources.viktor);
    }
  }
}
