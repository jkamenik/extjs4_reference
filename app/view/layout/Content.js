Ext.define('WebUI.view.layout.Content',{
  extend: 'Ext.panel.Panel',
  alias: 'widget.layout-content',
  
  // requires: [
  //   'WebUI.view.interface.Ethernet',
  //   'WebUI.store.Ethernets',
  //   'WebUI.view.interface.IP'
  // ],
  
  layout: 'card',
  border: false,
  
  items: [{
    html: 'I am content'
  // },{
  //   xtype: 'interface-ip'
  // },{
  //   xtype: 'interface-ethernet'
  }]
});