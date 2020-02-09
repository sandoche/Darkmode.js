/* global describe, it, before */

import chai from 'chai';
import Darkmode from '../lib/darkmode-js';

chai.use(require('chai-dom'));
chai.expect();

const expect = chai.expect;

// mocking local storage
global.window = {
  localStorage: {
    getItem: function(id) {
      return true;
    },
    setItem: function() {}
  },
  matchMedia() {
    return {
      matches: false
    }
  }
};

describe('Given an instance of Darkmode', () => {
  var darkmode = new Darkmode({
    bottom: '64px',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '🌓',
    autoMatchOsTheme: true
  });
  describe('After creating an instance', () => {
    it('should not activate darkmode', () => {
      expect(darkmode.isActivated()).to.be.false;
    })

    it('should set the widget as inactive', () => {
      expect(document.getElementsByClassName('darkmode-toggle--inactive')[0]).to.not.be.undefined;
    })
  })
  describe('When I run toggle()', () => {
    it('should activate darkmode', () => {
      darkmode.toggle();
      expect(darkmode.isActivated()).to.be.true;
    })
  })
  describe('When I run toggle() a second time', () => {
    it('should disactivate darkmode', () => {
      darkmode.toggle();
      expect(darkmode.isActivated()).to.be.false;
    })
  })
  describe('When I run showWidget()', () => {
    it('the widget should have its label', () => {
      darkmode.showWidget();
      expect(document.getElementsByClassName('darkmode-toggle')[0]).to.have.html('🌓');
    })

    it('should make the widget visible', () => {
      darkmode.showWidget();
      expect(document.getElementsByClassName('darkmode-toggle')[0].classList.toString()).to.not.include('darkmode-toggle--inactive');
    })
  })

});
