const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "Supprime des messages",
    execute: async (message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send("Vous n'avez pas les permissions suffisantes");
        const amount = parseInt(args[0]) + 1;

        if(isNaN(amount)) {
            return message.reply("You must enter a number between 1 and 99.");
        }
        else if (amount <= 1 || amount > 250) {
            return message.reply("This number is not valid.");
        }
        message.channel.bulkDelete(amount)

const supp = new Discord.MessageEmbed()
  .setTitle("<:toolValid:1010642837911646319> A clear has just been made !")
  .setColor("#000000")
  .setDescription("**" + amount + "** messages were deleted.")

  message.channel.send({ embeds: [supp] })
    }
};