import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search, params.date);
    },

    submitAddress(params) {
      var self = this;
      
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        params.street.trim().replace(" ", "+") + "," +
        params.city.trim().replace(" ", "+") + ",OR" +
        params.zip.trim().replace(" ", "+") + "&key=AIzaSyCsudB_1mjPTFM4A4o6pJaEBrnOPZPTUiY";

      Ember.$.getJSON(url).then(function(response) {
        return response.results[0].geometry.location;
      }).then(function(location) {
        self.transitionTo('lookup', location.lat, location.lng)
      });
    }
  }
});
