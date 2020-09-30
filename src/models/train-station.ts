import { Arrival } from "./arrival";
import { TrainLocation } from "./train-location";

export class TrainStation {
    public position: number;
    public name: string;
    public stationId: string

    constructor(position, name, stationId) {
       this.position = position
       this.name = name
       this.stationId = stationId
    }

    getArrivalUpdate(trains: TrainLocation[]): Arrival {
        let trainArriving = false
        trains.forEach(train => {
            
            if (train.nextStaId == this.stationId && train.isApp === "1") {
                trainArriving = true
            }
        })

        return new Arrival(this.position, this.name, trainArriving)
    }
}