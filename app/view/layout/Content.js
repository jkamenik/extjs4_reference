Ext.define('WebUI.view.layout.Content',{
  extend: 'Ext.panel.Panel',
  alias: 'widget.layout-content',
  
  // requires: [
  //   'WebUI.view.interface.Ethernet',
  //   'WebUI.store.Ethernets',
  //   'WebUI.view.interface.Ip'
  // ],
  
  layout: 'card',
  border: false,
  
  items: [{
    html: 'I am content'
  },{
    xtype: 'ContentError'
  // },{
  //   xtype: 'interface-ip'
  // },{
  //   xtype: 'interface-ethernet'
  }],
  
  tbar: [
    '->'
  ,{
    xtype: 'button',
    text:  'Save',
    icon: 'resources/images/button_icons/Save.png',
    bubbleEvents: ['click']
  },{
    xtype: 'button',
    text:  'Reboot',
    icon: 'resources/images/button_icons/Exit.png',
    bubbleEvents: ['click']
  },{
    xtype:   'button',
    text:    'Logout',
    icon: 'resources/images/button_icons/Logout.png',
    bubbleEvents: ['click'],
    disable: true
  }]
});
