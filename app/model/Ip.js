Ext.define('WebUI.model.Ip', {
    extend: 'Ext.data.Model',
    fields: [{
      name: 'ip',
      type: 'string'
    },{
      name: 'mask',
      type: 'string'
    },{
      name: 'ethernet_id',
      type: 'int'
    }],
    
    // belongsTo: 'WebUI.model.Ethernet'
});