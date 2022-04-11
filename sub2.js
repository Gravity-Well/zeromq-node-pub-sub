
const zmq = require('zeromq')
const subscriber = new zmq.Subscriber()

const getMessages = async () => {
  try {
    subscriber.connect("tcp://127.0.0.1:7000");
    subscriber.subscribe('techtalk');
    for await (const [topic, msg] of subscriber) {

      console.log(`Sub 2 Received message from ${topic} channel, ${JSON.parse(msg)}`  );
   
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

getMessages()