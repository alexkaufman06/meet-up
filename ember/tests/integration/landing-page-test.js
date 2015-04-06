import Ember from 'ember';
import { module, test, skip } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to Meet-Up Ember', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to Meet-Up Ember');
  });
});

test('Should allow navigating back to root from another page', function(assert) {
  visit('/about').then(function() {
    click('a:contains("Home")').then(function() {
      assert.notEqual(find('h3').text(), 'About');
    });
  });
});
