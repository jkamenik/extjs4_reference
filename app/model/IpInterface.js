Ext.define('WebUI.model.IpInterface', {
    extend: 'Ext.data.Model',
    fields: ['uid','ifName',{name: 'address', mapping: 'address->net->str'},'addrType',{name: 'broadcast', mapping: 'broadcast->str'},{name: 'mask', mapping: 'address->mask->str'}],
    
    idProperty: 'uid',
    
    proxy: {
      type: 'rest',
      url:  '/rest/trinity_db_core/IpInterface',
      extraParams: {depth: 1},
      reader: {
        type:            'json',
        root:            'IpInterface',
        messageProperty: 'message'
      },
      writer: {
        type:         'json',
        nameProperty: 'mapping'
      }
    }
    
    // belongsTo: 'WebUI.model.Ethernet'
});
