Ext.define('WebUI.controller.Arps', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Arp','interface.ArpEditor'],
  stores: ['Arps'],
  models: ['Arp'],
  
  init: function() {
    this.control({
      'interface-arp': {
        itemdblclick: this.openEditor
      },
      'interface-arp button[text=Edit]': {
        click: this.openEditor
      },
      'interface-arp-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-arp button[itemId=refresh]': {
        click: this.refresh
      }
    });
  },

  openEditor: function(grid,record){
    Ext.widget('interface-arp-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-arp-editor').down('form').loadRecord(this.getModel('Arp').create({}));
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    logger.debug(record);
    
    if(test.isEmpty(record.getId())){
      this.getArpsStore().add(record);
    }
    
    win.close();
    this.getArpsStore().sync();
  },
  
  refresh: function(button){
    this.getArpsStore().load();
  }
});