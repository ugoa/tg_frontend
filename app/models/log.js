import DS from 'ember-data';

export default DS.Model.extend({
  // Order
  status: DS.attr('string'),
  customerName: DS.attr('string'),
  customerAddress: DS.attr('string'),
  shipDate: DS.attr('date'),
  shippingProvider: DS.attr('string'),

  // Invoice
  orderId: DS.attr('number'),
  productIds: DS.attr(''),
  total: DS.attr(''),

  // Product
  name: DS.attr('string'),
  price: DS.attr('number'),
  stockLevels: DS.attr('number'),
});
