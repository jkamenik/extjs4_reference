Ext.define('WebUI.controller.ContextIp', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.ContextIp'],
  stores: ['ContextIps'],
  models: ['IpInterface'],
  
  refs: [{
    ref:      'update',
    selector: 'interface-context-ip button[text=Edit]'
  }],
  
  init: function() {
    this.control({
      'interface-context-ip': {
        itemdblclick: this.openEditor
      },
      'interface-context-ip-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-context-ip-editor button[action=close]': {
        click: this.closeEditor
      },
      'interface-context-ip button[text=Edit]': {
        click: this.openEditor
      },
      'interface-context-ip button[text=New]': {
        click: this.newEditor
      },
      'interface-context-ip button[text=Refresh]': {
        click: this.refresh
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('interface-context-ip-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-context-ip-editor').down('form').loadRecord(this.getIpInterfaceModel().create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getContextIpsStore().load();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if(test.isEmpty(record.get('id'))){
      // must add the time to store
      var id = this.getContextIpsStore().max('id') || 0;
      record.set('id',id);
      this.getContextIpsStore().add(record);
    }

    win.close();
  }
});
