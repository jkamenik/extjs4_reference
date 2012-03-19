Ext.define('WebUI.view.interface.Ethernet',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-ethernet',
  
  store: 'Ethernets',
  
  title: 'Ethernet Interfaces',
  
  columns: [{
    text:      'Name',
    dataIndex: 'name',
    flex:      1
  }]
});