Ext.define('WebUI.model.IpInterface', {
    extend: 'Ext.data.Model',
    fields: ['uid','ifName',
      {name: 'netmask',   mapping: 'address->mask->str'},
      {name: 'address',   mapping: 'address->net->str'},
      {name: 'broadcast', mapping: 'broadcast->str'}
    ],
    
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