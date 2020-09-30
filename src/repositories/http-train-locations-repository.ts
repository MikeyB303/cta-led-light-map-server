import { RouteCode } from '../models/route-code';
import { config } from '../config/config'
import { HttpRepository } from './http-repository'
import { Route } from '../models/route';

export class HttpTrainLocationsRepository extends HttpRepository {

    public findTrainLocationsForRouteByRouteCodes = async (routeCodes: RouteCode[]): Promise<any> => {
        try {
            const data = await this.get('http://lapi.transitchicago.com/api/1.0/ttpositions.aspx', { params: {
                key: config.trainTracker.apiKey,
                rt: routeCodes.join(),
                outputType: 'JSON'
            }})
            return this.transformLocationsResponseData(data);
        } catch (error) {
            console.log(error)
        }
    }

    private transformLocationsResponseData(data: any): Route[] {
        const routeArray: Route[] = []

        data.ctatt.route.forEach(route => {
            routeArray.push(new Route(route['@name'], route.train))
        });

        return routeArray
    }
}