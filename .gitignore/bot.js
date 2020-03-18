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
        message.author.send(HelpEmbed)
    }
})

// BAN COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'ban') {
        var BanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Ban Members``.")
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
        .setTitle("Someone has been banned with MyBot.")
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

// BAN COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        var BanNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Kick Members``.")
        var NotBanMemberMentionned = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoBanReasonEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a reason.")
        var CantKick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't kick this user.")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(BanNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send(NotBanMemberMentionned)
        if (!reason) return message.channel.send(NoBanReasonEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(CantBan)
        if (!member.kickable) return message.channel.send(CantKick)
        var SupportServerKick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle("Someone has been kicked with MyBot.")
        .setThumbnail(member.guild.iconURL)
        .addField("Information about the kick:", "Server: **" + member.guild.name + "** (``" + message.guild.id + "``) \n Members: **" + message.guild.memberCount + "** \n Owner: **<@" + message.guild.ownerID + ">** (``" + message.guild.ownerID + "``) \n Moderator: **" + message.author.username + "** (``" + message.author.id + "``) \n User kicked: **" + member.displayName + "** (``" + member.id + "``) \n Reason: **" + reason + "**")
        .setTimestamp()
        client.channels.get("689514976750338067").send(SupportServerKick)
        member.ban({days: 7})
        message.delete()
        var KickSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + " has been kicked from the server: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(KickSuccess)
    }
})

// PURGE COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        var PurgeNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Messages``.")
        var NoNumberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge.")
        var IncorrectNumberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge.")
        var TooHigh = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "Enter a number of messages to purge (1 to 100).")
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(PurgeNotAllowed)
        let count = parseInt(args[1])
        if (!count) return message.channel.send(NoNumberEntered)
        if (isNaN(count)) return message.channel.send(IncorrectNumberEntered)
        if (count < 1 || count > 100) return message.channel.send(TooHigh)
        message.channel.bulkDelete(count + 1, true)
    }
})

// SETNICK COMMAND

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "setnick") {
        var SetnickNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Manage Nicknames``.")
        var NoSetnickmemberEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must mention someone.")
        var NoNewNickEntered = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You must enter a new nickname")
        var CantSetnick = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "I can't rename this user.")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(SetnickNotAllowed)
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send(NoSetnickmemberEntered)
        if(!reason) return message.channel.send(NoNewNickEntered)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(CantSetnick)
        if (!member.manageable) return message.channel.send(CantSetnick)
        member.setNickname(reason)
        var SetNickSuccess = new Discord.RichEmbed()
        .setColor("0x38ee0e")
        .setTitle( emoji("689538521161138177") + member.displayName + "'s nickname has been set to: ``" + reason + "``")
        .setTimestamp()
        message.channel.send(SetNickSuccess)
    }
})

// STATS COMMAND

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'stats') {
        var StatsNotAllowed = new Discord.RichEmbed()
        .setColor("0xf35353")
        .setTitle( emoji("689538472758870111") + "You don't have the required permissions to use this command: ``Administrator``.")
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(StatsNotAllowed)
        if(!message.guild.id === "689503638020030673") return
        var StatsEmbed = new Discord.RichEmbed()
        .setTitle(`Server: **${message.guild.name}** \n Members : **${client.users.size}** \n Channels: **${client.channels.size}** \n Emojis: **${client.emojis.size}**`)
        .setTimestamp()
        .setFooter("Requested by " + message.author.tag)
        message.channel.send(StatsEmbed)
    }
})
