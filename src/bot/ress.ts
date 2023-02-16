// Class to save the ressources of the bot, like the embeds and links to the gifs

import { EmbedBuilder } from 'discord.js';

export class Ressources {

    // Bonk gif
    public static bonkEmbed = new EmbedBuilder()
        .setImage('https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif');
    
    // Lizard gifs
    public static lizardEmbed = new EmbedBuilder()
        .setImage('https://media.tenor.com/xTyVDYFg_fsAAAAC/lizard-hehe.gif');
    
    public static lizardEmbed2 = new EmbedBuilder()
        .setImage('https://media.tenor.com/msH3gTNQpwsAAAAd/lizards-chair-funny-animals.gif');
    
    public static lizardEmbed3 = new EmbedBuilder()
        .setImage('https://media.tenor.com/TGUcc-bbevAAAAAC/lizard-cute.gif');
    
    // Viktor
    public static viktor: string = 'https://img-9gag-fun.9cache.com/photo/a91WvPm_460s.jpg';
    
    // Bot commands
    public static getBotCommands: string = 'Type .bot to get a list of commands';
    public static botCommands: string = "Type 'bagge' to get a bonk gif\nType 'EA' to get a random lizard gif\nType 'smartcast' for glorious evolution\n";

}