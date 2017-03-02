import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['object_id', 'object_type', 'timestamp'],

  object_id: null,
  object_type: null,
  timestamp: null,

  objectTypes: ['Order', 'Invoice', 'Product'],

  changes: Ember.computed('model', function() {
    return Ember.keys(this.get('model').toJSON())
    .filter(key => { return !Ember.isNone(this.get(`model.${key}`)) })
    .map(key => ({ key: key, value: this.get(`model.${key}`) }))
  }),
});
