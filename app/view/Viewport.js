Ext.define('WebUI.view.Viewport',{
  extend: 'Ext.container.Viewport',
  layout: 'border',
  
  requires: [
    'WebUI.view.layout.Header',
    'WebUI.view.layout.Footer',
    'WebUI.view.layout.Nav',
    'WebUI.view.layout.Content'
  ],
  
  items: [{
    xtype:  'layout.header',
    region: 'north',
    height: 57
  },{
    region: 'south',
    xtype:  'layout.footer'
  },{
    region: 'west',
    xtype:  'layout-nav',
    width: 200
  },{
    region: 'center',
    xtype:  'layout-content'
  }]
});