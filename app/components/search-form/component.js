import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    executeSearch() {
      var params = {
        search: this.get('search')
      };
      this.set('search', undefined);
      this.sendAction('executeSearch', params);
    }
  }
});
