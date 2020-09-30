import "reflect-metadata";
import { LightMapServer } from './config/light-map-server.config'
import { TrainLocationUpdateScheduler } from './jobs/train-location-update-scheduler'
import { container } from "tsyringe";

function startServer() {
  const server: LightMapServer = container.resolve(LightMapServer)
  server.initSocket();

  const scheduler: TrainLocationUpdateScheduler = container.resolve(TrainLocationUpdateScheduler)

  scheduler.updateTrainLocations.start()
}

startServer()