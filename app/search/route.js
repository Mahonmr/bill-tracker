import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log(params);
    console.log(params.search);
    // var sevenDaysAgo = moment().subtract(7, 'days').format("YYYY-MM-DD");
    var url = 'http://openstates.org/api/v1//bills/?q=' + params.query + '&state=or&last_action_since=' + '2016-02-01' + '&apikey=ad8985ad95754238a64c485cd36ae247';
    return Ember.$.getJSON(url).then(function(response) {
      console.log(response);
      var bills = [];
      response.forEach(function(bill) {
        bills.push(bill);
      });
      console.log("are we here");
      console.log(bills);
      return bills;
    })
  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search);
    }
  }
});
