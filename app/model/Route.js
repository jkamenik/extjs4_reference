Ext.define('WebUI.model.Route', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id',      mapping: 'uid', type: 'int', persist: false},
    {name: 'dest',    mapping: 'dest->net->str'},
    {name: 'mask',    mapping: 'dest->mask->str'},
    {name: 'gateway', mapping: 'gw->str'},
    {name: 'flags',   persist: false},
    {name: 'metric',  persist: false},
    {name: 'tos',     persist: false},
    {name: 'intf',    persist: false},
    {name: 'source',  persist: false}
  ],
  
  proxy: {
    type: 'rest',
    url:  '/rest/trinity_db_core/Route',
    extraParams: {depth: 1},
    reader: {
      type:            'json',
      root:            'Route',
      messageProperty: 'message'
    },
    writer: {
      type:            'json',
      nameProperty:    'mapping'
    }
  }
});
