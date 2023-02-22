// Import voice dependencies from discord/voice
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus, } from "@discordjs/voice";
// Import discord.js dependencies
//import { clientClass } from "./client.js";
export class voiceHandlerClass {
    // Make a client object from the bot class
    constructor() {
        //this.client = client;
    }
    // Function to join a voice channel
    JoinVoiceChannel(channelID, guildID, guilds) {
        const channelBaggeServer = "1075453469168766989";
        const channelKal = "377176294770606091";
        if (channelID === "1075453469168766988") {
            channelID = channelBaggeServer;
        }
        if (channelID === "331120671545360385") {
            channelID = channelKal;
        }
        const guild = guilds;
        this.connection = joinVoiceChannel({
            channelId: channelID,
            guildId: guildID,
            adapterCreator: guild.voiceAdapterCreator,
        });
        this.connection.on(VoiceConnectionStatus.Ready, () => {
            console.log("The connection has entered the Ready state - ready to play audio!");
        });
    }
    playSound() {
        this.audioPlayer = createAudioPlayer();
        const subscription = this.connection.subscribe(this.audioPlayer);
        //const bonkSound = createAudioResource("Bonk.mp3");
        const bonkSound = createAudioResource("bonkCartoon.mp3");
        bonkSound.volume?.setVolume(2);
        this.audioPlayer.play(bonkSound);
        this.audioPlayer.on(AudioPlayerStatus.Playing, () => {
            console.log("The audio player has started playing!");
        });
        if (subscription) {
            // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
            setTimeout(() => subscription.unsubscribe(), 5000);
            console.log("Unsubscribed after 5 seconds");
        }
    }
    makeAudioPlayer() {
        this.audioPlayer = createAudioPlayer();
    }
    VoicedestroyConnection() {
        this.audioPlayer.on("stateChange", (oldState, newState) => {
            if (newState.status === AudioPlayerStatus.Idle) {
                this.connection.destroy();
            }
        });
    }
}
//# sourceMappingURL=voice.js.map