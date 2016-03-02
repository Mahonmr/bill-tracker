import Ember from 'ember';

export default Ember.Component.extend({
  chamber: Ember.computed('chamber', function() {
    if (this.get('model.votes.lastObject.+bill_chamber') === 'upper') {
      return "Senate";
    } else {
      return "House";
    }
  })
});
