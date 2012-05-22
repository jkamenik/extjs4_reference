Ext.define('WebUI.view.interface.Arp',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-arp',
  
  store: 'Arps',
  
  title: 'Arp Entries',
  
  columns: [{
    text:      'IP Address',
    dataIndex: 'address',
    flex:      1
  },{
    text:      'Ethernet Address',
    dataIndex: 'ethernet',
    flex:      1
  },{
    text:      'Permanent',
    dataIndex: 'userDefined',
    flex:      1
  }],
  
  tbar: [
    {
      xtype:   'button',
      action:  'add',
      tooltip: 'Add Interface',
      iconCls: 'icon-add'
    },{
      xtype:   'button',
      action:  'delete',
      tooltip: 'Delete Interface',
      iconCls: 'icon-delete',
      disabled: true
    },'->',{
      xtype:   'button',
      action:  'refresh',
      tooltip: 'Refresh',
      iconCls: 'icon-refresh'
    }
  ]
});
