const config = require("./config");
const token = process.env.token ? process.env.token : config.token;
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on('ready', () => {
  console.log('ready');
  client.user.setActivity('sound asleep (or is she?)');
});

client.on('message', (message) => {

  if (message.author.bot) {
    return;
  }

  if (message.content && message.content.startsWith(`${prefix}debbie`)) {
    message.channel.send('GO HOME');
  }

});

console.log('before login');
client.login(token);