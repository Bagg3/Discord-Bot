import { botHashMap } from "./map.js";
export class Bot {
    // Constructor to create a new rate limiter
    constructor() {
        // These commands make the code crash
        this.botHashMapInstance = new botHashMap();
        this.botHashMapInstance.initBotCommandsMap();
    }
}
// Function to use in send random lizard
/*
  loginClient() {
    const token: string = process.env.TOKEN;

    this.client.once(Events.ClientReady, (c) => {
      console.log(`Ready! Logged in as ${c.user.tag}`);
    });

    this.client.login(token);

    this.client.on("messageCreate", this.onMessageCreate.bind(this));
  }

  onMessageCreate(messageCreate: any): void {
    // Checks if the message is good
    const check = this.checkIfmessageIsgood(messageCreate);
    if (check === 0) {
      return;
    }
    // Rewrite the 7 next lines so they are not hardcoded
    const botCommandsMap = this.botHashMapInstance.getBotCommandsMap();
    const command = botCommandsMap.get(
      messageCreate.content.toLocaleLowerCase()
    );
    if (command) {
      command(messageCreate);
    }
  }
}

*/
/*
  // Function to wait for 5 secs
  waitFiveSeconds(messageCreate: any) {
    messageCreate.channel.send("Waiting for 5 seconds");
    setTimeout(function () {
      messageCreate.channel.send("5 seconds have passed");
    }, 5000);
  }

  // Function to send bot commands
  sendBotCommands(messageCreate: any) {
    if (messageCreate.content.toLocaleLowerCase() === "bagge") {
      Bot.bonkCommand(messageCreate);
    }

    // Send a Panda when E is written
    if (messageCreate.content.toLocaleLowerCase() === "e") {
      Bot.pandaCommand(messageCreate);
    }
    // Send bot commands when .bot is written
    if (messageCreate.content.toLocaleLowerCase() === ".bot") {
      Bot.dotBotCommand(messageCreate);
    }

    // Random generator to send a random lizard gif when lizards is written
    if (messageCreate.content.toLocaleLowerCase() === "ea") {
      Bot.randomLizard(messageCreate);
    }

    if (messageCreate.content.toLocaleLowerCase() === "fie") {
      Bot.fieCommand(messageCreate);
    }

    // Sends a link to a viktor picture when smartcast is written
    if (messageCreate.content.toLocaleLowerCase() === "smartcast") {
      Bot.smartcastCommand(messageCreate);
    }
  }
  */
//# sourceMappingURL=bot.js.map