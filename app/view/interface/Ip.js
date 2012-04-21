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
    dataIndex: 'ethernet_id',
    renderer: function(value){
      logger.debug('Rendering IP row');
      logger.debug(Ext.getStore('Ethernets'));
      return Ext.getStore('Ethernets').getById(value).get('name');
    },
    flex:      1
  }],
  
  tbar: [
    { xtype: 'button', text: 'New' },
    '|','Double click to Edit'
  ]
});