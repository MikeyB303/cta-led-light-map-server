import { autoInjectable } from 'tsyringe';
import { LightMapServer } from '../config/light-map-server.config'
import { Arrival } from '../models/arrival';
import { RGBValue } from '../models/rgb-value';
import { RouteCode } from '../models/route-code'
import { RouteRGBValue } from '../models/route-rgb-value'
import { UpdatePayload } from '../models/update-payload'

@autoInjectable()
export class UpdateService {
    constructor(private server?: LightMapServer) {}

    public sendArrivalsUpdateForRoute(route: string, arrivals: Arrival[]): void {
        const payload: UpdatePayload = new UpdatePayload(this.getRGBValueForRoute(route), arrivals)
        const routeUpdateMessage: string = route + "-update"
        
        this.server.emitUpdate(routeUpdateMessage, payload)
    }

    private getRGBValueForRoute(route: string): RGBValue {
        if (route === RouteCode.BLUE) {
            return RouteRGBValue.blue
        } else if (route === RouteCode.BROWN) {
            return RouteRGBValue.brown
        }
    }
}