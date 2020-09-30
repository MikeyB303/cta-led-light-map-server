export class Arrival {
    private stationPosition: number
    private stationName: string
    private trainArriving: boolean

    constructor(stationPosition: number, stationName: string, trainArriving: boolean) {
        this.stationName = stationName
        this.stationPosition = stationPosition
        this.trainArriving = trainArriving
    }
}