Ext.define('WebUI.controller.Route', {
  extend: 'Ext.app.Controller',
  
  views:  ['Route','RouteEditor'],
  stores: ['Route'],
  models: ['Route'],
  
  refs: [{
    ref:      'update',
    selector: 'static-route button[text=Edit]'
  }],
  
  init: function() {
    this.control({
      'static-route': {
        itemdblclick: this.openEditor
      },
      'static-route-editor button[action=save]': {
        click: this.updateRecord
      },
      'static-route-editor button[action=close]': {
        click: this.closeEditor
      },
      'static-route button[text=Edit]': {
        click: this.openEditor
      },
      'static-route button[text=New]': {
        click: this.newEditor
      },
      'static-route button[itemId=refresh]': {
        click: this.refresh
      }
    });
    
  },

  openEditor: function(grid,record){
    Ext.widget('static-route-editor').down('form').loadRecord(record);
  },
  newEditor: function(){
    Ext.widget('static-route-editor').down('form').loadRecord(this.getModel('Route').create({}));
  },
  closeEditor: function(button){
    button.up('window').close();
  },
  
  refresh: function(button){
    this.getRouteStore().refresh();
  },
  
  updateRecord: function(button){
    var win    = button.up('window');
    var form   = win.down('form');
    var record = form.getRecord();
    
    record.set(form.getValues());
    
    if(test.isEmpty(record.get('id'))){
      // must add the time to store
      var id = this.getRouteStore().max('id') || 0;
      record.set('id',id);
      this.getRouteStore().add(record);
    }

    win.close();
    this.getRouteStore().sync();
  }
});
