Ext.define('WebUI.view.NavBar',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.nav-bar',
  
  store: 'NavBar',
  
  title: 'Nav Bar',
  
  features: [{
    id: 'group',
    ftype: 'groupingsummary',
    groupHeaderTpl: '{[values.name == "" ? "" : values.name]}<span class="{[values.name == "" ? "other" : ""]}"></span>',
    hideGroupedHeader: true,
    enableGroupingMenu: false
  }],
      
  columns: [
    { text: 'Group', dataIndex: 'group', flex: 1 },
    { text: 'Text',  dataIndex: 'text',  flex: 1 },
    { text: 'Panel', dataIndex: 'panel', flex: 1 },
    { text: 'Link',  dataIndex: 'link',  flex: 1 }
  ],
  
  tbar: [
    {
      xtype:   'button',
      action:  'add',
      tooltip: 'Add Nav Item',
      iconCls: 'icon-add'
    },{
      xtype:   'button',
      action:  'delete',
      tooltip: 'Delete Nav Item',
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
