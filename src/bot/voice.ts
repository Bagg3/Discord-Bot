// Import voice dependencies from discord/voice
import {
  VoiceConnection,
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  entersState,
  VoiceConnectionStatus,
  StreamType,
  getVoiceConnection,
  DiscordGatewayAdapterCreator,
  AudioPlayer,
} from "@discordjs/voice";

// Import discord.js dependencies
import { clientClass } from "./client.js";

export class voiceHandlerClass {
  client: clientClass;
  connection: VoiceConnection;
  audioPlayer: AudioPlayer;

  // Make a client object from the bot class
  constructor(client: clientClass) {
    this.client = client;
  }

  // Function to join a voice channel
  async JoinVoiceChannel(channelID: string, guildID: string) {
    const channelBaggeServer = "1075453469168766989";
    const guildBaggeServer = "1075453467742711899";
    const guild = this.client.client.guilds.cache.get(guildBaggeServer);

    const temp = joinVoiceChannel({
      channelId: channelBaggeServer,
      guildId: guildBaggeServer,
      adapterCreator: guild.voiceAdapterCreator,
    });
    this.connection = temp;

    console.log("Trying to join");

    try {
      await entersState(this.connection, VoiceConnectionStatus.Ready, 20_000);
      console.log(
        "The connection has entered the Ready state - ready to play audio!"
      );
    } catch (error) {
      console.error(error);
    }
  }

  //Function to make a audio player
  makeAudioPlayer() {
    this.audioPlayer = createAudioPlayer();
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

  async playSound() {
    this.makeAudioPlayer();
    const bonkSound = createAudioResource(
      "C:Usersandrecode\typescriptproject1Bonk.mp3"
    );
    this.audioPlayer.play(bonkSound);

    const subscription = this.connection.subscribe(this.audioPlayer);

    this.audioPlayer.on(AudioPlayerStatus.Playing, () => {
      console.log("The audio player has started playing!");
    });

    try {
      await entersState(this.connection, VoiceConnectionStatus.Ready, 20_000);
      console.log(
        "The connection has entered the Ready state - ready to play audio!"
      );

      if (subscription) {
        // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
        setTimeout(() => subscription.unsubscribe(), 5_000);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
