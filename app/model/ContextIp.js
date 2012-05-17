Ext.define('WebUI.model.ContextIp', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'id', mapping: 'uid', type: 'int', persist: false},
      'ctxName'
    ],
    
    proxy: {
      type: 'rest',
      url:  '/rest/trinity_db_core/ContextIp',
      extraParams: {depth: 1},
      reader: {
        type:            'json',
        root:            'ContextIp',
        messageProperty: 'message'
      },
      writer: {
        type:            'json',
        nameProperty:    'mapping',
        writeAllFields:  false
      }
    },
    
    hasMany: 'WebUI.model.IpInterface'
});
