import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {

    var url = 'http://openstates.org/api/v1/bills/' + params.bill_id + '/?&apikey=ad8985ad95754238a64c485cd36ae247'

    return Ember.$.getJSON(url)
      .then(function(response) {
        console.log(response.sources[0].url);
        return response;
    });
  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search, params.date);
    }
  }
});
