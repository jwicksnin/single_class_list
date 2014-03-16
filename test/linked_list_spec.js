/* jshint expr: true */
var expect = require('chai').expect; //using the chai library expect
var List = require('../lib/list').List; //object is constructed from file name piano.js

describe('Singly linked list object tests', function() {
  'use strict';
  var list;
  list = new List();
  // beforeEach(function() {
  //   list = new List();

  // });
  var types = ['upright', 'grand', 'baby'];
  describe('constructor', function() {
    it('list is an object', function() {
      expect(list).to.be.an('object');
    });
    it('list can be pushed (i.e. element inserted at the head)', function() {
      list.push('z');
      expect(list.getList().valu).to.be.equal('z');
    });
    // This function still in progress
    // it('list can have en element removed at a given position', function() {
    //   list.pop(2);
    //   expect(list.isElement('c')).to.be.false;
    //   expect(list.size()).to.be.equal(3);
    // });
    it('list can find if it has a given element', function () {
      expect(list.isElement('z')).to.be.true;
      expect(list.isElement('annie')).to.be.false;
    });
    it('list can find its own length', function() {
      expect(list.size()).to.be.a('number');
      expect(list.size()).to.be.equal(1);
    });
    it('list knows if it is empty', function() {
      expect(list.empty()).to.be.false;
    });

//pop(pos) – remove element at position pos, zero indexed

  });
});
