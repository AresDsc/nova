const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [32767] });
const fs = require('fs')
const Discord = require("discord.js")
const clientconfig = require('./config.json');
const { executionAsyncResource } = require('async_hooks');

  
client.commands = new Discord.Collection()

client.on('ready', () => {
client.user.setActivity("nothing.", {type: 'WATCHING' })
})

require("dotenv").config();
client.on("guildMemberAdd", (member) => {
    let guild = client.guilds.cache.get("1009980701497643118");
    let channel = client.channels.cache.get("1009992901813612635");

    if (guild != member.guild) {
        return console.log('Un nouveaux membre est arrivé !')
    }else {

        channel.send({content: `<a:AIconWelcome:986700801634336828> <@!${member.id}> appeared on the server. Welcome to **Nova** !`})
        
    }
})


const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on("messageCreate", async (message) => {
    if(!message.content.startsWith(clientconfig.prefix)) return;

    var args = message.content.slice(clientconfig.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send("An error occurred during the execution of the order.")
    }
});

client.on("ready", async () => {
    console.log("Bot opérationnel !")
})


client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase().includes("http://")) {
message.react("<:EmoteWarning:987025660277039144>");
    }
});

client.login("process.env.TOKEN");