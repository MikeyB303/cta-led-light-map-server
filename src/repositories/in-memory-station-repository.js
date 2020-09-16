const TrainStation = require('../models/train-station')

const blueLineStations = [
    new TrainStation(0, `O'Hare`, 40890),
    new TrainStation(1, `Rosemont`, 40820),
    new TrainStation(2, `Cumberland`, 40230),
    new TrainStation(3, `Harlem (O'Hare Branch)`, 40750),
    new TrainStation(4, `Jefferson Park`, 41280),
    new TrainStation(5, `Montrose`, 41330),
    new TrainStation(6, `Irving Park`, 40550),
    new TrainStation(7, `Addison`, 41240),
    new TrainStation(8, `Belmont`, 40060),
    new TrainStation(9, `Logan Square`, 41020),
    new TrainStation(10, `California`, 40570),
    new TrainStation(11, `Western (O'Hare Branch)`, 40670),
    new TrainStation(12, `Damen`, 40590),
    new TrainStation(13, `Division`, 40320),
    new TrainStation(14, `Chicago`, 41410),
    new TrainStation(15, `Grand`, 40490),
    new TrainStation(16, `Clark/Lake`, 40380),
    new TrainStation(17, `Washington`, 40370),
    new TrainStation(18, `Monroe`, 40790),
    new TrainStation(19, `Jackson`, 40070),
    new TrainStation(20, `LaSalle`, 41340),
    new TrainStation(21, `Clinton`, 40430),
    new TrainStation(22, `UIC-Halsted`, 40350),
    new TrainStation(23, `Racine`, 40470),
    new TrainStation(24, `Illinois Medical District`, 40810),
    new TrainStation(25, `Western (Forest Park Branch)`, 40220),
    new TrainStation(26, `Kedzie-Homan`, 40250),
    new TrainStation(27, `Pulaski`, 40920),
    new TrainStation(28, `Cicero`, 40970),
    new TrainStation(29, `Austin`, 40010),
    new TrainStation(30, `Oak Park`, 40180),
    new TrainStation(31, `Harlem (Forest Park Branch)`, 40980),
    new TrainStation(32, `Forest Park`, 40390), 
]

const brownLineStations = [
    new TrainStation(0, 'Kimball', 41290),
    new TrainStation(1, 'Kedzie', 41180),
    new TrainStation(2, 'Francisco', 40870),
    new TrainStation(3, 'Rockwell', 41010),
    new TrainStation(4, 'Western', 41480),
    new TrainStation(5, 'Damen', 40090),
    new TrainStation(6, 'Montrose', 41500),
    new TrainStation(7, 'Irving Park', 41460),
    new TrainStation(8, 'Addison', 41440),
    new TrainStation(9, 'Paulina', 41310),
    new TrainStation(10, 'Southport', 40360),
    new TrainStation(11, 'Belmont', 41320),
    new TrainStation(12, 'Wellington', 41210),
    new TrainStation(13, 'Diversey', 40530),
    new TrainStation(14, 'Fullerton', 41220),
    new TrainStation(15, 'Armitage', 40660),
    new TrainStation(16, 'Sedgwick', 40800),
    new TrainStation(17, 'Chicago', 40710),
    new TrainStation(18, 'Merchandise Mart', 40460),
    new TrainStation(19, 'Washington/Wells', 40730),
    new TrainStation(20, 'Quincy', 40040),
    new TrainStation(21, 'LaSalle/Van Buren', 40160),
    new TrainStation(22, 'Harold Washington Library-State/Van Buren', 40850),
    new TrainStation(23, 'Adams/Wabash', 40680),
    new TrainStation(24, 'Washington/Wabash', 41700),
    new TrainStation(25, 'State/Lake', 40260),
    new TrainStation(26, 'Clark/Lake', 40380),
]

const getStationsForRoute = (routeName) => {
    if (routeName === "blue") {
        return blueLineStations
    } else if (routeName === "brn") {
        return brownLineStations
    }
}

module.exports.getStationsForRoute = getStationsForRoute