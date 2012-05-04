Ext.define('WebUI.store.Ips', {
  extend:  'Ext.data.Store',
  model:   'WebUI.model.IpInterface',
  
  autoLoad: true,
  autoSync: true
});