/* jshint expr: true */
var expect = require('chai').expect; //using the chai library expect
var Piano = require('../lib/piano').Piano; //object is constructed from file name piano.js

describe('Piano object tests', function() {
  'use strict';
  var piano;

  beforeEach(function() {
    piano = new Piano('upright', 8);
  });

  describe('constructor', function() {
    //write what each piano should be first
    it('piano should be truthy (exists)', function() {
      //expect(piano).to.be.ok;
      expect(piano).to.be.an('object');
    });
    it('piano should have a get suit function', function() {
      expect(piano.getType).to.be.an('function');
    });
    it('piano should have a get rank function', function() {
      expect(piano.getVolume).to.be.an('function');
    });
    it('piano.suit should be immutable', function() {
      expect(piano.getType()).to.equal('upright');
      piano.type = 'grand';
      expect(piano.getType()).to.equal('upright');
    });
    it('piano.rank should be immutable', function() {
      expect(piano.getVolume()).to.equal(8);
      piano.volume = 10;
      expect(piano.getVolume()).to.equal(8);
    });
  });
});

