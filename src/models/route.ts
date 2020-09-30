import { TrainLocation } from '../models/train-location'

export class Route {
    public name: string
    public trains: TrainLocation[]

    constructor(routeName: string, trains: TrainLocation[]) {
        this.name = routeName
        this.trains = trains
    }
}