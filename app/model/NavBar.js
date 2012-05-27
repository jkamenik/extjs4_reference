Ext.define('WebUI.model.NavBar', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', mapping: 'uid', type: 'int', persist: false},
    {name: 'group' },
    {name: 'text'  },
    {name: 'panel' },
    {name: 'link'  }
  ],
  
  proxy: {
    type: 'rest',
    url:  '/rest/trinity_db_core/NavBar',
    extraParams: {depth: 1},
    reader: {
      type:            'json',
      root:            'NavBar',
      messageProperty: 'message'
    },
    writer: {
      type:            'json',
      nameProperty:    'mapping'
    }
  }
});
