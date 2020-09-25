
const
  app = require('express')(),
  http = require('http').createServer(app)
  io = require("socket.io")(http),
  TrainLocationUpdateScheduler = require("./jobs/train-location-update-scheduler")
  config = require('./config/config')

function startServer() {
  io.on('connection', (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
  })

  app.get('/', (req, res) => {
    res.send('<h1>Welcome to the CTA light map server</h1> <p>There is not much here right now. Check back later</p>');
  })

  http.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
  })
  
  const scheduler = new TrainLocationUpdateScheduler(io)
  
  scheduler.updateTrainLocations.start()
}

startServer()