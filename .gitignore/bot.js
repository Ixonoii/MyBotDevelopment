// CONFIGURATION

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var prefix = "-";
client.login(process.env.BotToken)

function emoji (id) {
    return client.emojis.get(id).toString();
}

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

client.on('message', message => {
    var Success = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle( emoji("689538521161138177") + message.author.username + ", check your DMs!")
    var HelpEmbed = new Discord.RichEmbed()
    .setColor("0x38ee0e")
    .setTitle("Hey " + message.author.username + "! Here are some information that can help you!")
    .setDescription("**• If you want to invite the bot on your server, [click here!](https://discordapp.com/oauth2/authorize?client_id=689515456771391488&scope=bot&permissions=8)\n • To join our support server, [click here!](https://discord.gg/HyHffQY) \n • To see the list of all commands, say ``" + prefix + "cmds``.**")
    if(message.content === prefix + "help"){
        message.channel.send(Success)
        message.channel.send(HelpEmbed)
    }
})

// BAN COMMAND

client.on("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + 'kick'){
        var NotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Kick Members``.")
        var NotMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var CantBan = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't ban this user.")
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(NotAllowed)
        let member = message.mentions.members.first()
        let banreason = args.slice(1).join(" ")
        if(!member) return message.channel.send(NotMemberMentionned)
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantBan)
        if(!member.kickable) return message.channel.send(CantBan)
        var UserBannedNoReason = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been banned from the server: ``No reason given.``")
        var BanNotification1 = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle("You've been banned from " + message.guild.name + ".")
        .setDescription("Reason: ``No reason given.``")
        var GuildNotification1 = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been banned.")
        .addField("Ban information:", "Server: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Moderator: **" + message.author.tag + "** (``" + message.author.id + "``) \n User banned: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **No reason given.**")
        if(!reason) return message.channel.send(UserBannedNoReason)
        if(!reason) return message.guild.ban(member, {days: 7, reason: "No reason given. [Banned by " + message.author.tag + "]"})
        if(!reason) return client.channels.get("689514976750338067").send(GuildNotification1)
        if(!reason) return member.send(BanNotification1)
        var UserBannedWithReason = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been banned from the server: ``" + banreason + "``")
        .setTimestamp()
        message.guild.ban(member, {days: 7, reason: banreason})
        message.channel.send(UserBannedWithReason)
        var BanNotification2 = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle("You've been banned from " + message.guild.name + ".")
        .setDescription("Reason: ``" + banreason + "``")
        .setTimestamp()
        var GuildNotification2 = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been banned.")
        .setThumbnail(message.guild.iconURL)
        .addField("Ban information:", "Server: **" + guild.name + "** (``" + guild.id + "``) \n Members: **" + guild.memberCount + "** \n Moderator: **" + message.author.tag + "** (``" + message.author.id + "``) \n User banned: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + banreason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(GuildNotification2)
        member.send(BanNotification2)
        message.delete()
    }
})
