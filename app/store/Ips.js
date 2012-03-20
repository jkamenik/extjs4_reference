Ext.define('WebUI.store.Ips', {
  extend:  'Ext.data.Store',
  model:   'WebUI.model.Ip',

  proxy: {
    type: 'localstorage',
    id  : 'ips'
  },
  autoLoad: true,
  autoSync: true
});