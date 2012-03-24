Ext.define('WebUI.controller.Ethernets', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ethernet','interface.EthernetEditor'],
  stores: ['Ethernets'],
  models: ['Ethernet'],
  
  refs: [{
    ref:      'update',
    selector: 'interface-ethernet button[text=Edit]'
  }],
  
  init: function() {
    this.control({
      'interface-ethernet': {
        itemdblclick: this.openEditor
      },
      'interface-ethernet-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-ethernet button[text=Edit]': {
        click: this.openEditor
      },
      'interface-ethernet button[text=New]': {
        click: this.newEditor
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('interface-ethernet-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-ethernet-editor').down('form').loadRecord(this.getModel('Ethernet').create({}));
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    var store  = this.getEthernetsStore();
    
    record.set(form.getValues());
    
    if(test.isEmpty(record.get('id'))){
      // must add the time to store
      var id = store.max('id') || 0;
      record.set('id',id);
      store.add(record);
    }

    win.close();
    store.sync();
  }
});