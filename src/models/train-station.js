module.exports = class TrainStation {
    constructor(position, name, stationId) {
       this.position = position
       this.name = name
       this.stationId = stationId
       this.trainArriving = false
    }

    checkForTrainArrival(trainsArray) {
        this.trainArriving = false
        trainsArray.forEach(train => {
            if (train.nextStationId == this.stationId && train.isApproaching) {
                this.trainArriving = true
            }
        })
    }
}