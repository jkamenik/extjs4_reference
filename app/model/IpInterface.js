Ext.define('WebUI.model.IpInterface', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', mapping: 'uid', type: 'int', persist: false},
    'ifName',
    {name: 'address', mapping: 'address->net->str'},
    {name: 'addrType', type: 'int'},
    {name: 'mask', mapping: 'address->mask->str'},
    {name: 'parentId', type: 'int'}
  ],
  
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
      type:            'json',
      nameProperty:    'mapping'
    }
  },

  belongsTo: 'WebUI.model.ContextIp'
});
