import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    object_id: { refreshModel: true },
    object_type: { refreshModel: true },
    timestamp: { refreshModel: true }
  },

  model(params) {
    return this.store.query('log', params)
    .then(logs => {
      return logs.get('firstObject');
    })
  }
});
