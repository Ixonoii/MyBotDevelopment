// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

// BOT ADDED & REMOVED

client.on("guildCreate", guild => {
    client.channels.get("689513780870381568").send("MyBot has been added on a server! (Testing)")
})
