Ext.define('WebUI.view.RouteEditor', {
    extend: 'Ext.window.Window',
    alias : 'widget.static-route-editor',

    title : 'Edit Route',
    layout: 'fit',
    autoShow: true,
    
    items: [{
      xtype: 'form',
      items: [{
        xtype:      'textfield',
        name:       'dest',
        fieldLabel: 'Destination',
        allowBlank: false
      },{
        xtype:      'textfield',
        name:       'mask',
        fieldLabel: 'Mask',
        allowBlank: false
      },{
        xtype:      'textfield',
        name:       'gateway',
        fieldLabel: 'Mask'
      }],
      buttons: [{
        text: 'Save',
        action: 'save',
        formBind: true
      },{
        text:   'Cancel',
        action: 'close'
      }]
    }]
});
