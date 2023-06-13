// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int){
  return function (fare){
    return int * fare;
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, a){
  if (a == returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
    // or return selectingDrivers[0](drivers) and index would be 1 for returning last two
  } else if (a == returnLastTwoDrivers) return returnLastTwoDrivers(drivers);
}