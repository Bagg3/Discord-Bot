// Import voice dependencies from discord/voice
import {
  VoiceConnection,
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  entersState,
  VoiceConnectionStatus,
  AudioPlayer,
} from "@discordjs/voice";

export class VoiceHandlerClass {
  connection?: VoiceConnection;
  audioPlayer?: AudioPlayer;

  constructor() {}

  // Function to join a voice channel
  public JoinVoiceChannel(channelID: string, guildID: string, guilds: any) {
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
  }

  playSound(soundRef: string) {
    this.audioPlayer = createAudioPlayer();

    if (!this.connection) throw new Error("No connection found");
    const subscription = this.connection.subscribe(this.audioPlayer);
    const sound = createAudioResource(soundRef);

    this.audioPlayer.play(sound);

    this.audioPlayer.on(AudioPlayerStatus.Playing, () => {});
  }

  VoiceDestroyConnection() {
    if (!this.audioPlayer) throw new Error("No connection found");
    this.audioPlayer.on("stateChange" as any, (oldState, newState) => {
      if (newState.status === AudioPlayerStatus.Idle) {
        if (!this.connection) throw new Error("No connection found");
        this.connection.destroy();
      }
    });
  }
}
