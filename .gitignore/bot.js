// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity( emoji("689538521161138177") + "Bot ready to be used!", {type: "PLAYING"})
})

// BOT ADDED & REMOVED

client.on("guildCreate", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("MyBot has been added on a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

client.on("guildDelete", guild =>{
    var BotAddedEmbed = new Discord.RichEmbed()
    .setColor("0xf35353")
    .setTitle("MyBot has been removed from a server.")
    .setDescription(`I am now on ${client.guilds.size} servers !`)
    .setThumbnail(guild.iconURL)
    .addField("Information about the server:", "Name: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Owner: **" + guild.owner + "** (``" + guild.ownerID + "``)")
    .setTimestamp()
    client.channels.get("689513780870381568").send(BotAddedEmbed)
})

// HELP COMMAND

client.on('message', message => {
    var Success = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle( emoji("689538521161138177") + message.author.username + ", check your DMs!")
    var HelpEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("Hey " + message.author.username + "! Here are some information that can help you:")
    .setDescription("**• If you want to invite the bot on your server, [click here!](https://discordapp.com/oauth2/authorize?client_id=689515456771391488&scope=bot&permissions=8)\n • To join our support server, [click here!](https://discord.gg/HyHffQY) \n • To see the list of all commands, say ``" + prefix + "cmds``.**")
    if(message.content === prefix + "help"){
        message.channel.send(Success)
        message.channel.send(HelpEmbed)
    }
})

// BAN COMMAND

// BAN COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var BanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Kick Members``.")
        var NotBanMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoBanReasonEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a reason.")
        var CantBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't ban this user.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(BanNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(NotBanMemberMentionned)
        if (!reason) return message.channel.send(NoBanReasonEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantBan)
        if (!member.bannable) return message.channel.send(CantBan)
        var SupportServerBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("A user has been banned with MyBot.")
        .setThumbnail(member.guild.iconURL)
        .addField("Information about the ban:", "Server: **" + member.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n Moderator: **" + message.author.username + "** (``" + message.author.id + "``) \n User banned: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + reason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerBan)
        member.ban({days: 7})
        message.delete()
        var BanSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been banned from the server: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(BanSuccess)
    }
})
