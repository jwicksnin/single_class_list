"use strict";
exports.List = function() {
  var newList = null;
  //For testing
  // var newList = {
  //   valu: 'a', nex: {
  //     valu: 'b', nex: {
  //       valu: 'c', nex : {
  //         valu: 'd', nex: null
  //       }
  //     }
  //   }
  // };

  function constructor() { }
  constructor.prototype.getList = function() {
    if (newList === null) {
      return {};
    }
    else {
      return newList;
    }
  };
  constructor.prototype.push = function(val) {
    newList = {
      valu: val, nex: newList
    };
  };
  constructor.prototype.isElement = function(sthing) {
    function getIt(list) {
      if (list === null){
        return false;
      }
      if (list.valu === sthing) {
        return true;
      } else {
        return getIt(list.nex);
      }
    };
    return getIt(newList);
  };
  constructor.prototype.pop = function(pos) {
    var newer = {};
    function getOut(list) {
      if (pos === 0) {
        newer.nex = list.nex;
        return newer;
      } else {
        pos = pos - 1;
        console.log(newer);
        newer.nex = {valu: list.valu, nex: getOut(list.nex)};
        return newer;
      }
    }
    return getOut(newList);
  };
  constructor.prototype.size = function() {
  var counter = 0;
    function addItUp(list) {
      if (list !== null) {
        counter++;
        return addItUp(list.nex);
      } else {
        return counter;
      }
    };
    return addItUp(newList);
  };
  constructor.prototype.empty = function() {
    if (newList === null) {
      return true;
    } else {
      return false;
    }
  }
  return new constructor();
};
