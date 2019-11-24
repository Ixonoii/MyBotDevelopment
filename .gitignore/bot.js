                                                                 // CONFIGURATION //

const Discord = require('discord.js');
const client = new Discord.Client;
var credits = "AXY - Tous Droits Réservés";
var embedcolor = "#049ef3"
var versionBOT = "0.0.1"
var nbcommandes = "0"
var MAJ = "Dimanche 10 Novembre"
var prefix = "-"

                                                                 // BOT TOKEN //

client.login(process.env.BOT_TOKEN)

                                                                 // BOT STATUS //

client.on('ready', function(){
    client.user.setActivity("Mentionne moi !", {type: "PLAYING"})
})

                                                                 // BOT MENTION //

client.on('message', function(message){
    if(message.content === "<@643152257822621696>"){
        message.channel.send("***<@" + message.author.id + "> Besoin d'aide ? Utilise -cmds ou -commandes !***")
        let notifmention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a mentionner le bot !")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(notifmention);
    }
})

                                                                 // INFO COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "info"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Informations à propos du AXY__")
        .setColor(embedcolor)
        .addField("Préfix:", prefix)
        .addField("Version du BOT:", versionBOT)
        .addField("Commandes disponibles:", nbcommandes)
        .addField("Dernière mise à jour:",MAJ)
        .addField("Développeur:","Ixonoii#1111")
        .setTimestamp(Date.now()) 
        message.channel.send(embed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -info !")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})

                                                                 // CMDS COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "cmds"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Sipprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        .setTimestamp(Date.now()) 
        message.channel.send(pong_enbed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -cmds !")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "commandes"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle('__Voici toutes les commandes disponibles __')
        .setColor(embedcolor)
        .addField("__Commandes de base__","``-cmds/commandes`` Affiche la liste de toutes les commandes disponibles. \n ``-ping`` Affiche votre latence. \n ``-avatar`` Affiche votre photo de profil Discord.  \n ``-signal`` Signal un membre. \n ``-idée`` Vous permet de partager une de vos idées.")
        .addField("__Commandes d'administration__","``-kick`` Expulse un membre. \n ``-ban`` Ban un membre. \n ``-softban`` Ban puis unban unmembre. \n ``-mute`` Rend un membre muet. \n ``-unmute`` Permet à un membre de parler à nouveau. \n ``-purge`` Sipprime un grand nombre de messages.")
        .addField("__Commandes de gestion__","``-nouveaurole`` Créer un nouveau rôle. \n ``-nouveauchannel`` Créer un nouveau channel. (BIENTÔT) \n ``-supprimechannel`` Supprime un channel. \n ``-sujet`` Change le sujet d'un channel. \n ``-pasdesujet`` Réinitialise le sujet d'un channel. (BIENTÔT) \n ``-renomme`` Change le nom d'un channel. \n ``-nomduserveur`` Change le nom du serveur.")
        .setTimestamp(Date.now()) 
        message.channel.send(pong_enbed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -commandes !")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})

                                                                 // SERVEUR COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "serveur"){
        let embed = new Discord.RichEmbed()
        .setTitle("__Informations à propos du serveur " + message.guild.name + "__")
        .setColor(embedcolor)
        .addField("Propriétaire du serveur:", message.guild.owner)
        .addField("Nombre de membres:", message.guild.memberCount + " membres")
        .addField("Région:", message.guild.region)
        .addField("Nom du serveur:", message.guild.name)
        .addField("ID du serveur:", message.guild.id)
        .addField("Icône du serveur:", message.guild.iconURL)
        .addField("Création du serveur:", message.guild.createdAt)
        .setTimestamp(Date.now()) 
        message.channel.send(embed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -serveur")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})

                                                                 // AVATAR COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Voici votre avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        .setTimestamp(Date.now()) 
        message.channel.send(pong_enbed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -avatar")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648253599146835968").send(infomention);
    }
})

                                                                 // AVATAR COMMAND //

client.on('message', message =>{
    if(message.content === prefix + "ping"){
        let début = Date.now();
        message.channel.send("***Chargement...***")
        .then((m) => m.edit(`***Votre latence est de: ${Date.now() - début}ms.***`));
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -ping")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .setTimestamp(Date.now())
        client.channels.get("648245694087430167").send(infomention);
    }
})



                                                                 // QUESTION COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "question"){
    if (!args[1]) return message.channel.send("***Quelle est ta question?***")
        let answers = ["Oui.", "Non.", "Bien sûr.", "Peut être.", "Je ne sais pas.","Jamais.","Impossible.","Aucune idée.","Aucune chance."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor(embedcolor)
            .addField("Question:", question)
            .addField("Réponse:", answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp(Date.now()) 
        message.channel.send(embed)
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -question")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Question :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253599146835968").send(infomention);
    }
})


                                                                 // SIGNAL COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "signal"){
        let memberMEN = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if(!memberMEN) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if(!question) return message.channel.send("***Vous devez entrer une raison.***")
        let embed = new Discord.RichEmbed()
        .setTitle("Fiche de rapport n°" + message.author.id)
        .setColor(embedcolor)
        .addField("Membre :", message.author.username + " (" + message.author.id + ")")
        .addField("Membre signalé :", memberMEN + " (" + memberMEN.id + ")")
        .addField("Raison :", question)
        .addField("Channel :", message.channel.name)
        .setTimestamp(Date.now()) 
        let cChannel = message.guild.channels.find(c => c.name === "reports")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> Je ne peux pas envoyer votre report. Je n'ai peut-être pas les autorisations nécessaires ou le channel ``reports`` n'existe pas sur ce serveur.***")
    cChannel.send(embed);
    message.delete();
    message.channel.send("***Signalement envoyé.***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -signal")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Membre signalé :", memberMEN + " (" + memberMEN.id + ")")
        .addField("Raison :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253599146835968").send(infomention);
}
})

                                                                 // KICK COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
       if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("***Je ne peux pas kick ce membre.***")
       if (!member.kickable) return message.channel.send("***Je ne peux pas kick ce membre.***")
       member.kick()
       message.channel.send('***' + member + ' à été kick du serveur pour la raison suivante : ' + reason + "***")
         let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -kick")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Membre concerné :", question)
        .addField("Raison :", reason)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
    }
})

                                                                 // BAN COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
       if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
       if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("***Je ne peux pas ban ce membre.***")
       if (!member.bannable) return message.channel.send("***Je ne peux pas ban ce membre.***")
       member.send(notif)
       message.channel.send('***' + member + ' à été ban du serveur pour la raison suivante : ' + reason + "***")
       message.delete()
       message.guild.ban(member, {days: 7, reason: question})
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -ban")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Membre concerné :", question)
        .addField("Raison :", reason)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
    }
})

                                                                 // PURGE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("***Vous devez entrer un nombre.***")
        if (isNaN(count)) return message.channel.send("***Vous devez entrer un nombre.***")
        if (count < 1 || count > 100) return message.channel.send("***Vous devez entrer un nombre entre 1 et 99.***")
        message.channel.bulkDelete(count + 1)
        message.channel.send("***" + count + " messages ont été supprimés.***")
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.edit("***" + count + " messages ont été supprimés.***"))
        .then((m) => m.delete())
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -purge")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Nombre de messages :", count)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
    }
})

                                                                 // ANNONCE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "annonce"){
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let ENDchannel = message.mentions.channels.first()       
        let question = args.slice(2).join(" ")
        if(!ENDchannel) return message.channel.send("***Vous devez mentionner un channel.***")
        if(!question) return message.channel.send("***Vous devez entrer votre message.***")
        let annonce = new Discord.RichEmbed()
        .setTitle(question)
        .setColor(embedcolor)
        .setTimestamp(Date.now()) 
    message.delete();
    ENDchannel.send(annonce)
    ENDchannel.send("@everyone")
         let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -annonce")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Message :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253599146835968").send(infomention);
}
})

// 648250513472618506

                                                                 // MUTE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mute") {
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
       let member = message.mentions.members.first()
       let reason = args.slice(2).join(" ")
        if (!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("***Je ne peux pas rendre ce membre muet.***")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("***Je ne peux pas rendre ce membre muet.***")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send("***" + member + ' est maintenant muet pour la raison suivante : ' + reason + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -mute")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Mebre concerné :", member)
        .addField("Raison :", reason)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
        }
        else {
            message.guild.createRole({name: 'Muet', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send("***" + member + ' est maintenant muet pour la raison suivante : ' + reason + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -mute")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Mebre concerné :", member)
        .addField("Raison :", reason)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
            })
        }}
})

                                                                 // UNMUTE COMMAND //

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let member = message.mentions.members.first()
        let reason = args.slice(2).join(" ")
        if(!member) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!reason) return message.channel.send("***Vous devez entrer une raison.***")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("***Je ne peux pas permette que ce membre puisse parler à nouveau.***")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("***Je ne peux pas permette que ce membre puisse parler à nouveau.***")
        let muterole = message.guild.roles.find(role => role.name === 'Muet')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send("***" + member + ' peut maintenant parler à nouveau pour la raison suivante : ' + reason + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -unùute")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Membre concerné :", member)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
    }
})

                                                                 // INVITATION COMMAND //

client.on('message', function(message){
    if(message.content === prefix + "invitation"){
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        message.channel.createInvite()
        .then(invite => message.channel.send(`***Invitation créée : discord.gg/${invite.code}***`))
    }
})

                                                                 // RENOMME COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "renomme"){
        if(!message.member.roles.some(r=>["【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let question = args.slice(1).join(" ")
        if (!question) return message.channel.send("***Vous devez entrer le nouveau nom du channel.***")
        message.channel.setName(question)
        message.channel.send("***Channel renommé : " + question + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -renomme")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Nouveau nom :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253879309303819").send(infomention);
}
})

                                                                 // IDEE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "idée"){
        if (!args[1]) return message.channel.send("***Vous devez entrer une idée.***")
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setTitle("Une nouvelle idée a étais envoyée :")
        .setColor(embedcolor)
        .setDescription(question)
        .setFooter("Idée envoyée par " + message.author.tag)
        .setTimestamp(Date.now()) 
        let cChannel = message.guild.channels.find(c => c.name === "idées")
        if(!cChannel) return message.channel.send("***<@" + message.author.id + "> Je ne peux pas envoyer votre idée. Je n'ai peut-être pas les autorisations nécessaires ou le channel ``idées`` n'existe pas sur ce serveur.***")
    cChannel.send(embed)
    cChannel.send("<@!434061967951659019>")
    message.channel.send("***Idée envoyée.***")
    message.delete();
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -idée")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Idée :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253599146835968").send(infomention);
}
})
                                                                 // PSEUDO COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "pseudo"){
        if(!message.member.roles.some(r=>["【💼】modérateur","【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        let membER = message.mentions.members.first()
        let question = args.slice(2).join(" ")
        if (!membER) return message.channel.send("***Vous devez mentionner quelqu'un.***")
        if (!question) return message.channel.send("***Vous devez entrer le nouveau pseudo.***")
        membER.setNickname(question)
    message.channel.send("***Le nouveau pseudo du membre " + membER + " est maintenant : " + question + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -pseudo")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Membre concerné :", membER)
        .addField("Nouveau pseudo :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253704201568256").send(infomention);
}
})

                                                                 // NOUVEAUROLE COMMAND //

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase()=== prefix + "nouveaurole"){
    if(!message.member.roles.some(r=>["【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
    if (!args[1]) return message.channel.send("***Vous devez entrer un nom.***")
        let question = args.slice(1).join(" ")
        message.guild.createRole({
            name: question,
            color: "#000000"
        })
        message.channel.send("***Rôle ajouté à la liste : " + question + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -nouveaurole")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Rôle :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253879309303819").send(infomention);
    }
})

client.on('message', function(message){
    if(message.content === prefix + "supprimechannel"){
        if(!message.member.roles.some(r=>["【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        message.channel.delete()
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -supprimechannel")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Channel :", message.channel.name)
        .setTimestamp(Date.now())
        client.channels.get("648253879309303819").send(infomention);
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "nomduserveur"){
    if(!message.member.roles.some(r=>["【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        if (!args[1]) return message.channel.send("***Veuillez entrer un nom.***")
        let question = args.slice(1).join(" ")
        message.channel.guild.setName(question)
        message.channel.send("***Nom du serveur modifié : " + question + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -nomduserveur")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", message.author.tag + " (ID : " + message.author.tag + ")")
        .addField("Nouveau nom :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253879309303819").send(infomention);
}
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase()=== prefix + "sujet"){
        if(!message.member.roles.some(r=>["【♏】développeur","【🌍】directeur AXY","【⚠️】fondateur","【⛔】administrateur","【🎀】Manager"].includes(r.name)) ) return message.channel.send("***Vous ne pouvez pas utiliser cette commande.***")
        if (!args[1]) return message.channel.send("***Veuillez entrer un sujet.***")
        let question = args.slice(1).join(" ")
        message.channel.setTopic(question)
        message.channel.send("***Sujet modifié : " + question + "***")
        let infomention = new Discord.RichEmbed()
        .setTitle("Quelqu'un a utiliser la commande -sujet")
        .setColor(embedcolor)
        .addField("Serveur :", message.guild.name)
        .addField("Utilisateur :", question)
        .addField("Nouveau sujet :", question)
        .setTimestamp(Date.now())
        client.channels.get("648253879309303819").send(infomention);
}
})
