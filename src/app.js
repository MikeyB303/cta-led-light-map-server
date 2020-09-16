
const
  io = require("socket.io"),
  TrainLocationUpdateScheduler = require("./jobs/train-location-update-scheduler")
  config = require('./config/config')

function startServer() {
  server = io.listen(config.port)
  server.on('connection', (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
  })
  
  const scheduler = new TrainLocationUpdateScheduler(server)
  
  scheduler.updateTrainLocations.start()
}

startServer()