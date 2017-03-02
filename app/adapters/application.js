import DS from 'ember-data';
import config from 'tg-frontend/config/environment';

export default DS.RESTAdapter.extend({
  host: config.host
});
