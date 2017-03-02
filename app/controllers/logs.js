import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['object_id', 'object_type', 'timestamp'],

  object_id: null,
  object_type: null,
  timestamp: null,

  changes: Ember.computed('model', function() {
    console.log(this.get('model').toJSON());
    return this.get('model').toJSON();
  }),
});
