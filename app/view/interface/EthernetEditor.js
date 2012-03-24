Ext.define('WebUI.view.interface.EthernetEditor', {
    extend: 'Ext.window.Window',
    alias : 'widget.interface-ethernet-editor',

    title : 'Edit Ethernet',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
      this.items = [{
        xtype: 'form',
        items: [{
          xtype:      'textfield',
          name:       'name',
          fieldLabel: 'Name'
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