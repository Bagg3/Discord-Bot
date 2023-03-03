import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import { terminateCommand, makeRandomLizard, fieCommand, dotBotCommand, smartcastCommand, makePandaCommand, printCommands, makeBonkCommand, } from "./funtions.js";
export class Commands {
    constructor(c) {
        this.c = c;
        this.voiceHandler = new VoiceHandlerClass();
        this.botCommandsMap = new Map();
        this.mongo = new MongoClass();
        this.botCommandsMap.set("bagge", makeBonkCommand(c, this.voiceHandler));
        this.botCommandsMap.set("ea", makeRandomLizard(c, this.voiceHandler));
        this.botCommandsMap.set("smartcast", smartcastCommand);
        this.botCommandsMap.set("e", makePandaCommand());
        this.botCommandsMap.set("fie", fieCommand);
        this.botCommandsMap.set(".bot", dotBotCommand);
        this.botCommandsMap.set("terminator", terminateCommand);
        this.botCommandsMap.set("!leaderboard", printCommands.bind(this));
    }
    // Function to return the map
    getBotCommandsMap() {
        return this.botCommandsMap;
    }
}
//# sourceMappingURL=commands.js.map