Ext.define('WebUI.model.Arp', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'id', mapping: 'uid', type: 'int', persist: false},
      {mapping: 'hwAddress',      name: 'ethernet'},
      {mapping: 'ipAddress->str', name: 'address'},
      {mapping: 'doNotExport',    name: 'user_defined'}
    ],
    
    proxy: {
      type: 'rest',
      url:  '/rest/trinity_db_core/ArpTable',
      extraParams: {depth: 1},
      reader: {
        type:            'json',
        root:            'ArpTable',
        messageProperty: 'message'
      },
      writer: {
        type:            'json',
        nameProperty:    'mapping'
      }
    }
});
