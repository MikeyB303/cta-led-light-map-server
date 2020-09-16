module.exports = class Train {
    constructor(nextStationId, nextStationName, isApproaching) {
        this.nextStationId = nextStationId
        this.nextStationName = nextStationName
        this.isApproaching = isApproaching
    }
}