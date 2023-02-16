import { Ressources } from './ress.js';
export class Bot {
    // Function to use in send random lizard
    static randomLizard(messageCreate) {
        const randomLizard = Math.floor(Math.random() * 3) + 1;
        if (randomLizard === 1) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed] });
        }
        if (randomLizard === 2) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed2] });
        }
        if (randomLizard === 3) {
            messageCreate.channel.send({ embeds: [Ressources.lizardEmbed3] });
        }
    }
    // Function to wait for 5 secs
    static waitFiveSeconds(messageCreate) {
        setTimeout(function () {
            messageCreate.channel.send('5 seconds have passed');
        }, 5000);
    }
}
//# sourceMappingURL=bot.js.map