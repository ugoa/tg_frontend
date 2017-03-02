import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    object_id: { refreshModel: true }
  },

  model(params) {
    return this.store.query('log', params);
  }
});
