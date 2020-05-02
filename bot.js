const Discord = require("discord.js");
const client = new Discord.Client();
const Settings = require("settings.json")
const Words = ["Dobre, co nie?", "Marchew"];
const komendy = ["Ssiema", "zmienprefix"];
const token = process.env.Ssiema;




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
    else if (message.content.startsWith(Settings.prefix + komendy[1])) {
        Settings.prefix = message.content - Settings.prefix - komendy[1] - ' ';
        message.send(Settings.prefix + "to jest nowy prefix");
    }
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token).catch(err=>console.error);