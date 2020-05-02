const Discord = require("discord.js");
const client = new Discord.Client();
const Words = ["Dobre, co nie?", "Marchew"];
const komendy = ["Ssiema", "zmienprefix"];
const token = process.env.Ssiema;
var PREFIX = "-"


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
    else if (message.content.startsWith(PREFIX + komendy[1])) {
        PREFIX = message.content - PREFIX - komendy[1] - ' ';
    }
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token).catch(err=>console.error);