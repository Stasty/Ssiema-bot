const Discord = require("discord.js");
const client = new Discord.Client();
const Words = ["Dobre, co nie?", "Marchew"];
const komedny = ["Ssiema"];
const token = process.env.Ssiema;
const PREFIX = "-"


client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content == Words[0]) {
        message.reply("Haha");
    }
    else if (message.content == Words[1]) {
        message.reply("Mmmmmnom nom nom nom");
    }
    else if (message.content == prefix + komendy[0]) {
        for (MessageMentionOptions.users){
            message.channel.send.mentions.users(`Ssiema, ${user}`);
        }
    }
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token).catch(err=>console.error);