// Import voice dependencies from discord/voice
import { joinVoiceChannel, createAudioResource, getVoiceConnection, } from "@discordjs/voice";
export class voiceHandlerClass {
    // Make a client object from the bot class
    constructor(client) {
        this.channel = getVoiceConnection("331120671545360385");
        this.bonkSound = createAudioResource("./Bonk.mp3");
        this.client = client;
    }
    // Join the voice channel function
    joinVoiceChannel(channel) {
        // Join the voice channel
        const connection = joinVoiceChannel({
            channelId: "331120671545360385",
            guildId: "377176294770606091",
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    }
}
/*
const botCommandsMap = this.botCommands.getBotCommandsMap();
const command = botCommandsMap.get(messageCreate.content.toLocaleLowerCase());
if (command) {
  command(messageCreate);
}

*/
//# sourceMappingURL=voice.js.map