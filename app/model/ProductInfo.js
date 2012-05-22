Ext.define('WebUI.model.ProductInfo', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id',          mapping: 'uid', type: 'int', persist: false},
    {name: 'buildDate'},
    {name: 'buildHost'},
    {name: 'buildNumber', type: 'int'},
    {name: 'buildType'},
    {name: 'companyBase'},
    {name: 'companyName'},
    {name: 'companyUrl'},
    {name: 'model'},
    {name: 'modelDescription'},
    {name: 'serialNumber'},
    {name: 'version'},
    {name: 'utcTime'},
    {name: 'localTime'},
    {name: 'uptime'},
    {name: 'totalRam'},
    {name: 'freeRam'},
    {name: 'totalProcs'},
    {name: 'oneMinLoad'},
    {name: 'fiveMinLoad'},
    {name: 'fifteenMinLoad'}

  ],
  
  proxy: {
    type: 'rest',
    url:  '/rest/trinity_db_core/ProductDescription',
    extraParams: {depth: 1},
    reader: {
      type:            'json',
      root:            'ProductDescription',
      messageProperty: 'message'
    },
    writer: {
      type:            'json',
      nameProperty:    'mapping'
    }
  }
});
