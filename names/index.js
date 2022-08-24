const getFullNames = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = function (getFullNames) {
  return getFirstName(getFullNames);
};

console.log(getPeopleInCity());
