import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import { makeRandomLizard, makeFieCommand, makeDotBotCommand, makeSmartcastCommand, makePandaCommand, makePrintCommands, makeBonkCommand, makeUsernameStatus, } from "./funtions.js";
export class Commands {
    constructor(client) {
        this.voiceHandler = new VoiceHandlerClass();
        this.mongo = new MongoClass();
        this.botCommandsMap = new Map([
            ["bagge", makeBonkCommand(client, this.voiceHandler)],
            ["ea", makeRandomLizard(client, this.voiceHandler)],
            ["smartcast", makeSmartcastCommand()],
            ["e", makePandaCommand()],
            ["fie", makeFieCommand()],
            [".bot", makeDotBotCommand()],
            ["!leaderboard", makePrintCommands(this.mongo)],
            ["!me", makeUsernameStatus(this.mongo)],
        ]);
    }
    // Function to return the map
    getBotCommandsMap() {
        return this.botCommandsMap;
    }
}
//# sourceMappingURL=commands.js.map