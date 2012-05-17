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
        fieldLabel: 'Gateway'
      }],
      buttons: [{
        action:  'save',
        tooltip: 'Submit Changes',
        iconCls: 'icon-ok',
        formBind: true
      },{
        action:  'close',
        tooltip: 'Cancel Changes',
        iconCls: 'icon-cancel',
      }]
    }]
});
