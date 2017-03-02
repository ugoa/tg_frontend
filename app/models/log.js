import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  customerName: DS.attr('string'),
  customerAddress: DS.attr('string'),
  shipDate: DS.attr('date'),
  shippingProvider: DS.attr('string'),
});
