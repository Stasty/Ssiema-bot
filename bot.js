const Discord = require("discord.js");
const client = new Discord.Client();
const Settings = require("./settings.json")
const Words = ["Dobre, co nie?", "Marchew"];
const token = process.env.Ssiema;
const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop === "js");
    if (jsfile.length <= 0) {
        console.log("Could not find command");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require("./commands/${f}");
        client.commands.set(props.help.name, props);
    });
})


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

client.on("message", async message => {
    let settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));

    let prefix = settings[message.guild.id].prefix;
    let msgArray = message.content.split(" ");
    let cmd = msgArray[0];
    if (cmd.slice(0, prefix.length) !== prefix) return;
    let args = msgArray.slice(1);
    let cmdFile = client.commands.get(cmd.slice(prefix.length));
    if (cmdFile) cmdFile.run(client, message, args);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ogólny');
    if (!channel) return;
    channel.send(`Ssiema, ${member}, polecam coś puścić`);
});

client.login(token).catch(err=>console.error);