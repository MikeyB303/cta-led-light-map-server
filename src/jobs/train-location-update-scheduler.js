const cron = require("node-cron")
const TrainLocationsService = require('../services/train-locations-service');
const RouteCode = require('../models/route-code');

module.exports = class TrainLocationUpdateScheduler {
    constructor(server) {
        this.service = new TrainLocationsService(server)
    }

    updateTrainLocations = cron.schedule("*/5 * * * * *", () => {
        this.service.updateStationArrivals()
    })
}

