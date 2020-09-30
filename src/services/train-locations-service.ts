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

    // getTrainLocationsByRouteCode(routeCodes) {
    //     return this.locationsRepository.findTrainLocationsByRouteCodes(routeCodes)
    //         .then(response => this.buildRoutesFromResponse(response))
    //         .catch(error => new Error(error))
    // }

    // parseRoutesFromResponse(responseData) {

    // }

    // buildRoutesFromResponse(responseData) {
    //     const parsedRoutes = []
    //     responseData.ctatt.route.forEach(route => {
    //         const routeName = route['@name']
    //         const trainArray = []
    //         if (route.train) {
    //             if (Array.isArray(route.train)) {
    //                 route.train.forEach(train => {
    //                     trainArray.push(new Train(train.nextStaId, train.nextStaNm, (train.isApp === "1" ? true : false)))
    //                 })
    //             } else {
    //                 trainArray.push(new Train(route.train.nextStaId, route.rain.nextStaNm, (route.train.isApp === "1" ? true : false)))
    //             }

    //         }

    //         const parsedRoute = new Route(routeName, trainArray)
    //         parsedRoutes.push(parsedRoute);
    //     })

    //     return parsedRoutes
    // }

    // createArrivals(trainRouteArray) {
    //     const arrivalsArray = []
    //     trainRouteArray.forEach(route => {
    //         const arrival = {
    //             route: route.name,
    //             stations: []
    //         }
    //         const stations = getStationsForRoute(route.name)
    //         stations.forEach(station => {
    //             station.checkForTrainArrival(route.trains)
    //             arrival.stations.push({
    //                 stationName: station.name,
    //                 stationPosition: station.position,
    //                 trainArriving: station.trainArriving
    //             })
    //         })
    //         arrivalsArray.push(arrival)
    //     })

    //     return arrivalsArray
    // }

    // emitArrivalsUpdate(arrivalsArray) {
    //     arrivalsArray.forEach(arrival => {
    //         const routeName = arrival.route
    //         let payload = null
            // if (routeName === RouteCode.BLUE) {
            //     payload = new UpdatePayload(RouteRGBValue.blue, arrival.stations)
            // } else if (routeName === RouteCode.BROWN) {
            //     payload = new UpdatePayload(RouteRGBValue.brown, arrival.stations)
            // }
    //         this.server.emitUpdate(arrival.route + "-update", payload)
    //     })
    // }
}