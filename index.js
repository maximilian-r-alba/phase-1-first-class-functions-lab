// Code your solution in this file!
const returnFirstTwoDrivers = function(driversList){
    return driversList.slice(0,2);
}

const returnLastTwoDrivers = function (driversList){
    return driversList.slice(driversList.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (fare){
        return fare*multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,firstOrLast){
    switch (firstOrLast){
        case returnFirstTwoDrivers: return returnFirstTwoDrivers(drivers);
        case returnLastTwoDrivers: return returnLastTwoDrivers(drivers);
    }
}