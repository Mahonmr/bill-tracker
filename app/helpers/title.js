import Ember from 'ember';

export function title(params) {
  var legislator = params[0];
  if (legislator.chamber === "upper") {
    return "Senator";
  } else {
    return "Representative";
  };
}

export default Ember.Helper.helper(title);
