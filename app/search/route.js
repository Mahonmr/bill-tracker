import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {

    var url = 'http://openstates.org/api/v1//bills/?q=' + params.query + '&state=or&last_action_since=' + '2016-02-01' + '&apikey=ad8985ad95754238a64c485cd36ae247';
    return Ember.$.getJSON(url)
      .then(function(response) {
        var bills = [];
        response.forEach(function(bill) {
          bills.push(bill);
        });
        return {
          //THIS IS THE MODEL OBJECT
          bills: bills,
          number_of_results: bills.length,
          search: params.query
        };
    });

    // var sevenDaysAgo = moment().subtract(7, 'days').format("YYYY-MM-DD");

  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search);
    }
  }
});
