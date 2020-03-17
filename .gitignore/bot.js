// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

// BOT ADDED & REMOVED

client.on("guildCreate", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("#00ff3c")
    .setTitle("MyBot has been added on a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setImage(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

client.on("guildDelete", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("MyBot has been removed from a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setImage(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})
