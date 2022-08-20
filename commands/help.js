const Discord = require('discord.js')
require("dotenv").config();


module.exports = {
    name: 'help',
    execute: async (message) => {
        await message.delete();
        const embed = new Discord.MessageEmbed()
                        .setColor("#ffffff")
                        .setThumbnail("https://media.discordapp.net/attachments/1010263834277200023/1010263862324494378/IMG_1165.gif")
                        .setDescription("🇺🇲 **Nova** brings together several projects on Discord into one: **itself**. Moreover, you can also add your project to Nova by **becoming a partner**! Because together, it's better. **Nova, better communities**. \n\n🇫🇷 **Nova** rassemble plusieurs projets sur Discord en un seul : **lui-même**. De plus, vous pouvez vous aussi ajouter votre projet à Nova en **devenant partenaire** ! Parce qu'ensemble, c'est mieux. **Nova, meilleurs communautés**.")
       message.channel.send({embeds: [embed] })
    }
}