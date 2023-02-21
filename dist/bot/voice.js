// Import voice dependencies from discord/voice
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, entersState, VoiceConnectionStatus, } from "@discordjs/voice";
import { join } from "node:path";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class voiceHandlerClass {
    // Make a client object from the bot class
    constructor(client) {
        this.client = client;
    }
    // Function to join a voice channel
    JoinVoiceChannel(channelID, guildID) {
        const channelBaggeServer = "1075453469168766989";
        const guildBaggeServer = "1075453467742711899";
        const guild = this.client.client.guilds.cache.get(guildBaggeServer);
        this.connection = joinVoiceChannel({
            channelId: channelBaggeServer,
            guildId: guildBaggeServer,
            adapterCreator: guild.voiceAdapterCreator,
        });
        this.connection.on(VoiceConnectionStatus.Ready, () => {
            console.log("The connection has entered the Ready state - ready to play audio!");
        });
        this.connection.setSpeaking(true);
        /*  try {
          await entersState(this.connection, VoiceConnectionStatus.Ready, 20_000);
          console.log(
            "The connection has entered the Ready state - ready to play audio!"
          );
        } catch (error) {
          console.error(error);
        }
        */
    }
    VoicedestroyConnection() {
        this.connection.destroy();
    }
    //Function to make a audio player
    makeAudioPlayer() {
        this.audioPlayer = createAudioPlayer();
    }
    async playSound() {
        this.makeAudioPlayer();
        //const bonkSound = createAudioResource("Bonk.mp3");
        //read in the file bonk.dca, fill out dirname
        const bonkSound = createAudioResource(join(__dirname, "Bonk.mp3"));
        this.audioPlayer.play(bonkSound);
        const subscription = this.connection.subscribe(this.audioPlayer);
        this.audioPlayer.on(AudioPlayerStatus.Playing, () => {
            console.log("The audio player has started playing!");
        });
        //@ts-ignore
        this.audioPlayer.on("error", (error) => {
            console.error(
            //@ts-ignore
            `Error: ${error.message} with resource ${error.resource.metadata.title}`);
            //@ts-ignore
            this.audioPlayer.play(getNextResource());
        });
        try {
            await entersState(this.connection, VoiceConnectionStatus.Ready, 20000);
            console.log("The connection has entered the Ready state - ready to play audio!");
            if (subscription) {
                // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
                setTimeout(() => subscription.unsubscribe(), 5000);
            }
        }
        catch (error) {
            console.error(error);
        }
        //this.connection.destroy();
    }
}
/*
  // Function to play a sound
  playSound() {
    this.makeAudioPlayer();
    const bonkSound = createAudioResource("./Bonk.mp3");
    this.audioPlayer.play(bonkSound);

    const subscription = this.connection.subscribe(this.audioPlayer);

    if (subscription) {
      // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
      setTimeout(() => subscription.unsubscribe(), 5_000);
    }

    this.audioPlayer.on(AudioPlayerStatus.Playing, () => {
      console.log("The audio player has started playing!");
    });
  }
*/
//# sourceMappingURL=voice.js.map