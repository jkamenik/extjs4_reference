Ext.define('WebUI.view.interface.Ip',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-ip',
  
  store: 'Ips',
  
  title: 'IP Interfaces',
  
  columns: [{
    text:      'IP Address',
    dataIndex: 'address',
    flex:      1
  },{
    text:      'Netmask',
    dataIndex: 'netmask',
    flex:      1
  },{
    text:      'Broadcast',
    dataIndex: 'broadcast',
    flex:      1
  },{
    text:      'Interface',
    dataIndex: 'ifName',
    flex:      1
  }],
  
  tbar: [
    { xtype: 'button', text: 'New' },
    '|','Double click to Edit','->',
    { xtype: 'button', itemId: 'refresh', icon: '/resources/images/button_icons/table_refresh.png'}
  ]
});