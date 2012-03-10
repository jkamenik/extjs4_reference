Ext.define('WebUI.view.Viewport',{
  extend: 'Ext.container.Viewport',
  layout: 'border',
  
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