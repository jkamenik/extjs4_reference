Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip'],
  stores: ['Ips'],
  models: ['Ip'],
    

  init: function() {
    this.control({
      'interface-ip': {
        render:       this.onPanelRendered,
        itemdblclick: this.dbClick
      }
    });
  },

  onPanelRendered: function() {
    logger.debug('The panel was rendered');
  },
  
  dbClick: function(grid,record){
    logger.debug('User dbClicked on item');
    logger.debug(record);
  }
});