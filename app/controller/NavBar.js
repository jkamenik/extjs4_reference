Ext.define('WebUI.controller.NavBar', {
  extend: 'Ext.app.Controller',
  
  views:  ['NavBar','NavBarEditor'],
  stores: ['NavBar'],
  models: ['NavBar'],
  
  refs: [{
    ref:      'deleteButton',
    selector: 'nav-bar button[action=delete]'
  },{
    ref:      'grid',
    selector: 'nav-bar'
  }],
  
  init: function() {
    this.initModelException(this.getNavBarModel(),this.getNavBarStore());

    this.control({
      'nav-bar': {
        beforeshow: this.refresh,
        selectionchange:  {
          fn: function (selected, opts) {
            this.getDeleteButton().setDisabled(selected.getCount() === 0);
          }
        }
      },
      'nav-bar-editor button[action=save]': {
        click: this.updateRecord
      },
      'nav-bar-editor button[action=close]': {
        click: this.closeEditor
      },
      'nav-bar button[action=add]': {
        click: this.newEditor
      },
      'nav-bar button[action=refresh]': {
        click: this.refresh
      },
      'nav-bar button[action=delete]': {
        click: this.deleteRecord
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('nav-bar-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('nav-bar-editor').down('form').loadRecord(this.getNavBarModel().create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getNavBarStore().load();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if( record.get('id') == 0 ){
      // must add the item to the store
      this.getNavBarStore().add(record);
    }

    win.close();
  },
  
  deleteRecord: function(button){
    var record  = this.getGrid().getSelectionModel().getSelection()[0];
    logger.debug(record);
    var store  = this.getNavBarStore();
    if (record) {
      store.remove(record);
    }
  }
});
