function House( numberOfDoors, numberOfWindows ) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;

  this.toString = function () {

    return "The house has " + pluralize("door", this.numberOfDoors)
        + " and " + pluralize("window", this.numberOfWindows);
    function pluralize( word, quant ) {
      var outputString = quant +" "+ ((quant != 1) ? word + 's' :word);
      return outputString;
    }
  }
};

module.exports = House;
