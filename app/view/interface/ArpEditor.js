Ext.define('WebUI.view.interface.ArpEditor', {
    extend: 'Ext.window.Window',
    alias : 'widget.interface-arp-editor',

    title : 'Edit Arp',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
      this.items = [{
        xtype: 'form',
        items: [{
          xtype:      'textfield',
          name:       'address',
          fieldLabel: 'Address'
        },{
          xtype:      'textfield',
          name:       'ethernet',
          fieldLabel: 'Ethernet'
        },{
          xtype:      'checkbox',
          name:       'user_defined',
          fieldLabel: 'User Defined?'
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