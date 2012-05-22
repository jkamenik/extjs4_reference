// this file overrides anything any text and certain behaviors of the App

Ext.define('WebUI.OEM.Header',{
  override: 'WebUI.view.layout.Header',
  requires: ['WebUI.view.layout.Header'],
  
  cls: 'patton-header',
  
  border: false,

  layout: {
    type:  'hbox',
    pack:  'start',
    align: 'stretch'
  },
  
  items: [{
    xtype: 'container',
    flex: 10,
    html: '<div class="logo">&nbsp;</div>'
  },{
    xtype: 'container',
    width: 300,
    border: false,
    items: [{
      xtype: 'dataview',
      id: 'header-data',
      itemSelector: 'infoTable',
      store:        'ProductInfo',
      loadMask: false,
      autoShow: true,
      autoRender: true,
      tpl: [
        '<table class="infoTable">',
        '<tr><td class="label">Model:</td><td class="value">{model}</td></tr>',
        '<tr><td class="label">{buildType} Version:</td><td class="value">{version}</td></tr>',
        '<tr><td class="label">Current User:</td><td class="value">superuser</td></tr>',
        '</table>'
      ],
      
      // Get the first item, and thats it
      collectData : function(records, startIndex){
        var record;
        record = records[0];
        return this.prepareData(record[record.persistenceProperty], startIndex, record);
      }
  
    }],
  }],
    
  onRender: function(){
    this.setHeight(83);
    
    this.callParent(arguments);
  }
});

Ext.define('WebUI.OEM.Footer',{
  override: 'WebUI.view.layout.Footer',
  requires: ['WebUI.view.layout.Footer'],
  
  html: '&copy; 2010 Patton Electronics Co., All rights reserved'
});
