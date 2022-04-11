
const zmq = require("zeromq")
const publisher = new zmq.Publisher()

const run = async () => {

  await publisher.bind("tcp://127.0.0.1:7000")
  console.log("Publisher is ready listening on port 7000")
  console.log("Press any key to start publsihing  messages!")
  process.stdin.once("data", publish); 
}


const publish = async ()=>  {
  console.log("Publishing messages")
  for (let i = 0;i < 1000; i++) {
   await publisher.send(['techtalk',JSON.stringify(`Dispatching order ${i} `)])
 
  //wait 50ms
   await new Promise(resolve => setTimeout(resolve, 500))
}

}

// publisher.bind('tcp://127.0.0.1:7000') 
run()



