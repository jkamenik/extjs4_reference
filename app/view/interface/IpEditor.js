Ext.define('WebUI.view.interface.IpEditor', {
    extend: 'Ext.window.Window',
    alias : 'widget.interface-ip-editor',

    title : 'Edit Ip',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
      this.items = [{
        xtype: 'form',
        items: [{
          xtype:      'textfield',
          name:       'ip',
          fieldLabel: 'IP'
        },{
          xtype:      'textfield',
          name:       'mask',
          fieldLabel: 'Mask'
        }]
      }];

      this.buttons = [{
        text: 'Save',
        action: 'save'
      },{
        text: 'Cancel',
        scope: this,
        handler: this.close
      }];

      this.callParent(arguments);
    }
});