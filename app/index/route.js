import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search);
    }
  }
});
