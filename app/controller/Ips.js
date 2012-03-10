Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip','interface.IpEditor'],
  stores: ['Ips'],
  models: ['Ip'],
  
  init: function() {
    this.control({
      'interface-ip': {
        render:       this.onPanelRendered,
        itemdblclick: this.dbClick
      },
      'interface-ip-editor button[action=save]': {
        click: this.updateRecord
      }
    });
    
  },

  onPanelRendered: function() {
    logger.debug('The panel was rendered');
  },
  
  dbClick: function(grid,record){
    Ext.widget('interface-ip-editor').down('form').loadRecord(record);
  },
  
  updateRecord: function(button){
    var win  = button.up('window');
    var form = win.down('form');
    
    form.getRecord().set(form.getValues());
    win.close();
    this.getIpsStore().sync();
  }
});