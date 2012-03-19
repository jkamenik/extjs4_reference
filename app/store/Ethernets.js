Ext.define('WebUI.store.Ethernets', {
  extend:  'Ext.data.Store',
  model:   'WebUI.model.Ethernet',

  data: [
      { name: 'Ethernet 1' },
      { name: 'Ethernet 2' },
      { name: 'Ethernet 3' },
      { name: 'Ethernet 4' }
  ]
});