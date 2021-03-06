﻿const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Brak zgody");
    if (!args[0]) return message.reply("No podaj go no");

    let settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));
    settings[message.guild.id] = {
        prefix: args[0]
    };
    fs.writeFile("./settings.json", JSON.stringify(settings), (err) => { if (err) console.log(err); });

    message.channel.send("Prefix został zmieniony");
}

module.exports.help = {
    name: "zmienPrefix"
}