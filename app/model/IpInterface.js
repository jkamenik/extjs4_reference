Ext.define('WebUI.model.IpInterface', {
    extend: 'Ext.data.Model',
    fields: ['uid','ifName'],
    
    idProperty: 'uid',
    
    proxy: {
      type: 'ajax',
      url:  '/rest/trinity_db_core/IpInterface',
      extraParams: {depth: 1},
      reader: {
        type:            'json',
        root:            'IpInterface',
        messageProperty: 'message'
      }
    }
    
    // belongsTo: 'WebUI.model.Ethernet'
});