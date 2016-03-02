import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitAddress() {
      var params = {
        street: this.get('street'),
        city: this.get('city'),
        zip: this.get('zip')
      };
      this.set('street', undefined)
      this.set('city', undefined),
      this.set('zip', undefined),
      this.sendAction('submitAddress', params);
    }
  }
});
