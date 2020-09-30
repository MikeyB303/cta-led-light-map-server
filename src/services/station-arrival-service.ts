import { autoInjectable } from "tsyringe";
import { InMemoryStationRepository } from "../repositories/in-memory-station-repository";
import { Route } from "../models/route"
import { TrainStation } from "../models/train-station";
import { Arrival } from "../models/arrival";

@autoInjectable()
export class StationArrivalService {
    constructor(private stationRepository?: InMemoryStationRepository) {}

    getArrivalsForRoute(route: Route): Arrival[] {
        const stations: TrainStation[] = this.stationRepository.getStationsForRoute(route.name)
        const arrivals: Arrival[] = []

        stations.forEach(station => {
            arrivals.push(station.getArrivalUpdate(route.trains))
        })

        return arrivals

    }
}