Ext.define('WebUI.view.interface.Ip',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-ip',
  
  store: 'Ips',
  
  title: 'IP Interfaces',
  
  columns: [{
    text: 'Name',
    dataIndex: 'ifName',
    flex:      1
  },{
    text: 'IP',
    dataIndex: 'address',
    flex:      1
  },{
    text:      'Mask',
    dataIndex: 'mask',
    flex:      1
  },{
    text:      'IP Context',
    dataIndex: 'parentId',
    renderer: function(value){
      return Ext.getStore('ContextIps').getById(value).get('ctxName');
    },
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
    },'|','Double click to Edit','->',{
      xtype:   'button',
      action:  'refresh',
      tooltip: 'Refresh',
      iconCls: 'icon-refresh'
    }
  ]
});
