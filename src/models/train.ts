export class Train {
    public nextStationId: string;
    public nextStationName: string;
    public isApproaching: boolean;

    constructor(nextStationId: string, nextStationName: string, isApproaching: boolean) {
        this.nextStationId = nextStationId
        this.nextStationName = nextStationName
        this.isApproaching = isApproaching
    }
}