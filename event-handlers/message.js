const prefix = process.env.prefix ? process.env.prefix : require('./../config').prefix;
const actions = {
  hello: (message) => {
    message.channel.send(`hello ${message.author.username}`);
  }
};

module.exports = (client) => {
  client.on('message', (message) => {
    let { content } = message;

    if (!message.author.bot && content && content.startsWith(prefix)) {
      content = content.replace(prefix, '').trim();

      let actionKey = content.includes('\s') ? content.substring(0, content.indexOf('\s')) : content;

      let action = actions[actionKey];
      content = content.replace(`${actionKey}`, '').trim();
      let parameter = content;

      if (action) {
        action(message, parameter);
      }
    }
  });
};