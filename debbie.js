const Discord = require('discord.js');
const importEventHandlers = require('./import-event-handlers');
const token = process.env.token ? process.env.token : require('./config').token;
const client = new Discord.Client();

importEventHandlers(client);
client.login(token);