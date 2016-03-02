import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', {path: '/search/:search/:date'});
  this.route('bill', {path: '/bill/:bill_id'});
  this.route('lookup', {path: '/lookup/:lat/:lng'});
});

export default Router;
