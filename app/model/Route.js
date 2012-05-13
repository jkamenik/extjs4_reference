Ext.define('WebUI.model.Route', {
    extend: 'Ext.data.Model',
    fields: [
      'uid',
      {name: 'dest',    mapping: 'dest->net->str'},
      {name: 'mask',    mapping: 'dest->mask->str'},
      {name: 'gateway', mapping: 'gw->str'},
      'flags',
      'metric',
      'tos',
      'intf',
      'source'
    ],
    
    idProperty: 'uid',
    
    proxy: {
      type: 'ajax',
      url:  '/rest/trinity_db_core/Route',
      extraParams: {depth: 1},
      reader: {
        type:            'json',
        root:            'Route',
        messageProperty: 'message'
      }
    }
    
    // belongsTo: 'WebUI.model.Ethernet'
});
