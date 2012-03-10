Ext.define('WebUI.store.Ips', {
  extend:  'Ext.data.Store',

  // model:   'Ip',
  fields: ['ip', 'mask'],
  data: [
      { ip: '1.1.1.1', mask: '255.255.255.0' },
      { ip: '2.2.2.2', mask: '255.255.255.0' },
      { ip: '3.3.3.3', mask: '255.255.255.0' },
      { ip: '4.4.4.4', mask: '255.255.255.0' }
  ]
});