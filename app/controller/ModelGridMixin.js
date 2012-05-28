/*
 Standard grid behaviors like add/remove/update/refresh
*/
Ext.define('WebUI.controller.ModelGridMixin', {
  /*
    Registers callbacks and should be called from the controllers "init" method
  
    items - hash
      grid   - the string of the grid widget id
      editor - the string of the editor widget id
      store  - the store object
      model  - the model object
   */
  initModelGrid: function(items){
    this.modelGridModel  = items.model;
    this.modelGridStore  = items.store;
    this.modelGridGrid   = items.grid;
    this.modelGridEditor = items.editor;
    
    /* todo: just use references.  This was just a copy and paste, but controls shouldn't be used
             in mixins so, we should detail the references to create and then just use those to bind
             events
    */
    var controls = {};
    controls[this.modelGridGrid] = {
      beforeshow: this.refresh,
      beforerender: this.refresh,
      itemdblclick: this.openEditor
    };
    controls[this.modelGridEditor+' button[action=save]'] = {
      click: this.updateRecord
    };
    controls[this.modelGridEditor+' button[action=close]'] = {
      click: this.closeEditor      
    };
    controls[this.modelGridEditor+' button[action=delete]'] = {
      click: this.deleteRecordAndCloseEditor
    };
    controls[this.modelGridGrid+' button[action=add]'] = {
      click: this.newEditor
    };
    controls[this.modelGridGrid+' button[action=refresh]'] = {
      click: this.refresh
    };
    controls[this.modelGridGrid+' button[action=delete]'] = {
      click: this.deleteRecord
    };
    
    this.control(controls);
  },
  
  openEditor: function(grid,record){
    Ext.widget(this.modelGridEditor).down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget(this.modelGridEditor).down('form').loadRecord(this.modelGridModel.create({}));
    this.getFormDeleteButton().hide();
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    logger.info('refresh '+this.id);
    
    this.modelGridStore.load();
  },
  
  updateRecord: function(button){
    logger.info('updateRecord ' + this.id);
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    logger.debug(record);
    logger.debug(form.getValues());
    
    record.set(form.getValues());
    
    if( record.get('id') == 0 ){
      // must add the item to the store
      this.modelGridStore.add(record);
    }

    win.close();
  },
  
  deleteRecordAndCloseEditor: function(button){
    this.deleteRecord(button);
    button.up('window').close();
  },
  
  deleteRecord: function(button){
    var grid    = Ext.ComponentQuery.query(this.modelGridGrid)[0];
    var record  = grid.getSelectionModel().getSelection()[0];
    
    logger.debug(record);
    var store  = this.modelGridStore;
    if (record) {
      store.remove(record);
    }
  }
});