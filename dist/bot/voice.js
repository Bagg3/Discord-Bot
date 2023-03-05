// Import voice dependencies from discord/voice
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus, } from "@discordjs/voice";
export class VoiceHandlerClass {
    constructor() { }
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
    playSound(soundRef) {
        this.audioPlayer = createAudioPlayer();
        if (!this.connection)
            throw new Error("No connection found");
        const subscription = this.connection.subscribe(this.audioPlayer);
        const sound = createAudioResource(soundRef);
        this.audioPlayer.play(sound);
        this.audioPlayer.on(AudioPlayerStatus.Playing, () => {
            console.log("The audio player has started playing!");
        });
    }
    makeAudioPlayer() {
        this.audioPlayer = createAudioPlayer();
    }
    VoiceDestroyConnection() {
        if (!this.audioPlayer)
            throw new Error("No connection found");
        this.audioPlayer.on("stateChange", (oldState, newState) => {
            if (newState.status === AudioPlayerStatus.Idle) {
                if (!this.connection)
                    throw new Error("No connection found");
                this.connection.destroy();
            }
        });
    }
}
//# sourceMappingURL=voice.js.map