Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip','interface.IpEditor'],
  stores: ['Ips'],
  models: ['Ip'],
  
  refs: [{
    ref:      'update',
    selector: 'interface-ip button[text=Edit]'
  }],
  
  init: function() {
    this.control({
      'interface-ip': {
        itemdblclick:    this.openEditor,
        selectionchange: this.allowEdit,
      },
      'interface-ip-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-ip button[text=Edit]': {
        click: this.newEditor
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('interface-ip-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-ip-editor').show();
  },
  
  updateRecord: function(button){
    var win  = button.up('window');
    var form = win.down('form');
    
    form.getRecord().set(form.getValues());
    win.close();
    this.getIpsStore().sync();
  },
  
  allowEdit: function(model,selection){
    this.getUpdate().setDisabled(selection.length == 0)
  }
});