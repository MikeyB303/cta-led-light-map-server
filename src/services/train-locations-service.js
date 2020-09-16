const HttpTrainLocationsRepository = require('../repositories/http-train-locations-repository')
const Route = require('../models/route')
const Train = require('../models/train')
const UpdatePayload = require('../models/update-payload')
const inMemoryStationRepository = require('../repositories/in-memory-station-repository')
const RouteCode = require('../models/route-code')
const RouteRGBValue = require('../models/route-rgb-value')

//Figure out better way to do DI
module.exports = class TrainLocationsService {
    constructor(server) {
        this.server = server
        this.locationsRepository = new HttpTrainLocationsRepository()
    }

    updateStationArrivals() {
        this.getTrainLocationsByRouteCode([RouteCode.BLUE, RouteCode.BROWN])
            .then(trainRouteArray => {
                const arrivalsArray = this.createArrivals(trainRouteArray)
                this.emitArrivalsUpdate(arrivalsArray)
            })
            .catch(error => console.log(error))
    }

    getTrainLocationsByRouteCode(routeCodes) {
        return this.locationsRepository.locations(routeCodes)
            .then(response => this.buildRoutesFromResponse(response))
            .catch(error => new Error(error))
    }

    buildRoutesFromResponse(responseData) {
        //this can be cleaned up a bit, hopefully with less loops
        const parsedRoutes = []
        responseData.ctatt.route.forEach(route => {
            let routeName = route['@name']
            let trainArray = []
            if (route.train) {
                if (Array.isArray(route.train)) {
                    route.train.forEach(train => {
                        trainArray.push(new Train(train.nextStaId, train.nextStaNm, (train.isApp === "1" ? true : false)))
                    })
                } else {
                    trainArray.push(new Train(route.train.nextStaId, route.rain.nextStaNm, (route.train.isApp === "1" ? true : false)))
                }
                
            }

            let parsedRoute = new Route(routeName, trainArray)
            parsedRoutes.push(parsedRoute);
        })
      
        return parsedRoutes
    }

    createArrivals(trainRouteArray) {
        //is arrivals the best term for this?
        //Again, too many loops
        let arrivalsArray = []
        trainRouteArray.forEach(route => {
            let arrival = {
                route: route.name,
                stations: []
            }
            let stations = inMemoryStationRepository.getStationsForRoute(route.name)
            stations.forEach(station => {
                station.checkForTrainArrival(route.trains)
                arrival.stations.push({
                    stationName: station.name,
                    stationPosition: station.position,
                    trainArriving: station.trainArriving
                })
            })
            arrivalsArray.push(arrival)
        })

        return arrivalsArray
    }

    emitArrivalsUpdate(arrivalsArray) {
        arrivalsArray.forEach(arrival => {
            console.log("Emitting update for: " + arrival.route)
            let routeName = arrival.route
            let payload = null
            if (routeName == RouteCode.BLUE) {
                payload = new UpdatePayload(RouteRGBValue.BLUE, arrival.stations)
            } else if (routeName == RouteCode.BROWN) {
                payload = new UpdatePayload(RouteRGBValue.BROWN, arrival.stations)
            }
            this.server.emit(arrival.route + "-update", payload)
        })
    }
}