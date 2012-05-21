Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip','interface.IpEditor'],
  stores: ['ContextIps','Ips'],
  models: ['IpInterface'],
  
  refs: [{
    ref:      'deleteButton',
    selector: 'interface-ip button[action=delete]'
  },{
    ref:      'formDeleteButton',
    selector: 'interface-ip-editor button[action=delete]'
  },{
    ref:      'grid',
    selector: 'interface-ip'
  }],
  
  init: function() {
    this.getIpInterfaceModel().getProxy().addListener('exception', this.processModelException, this);
    this.control({
      'interface-ip': {
        beforeshow: this.refresh,
        beforerender: this.refresh,
        itemdblclick: this.openEditor,
        selectionchange: {
          fn: function (selected, opts) {
            this.getDeleteButton().setDisabled(selected.getCount() === 0);
          }
        }
      },
      'interface-ip-editor button[action=save]': {
        click: this.updateRecord
      },
      'interface-ip-editor button[action=close]': {
        click: this.closeEditor
      },
      'interface-ip-editor button[action=delete]': {
        click: this.deleteRecordAndCloseEditor
      },
      'interface-ip button[action=add]': {
        click: this.newEditor
      },
      'interface-ip button[action=refresh]': {
        click: this.refresh
      },
      'interface-ip button[action=delete]': {
        click: this.deleteRecord
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('interface-ip-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('interface-ip-editor').down('form').loadRecord(this.getIpInterfaceModel().create({}));
    this.getFormDeleteButton().hide();
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getContextIpsStore().load();
    this.getIpsStore().load();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if( record.get('id') == 0 ){
      // must add the item to the store
      this.getIpsStore().add(record);
    }

    win.close();
  },
  
  deleteRecordAndCloseEditor: function(button){
    this.deleteRecord(button);
    button.up('window').close();
  },
  
  deleteRecord: function(button){
    var record  = this.getGrid().getSelectionModel().getSelection()[0];
    logger.debug(record);
    var store  = this.getIpsStore();
    if (record) {
      store.remove(record);
    }
  },
  
  processModelException: function(proxy, response, options) {
      // response contains responseText, which has the message
      // but in unparsed Json (see below)
      console.log(proxy, response, options);
      var data = Ext.decode(response.responseText);
      logger.debug(data.message);
      options.records[0].reject();
      this.getIpsStore().remove(options.records[0]);
  }
});
