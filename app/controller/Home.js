Ext.define('WebUI.controller.Home', {
  extend: 'Ext.app.Controller',
  
  views:  ['Home'],
  stores: ['ProductInfo'],
  models: ['ProductInfo'],
  
  init: function() {
    this.control({
      'home': {
        beforeshow: this.refresh
      }
    });
    
  },
  
  refresh: function(button){
    this.getProductInfoStore().load();
  }
});
