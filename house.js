function House( numberOfDoors, numberOfWindows ) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;

  this.toString = function () {
    var houseString = (this.numberOfDoors != 1) ? "doors" : "door";
    var windowString = (this.numberOfWindows != 1) ? "windows" : "window";

    return "The house has " + this.numberOfDoors + " "
        + houseString + " and " + this.numberOfWindows + " "
        + windowString;
  }
};

module.exports = House;
