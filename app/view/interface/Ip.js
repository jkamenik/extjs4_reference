Ext.define('WebUI.view.interface.Ip',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-ip',
  
  store: 'Ips',
  
  title: 'IP Interfaces',
  
  columns: [{
    text: 'IP',
    dataIndex: 'ip',
    flex:      1
  },{
    text:      'Mask',
    dataIndex: 'mask',
    flex:      1
  },{
    text:      'Ethernet',
    dataIndex: 'ethernet.name',
    flex:      1
  }],
  
  tbar: [
    { xtype: 'button', text: 'New' },
    { xtype: 'button', text: 'Edit', disabled: true}
  ]
});