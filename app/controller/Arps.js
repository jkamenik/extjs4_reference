Ext.define('WebUI.controller.Arps', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Arp','interface.ArpEditor'],
  stores: ['Arps'],
  models: ['Arp'],
  
  refs: [{
    ref:      'deleteButton',
    selector: 'interface-arp button[action=delete]'
  },{
    ref:      'grid',
    selector: 'interface-arp'
  }],
  
  init: function() {
    this.control({
      'interface-arp': {
        beforeshow: this.refresh,
        itemdblclick: this.openEditor,
        selectionchange: {
          fn: function (selected, opts) {
            this.getDeleteButton().setDisabled(selected.getCount() === 0);
          }
        }
      },
      'interface-arp-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-arp-editor button[action=close]': {
        click: this.closeEditor
      },
      'interface-arp button[action=add]': {
        click: this.newEditor
      },
      'interface-arp button[itemId=refresh]': {
        click: this.refresh
      },
      'interface-arp button[action=delete]': {
        click: this.deleteRecord
      }
    });
  },

  openEditor: function(grid,record){
    Ext.widget('interface-arp-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-arp-editor').down('form').loadRecord(this.getArpModel().create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getArpsStore().load();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if( record.get('id') == 0 ){
      // must add the item to the store
      this.getArpsStore().add(record);
    }

    win.close();
  },
  
  deleteRecord: function(button){
    var record  = this.getGrid().getSelectionModel().getSelection()[0];
    logger.debug(record);
    var store  = this.getArpsStore();
    if (record) {
      store.remove(record);
    }
  }
});
