Ext.define('WebUI.store.Ethernets', {
  extend:  'Ext.data.Store',
  model:   'WebUI.model.Ethernet',

  proxy: {
    type: 'localstorage',
    id  : 'ethernets'
  },
  autoLoad: true,
  autoSync: true
});