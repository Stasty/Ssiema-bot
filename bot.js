const Discord = require("discord.js");
const client = new Discord.Client();
const Words = ["Dobre, co nie?", "Dobre co nie"];
const komedny = ["siema"];
const token = process.env.token;
const PREFIX = "-"
client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (Words.some(word => message.content.includes(word))) {
        message.reply("Haha");
        message.delete();
    }
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token);