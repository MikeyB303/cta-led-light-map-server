import * as cron from "node-cron";
import { autoInjectable } from "tsyringe";
import { RouteCode } from "../models/route-code";
import { TrainLocationsService } from "../services/train-locations-service";
import { StationArrivalService } from '../services/station-arrival-service'
import { UpdateService } from '../services/update-service'
import { Arrival } from "../models/arrival";

@autoInjectable()
export class TrainLocationUpdateScheduler {

    constructor(private locationService?: TrainLocationsService, private arrivalService?: StationArrivalService,
        private updateService?: UpdateService) {
    }

    updateTrainLocations = cron.schedule("*/5 * * * * *", () => {
        this.locationService.getTrainLocationsForRoutes([RouteCode.BLUE]).then(routes => {
            routes.forEach(route => {
                const arrivals: Arrival[] = this.arrivalService.getArrivalsForRoute(route)
                this.updateService.sendArrivalsUpdateForRoute(route.name, arrivals)
            })
        })
    })
}

