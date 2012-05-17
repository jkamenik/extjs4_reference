Ext.define('WebUI.view.Route',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.static-route',
  
  store: 'Route',
  
  title: 'Static Routes',
  
  columns: [
    {text: 'Destination', dataIndex: 'dest',    flex: 1 },
    {text: 'Netmask',     dataIndex: 'mask',    flex: 1 },
    {text: 'Gateway',     dataIndex: 'gateway', flex: 1 },
    {text: 'Flags',       dataIndex: 'flags',   flex: 1 },
    {text: 'Metric',      dataIndex: 'metric',  flex: 1 },
    {text: 'ToS',         dataIndex: 'tos',     flex: 1 },
    {text: 'Interface',   dataIndex: 'intf',    flex: 1 },
    {text: 'Source',      dataIndex: 'source',  flex: 1 }
  ],
  
  tbar: [
    {
      xtype:   'button',
      action:  'add',
      tooltip: 'Add Route',
      iconCls: 'icon-add'
    },{
      xtype:   'button',
      action:  'delete',
      tooltip: 'Delete Route',
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
