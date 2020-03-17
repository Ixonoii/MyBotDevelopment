// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

// BOT ADDED & REMOVED

client.on("guildCreate", guild =>{
    let BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0xf35353")
    .setTitle("MyBot has been added on a server.")
    .setDescription(`MyBot is now on ${client.guilds.size} servers.`)
    .addField("**Server**", guild.name + "(``" + guild.id + "``)", true)
    .addField("**Owner**", guild.owner + "(``" + guild.ownerID + "``)", true)
    .addField("**Members**", guild.memberCount, true)
    .setThumbnail(guild.iconURL)
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})
