const Discord = require("discord.js");
const client = new Discord.Client();
const Settings = require("./settings.json")
const Words = ["Dobre, co nie?", "Marchew"];
const komendy = ["Ssiema", "zmienprefix"];
const token = process.env.Ssiema;
const fs = require('fs');

moodule.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Brak zgody");
    if (!args[0]) return message.reply("No podaj go no");

    let settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));
    settings[message.guild.id] = {
        prefix: args[0]
    };
    fs.writeFile("./settings.json", JSON.stringify(settings), (err) => { if (err) console.log(err); });

    message.chanel.send("Prefix został zmieniony")
}

moodule.exports.help = {
    name: "prefix"
}

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
});

client.on("message", (message) => {
    let settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));
    settings[message.guild.id] = {
        prefix: args[0]
    };
    let prefix = settigs[message.guild.id].prefix;
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token).catch(err=>console.error);