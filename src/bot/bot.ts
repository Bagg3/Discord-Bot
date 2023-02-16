import { Client, Events, GatewayIntentBits, Guild } from "discord.js";
import { Ressources } from './ress.js';
import { RateLimiter } from 'discord.js-rate-limiter'
import * as dotenv from 'dotenv';


export class Bot {
// Function to use in send random lizard
    public static randomLizard(messageCreate: any) {
        const randomLizard = Math.floor(Math.random() * 3) + 1;
        if(randomLizard === 1) {
        messageCreate.channel.send({ embeds: [Ressources.lizardEmbed] });
        }
        if(randomLizard === 2) {
        messageCreate.channel.send({ embeds: [Ressources.lizardEmbed2] });
        }
        if(randomLizard === 3) {
        messageCreate.channel.send({ embeds: [Ressources.lizardEmbed3] });
        }
    }
    
// Function to wait for 5 secs
    public static waitFiveSeconds(messageCreate: any) {
        setTimeout(function() {
          messageCreate.channel.send('5 seconds have passed');
        }, 5000);
      }
      
}