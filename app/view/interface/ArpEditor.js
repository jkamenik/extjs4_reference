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

      this.buttons = [[{
        action:  'save',
        tooltip: 'Submit Changes',
        iconCls: 'icon-ok',
        formBind: true
        
      },{
        action:  'close',
        tooltip: 'Cancel Changes',
        iconCls: 'icon-cancel',
      }]];

      this.callParent(arguments);
    }
});
