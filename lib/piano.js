"use strict";
exports.Piano = function(type, volume) {
  //the constructor function allows for inheritance while the more literal, non closure approach does not
  //var contructor = function () {}; equally possible
  function constructor() { } //will be filled with the following values
  constructor.prototype.getType = function() {
    return type;
  };
  constructor.prototype.getVolume = function() {
    return volume;
  };
  return new constructor();
};
