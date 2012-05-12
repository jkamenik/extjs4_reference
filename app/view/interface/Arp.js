Ext.define('WebUI.view.interface.Arp',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-arp',
  
  store: 'Arps',
  
  columns: [{
    text:      'IP Address',
    dataIndex: 'address',
    flex:      1
  },{
    text:      'Ethernet Address',
    dataIndex: 'ethernet',
    flex:      1
  },{
    text:      'User Defined',
    dataIndex: 'user_defined',
    flex:      1
  }],
  
  // This might best be a mixin
  tbar: [
    { xtype: 'button', text: 'New' },
    '|','Double click to Edit','->',
    { xtype: 'button', itemId: 'refresh', icon: '/resources/images/button_icons/table_refresh.png'}
  ]
});