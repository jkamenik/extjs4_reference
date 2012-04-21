Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip','interface.IpEditor'],
  stores: ['Ethernets','Ips'],
  models: ['Ip'],
  
  refs: [{
    ref:      'update',
    selector: 'interface-ip button[text=Edit]'
  }],
  
  init: function() {
    this.control({
      'interface-ip': {
        itemdblclick: this.openEditor
      },
      'interface-ip-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-ip-editor button[action=close]': {
        click: this.closeEditor
      },
      'interface-ip button[text=Edit]': {
        click: this.openEditor
      },
      'interface-ip button[text=New]': {
        click: this.newEditor
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('interface-ip-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-ip-editor').down('form').loadRecord(this.getModel('Ip').create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if(test.isEmpty(record.get('id'))){
      // must add the time to store
      var id = this.getIpsStore().max('id') || 0;
      record.set('id',id);
      this.getIpsStore().add(record);
    }

    win.close();
    this.getIpsStore().sync();
  }
});