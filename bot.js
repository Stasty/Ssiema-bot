const Discord = require("discord.js");
const client = new Discord.Client();
const Words = ["Dobre, co nie?", "Dobre co nie"];
const komedny = ["siema"];
const powitania = ["Witaj, graczu",`Ssiema, ${member}`,"Ssiema, jak Ci mija dzień?"]

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
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    const powitania = ["Witaj, graczu", `Ssiema, ${member}`, "Ssiema, jak Ci mija dzień?"]
    var zmienna;
    zmienna = Math.floor(Math.random() * 3);
    channel.send(powitania[zmienna]);
});
