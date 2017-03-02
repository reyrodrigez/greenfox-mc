export function handleMessage(channel, messageHandler) {
  return async function (message) {
    if (message !== null) {
      try {
        await messageHandler(decode(message));
        channel.ack(message);
      } catch (error) {
        console.log(error);
        channel.nack(message);
      }
    }
  }
}

export function encode(message) {
  return new Buffer(JSON.stringify(message));
}

export function decode(message) {
  return JSON.parse(message.content.toString());
}


