const channelToJoin = () => {
  try {
    const config = require('./../config');
    return config.channelToJoin;
  } catch (e) {
    return process.env.channelToJoin;
  }
};

const getBackRoom = (channelsCache) => {
  const channelToJoin = channelToJoin();
  let room = null;
  channelsCache.forEach((channel) => {
    if (channelToJoin && channel.name === channelToJoin) {
      room = channel;
    }
  });

  return room;
};

module.exports = (client) => {
  client.on('ready', () => {
    client.user.setActivity('sound asleep (or is she?)');
    getBackRoom(client.channels.cache).join().then(() => {}).catch((e) => {
      console.log(e)
    });
  });
};