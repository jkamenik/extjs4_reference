Ext.define('WebUI.view.layout.Nav',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.layout-nav',
  
  store: 'NavBar',
  border: false,
  margin: '1 0 0 0',
  
  features: [{
    id: 'group',
    ftype: 'groupingsummary',
    groupHeaderTpl: '{[values.name == "" ? "" : values.name]}<span id="{[values.name == "" ? "other" : ""]}"></span>',
    hideGroupedHeader: true,
    enableGroupingMenu: false
  }],
      
  columns: [
    { text: '', dataIndex: 'group', flex: 1 },
    { text: '', dataIndex: 'text',  flex: 1 },
  ],
  
  // Add a tbar with a disabled button for the visual effect
  tbar: [
    {
      xtype: 'button',
      disabled: true
    }
  ]
});
