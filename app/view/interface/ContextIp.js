Ext.define('WebUI.view.interface.ContextIp',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-context-ip',
  
  store: 'ContextIps',
  
  title: 'IP Contexts',
  
  columns: [{
    text:      'UID',
    dataIndex: 'id',
    flex:      1
  },{
    text:      'Name',
    dataIndex: 'ctxName',
    flex:      1
  }],
  
  tbar: [
    { xtype: 'button', text: 'New' },
    { xtype: 'button', text: 'Refresh' },
    '|','Double click to Edit'
  ],
  
  listeners: {
    beforerender: {
      fn: function(){
        this.getStore().load();
      }
    }
  }
});
