const base = 128;

const convertToDecibel = (data) => {
  let sum = 0;
  data.forEach((value) => {
    sum += value;
  });
  const average = sum / data.length;
  const diff = Math.abs(average - base);
  const rms = Math.sqrt(average);
  const decibel = 20 * (Math.log(rms) / Math.log(10));
  console.log("diff = " + diff + " average = " + average + " rms = " + rms + " decibel = " + decibel);
};

module.exports = (client) => {
  client.on('guildMemberSpeaking', async (member, speaking) => {
    const channel = member.voice.channel;

    if (speaking) {
      const connection = await channel.join();
      const receiver = connection.receiver;

      const audio = receiver.createStream(member, { mode: "pcm" });

      audio.on('data', (data) => {
        const decibel = convertToDecibel(data);
      });
    }
  });
};