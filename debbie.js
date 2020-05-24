const Discord = require('discord.js');
const importEventHandlers = require('./import-event-handlers');
const token = process.env.token ? process.env.token : require('./config').token;

importEventHandlers(new Discord.Client());
client.login(token);