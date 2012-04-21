// allows changes in the Ethernet store to popigate to the IP views since there is a dependant column
Ext.define('WebUI.controller.EthernetIps', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip'],
  stores: ['Ethernets'],
  
  init: function() {
    var regChanger = true; // to prevent registering the function more then once
    
    this.control({
      'interface-ip': {
        afterrender: function(view){
          if(regChanger){
            this.getEthernetsStore().on('datachanged',function(){
              view.getView().refresh();
            },this);
          }
          regChanger = false;
        }
      }
    })
  }
});