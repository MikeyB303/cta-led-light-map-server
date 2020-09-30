import { RGBValue } from "./rgb-value";

export class UpdatePayload {
    private rgbValue: RGBValue;
    private stations: any[];

    constructor(rgbValue: RGBValue, stations: any[]) {
        this.rgbValue = rgbValue;
        this.stations = stations;
    }
}