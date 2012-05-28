Ext.define('WebUI.controller.Route', {
  extend: 'Ext.app.Controller',
  
  views:  ['Route','RouteEditor'],
  stores: ['Route'],
  models: ['Route'],
  
  refs: [{
    ref:      'deleteButton',
    selector: 'static-route button[action=delete]'
  },{
    ref:      'grid',
    selector: 'static-route'
  }],
  
  init: function() {
    this.initModelException(this.getRouteModel(),this.getRouteStore());
    
    this.control({
      'static-route': {
        beforeshow: this.refresh,
        selectionchange: this.selectionchange
      },
      'static-route-editor button[action=save]': {
        click: this.updateRecord
      },
      'static-route-editor button[action=close]': {
        click: this.closeEditor
      },
      'static-route button[action=add]': {
        click: this.newEditor
      },
      'static-route button[action=refresh]': {
        click: this.refresh
      },
      'static-route button[action=delete]': {
        click: this.deleteRecord
      }
    });
    
  },

  selectionchange: function(selected, opts){
    var disable = true;
    if ( selected.getCount() != 0 )
    {
      var record  = this.getGrid().getSelectionModel().getSelection()[0];
      disable = record.get('doNotExport');
    }
    this.getDeleteButton().setDisabled(disable);
  },

  openEditor: function(grid,record){
    Ext.widget('static-route-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('static-route-editor').down('form').loadRecord(this.getRouteModel().create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getRouteStore().load();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if( record.get('id') == 0 ){
      // must add the item to the store
      this.getRouteStore().add(record);
    }

    win.close();
  },
  
  deleteRecord: function(button){
    var record  = this.getGrid().getSelectionModel().getSelection()[0];
    logger.debug(record);
    var store  = this.getRouteStore();
    if (record) {
      store.remove(record);
    }
  }
});
