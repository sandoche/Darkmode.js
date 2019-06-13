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
    }
  }
};

describe('Given an instance of Darkmode', () => {
  before(() => {
    Darkmode({
      bottom: '64px',
      right: 'unset',
      left: '32px',
      time: '0.5s',
      mixColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      saveInCookies: false
    }).showWidget();
  });
});