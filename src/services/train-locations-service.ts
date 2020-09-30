import { HttpTrainLocationsRepository } from "../repositories/http-train-locations-repository"
import { autoInjectable } from "tsyringe"
import { Route } from "../models/route"
import { RouteCode } from "../models/route-code"

@autoInjectable()
export class TrainLocationsService {
    constructor(private locationsRepository?: HttpTrainLocationsRepository) {}

    public getTrainLocationsForRoutes = async (routes: RouteCode[]): Promise<Route[]> => {
        return await this.locationsRepository.findTrainLocationsForRouteByRouteCodes(routes)
    }
}