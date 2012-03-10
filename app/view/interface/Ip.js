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
  }]
});