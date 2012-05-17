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
    html: ''
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
    xtype:   'button',
    action:  'save',
    tooltip: 'Save Configuration',
    iconCls: 'icon-save',
    bubbleEvents: ['click']
  },{
    xtype:   'button',
    action:  'reboot',
    tooltip: 'Reboot System',
    iconCls: 'icon-reboot',
    bubbleEvents: ['click']
  },{
    xtype:   'button',
    action:  'logout',
    tooltip: 'Logout',
    iconCls: 'icon-logout',
    bubbleEvents: ['click'],
    disabled: true
  }]
});
