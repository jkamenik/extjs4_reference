Ext.define('WebUI.model.Arp', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'id',           mapping: 'uid', type: 'int', persist: false},
      {name: 'ethernet',     mapping: 'hwAddress'      },
      {name: 'address',      mapping: 'ipAddress->str' },
      {name: 'userDefined',  persist: false}
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
