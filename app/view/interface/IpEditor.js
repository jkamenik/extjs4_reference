Ext.define('WebUI.view.interface.IpEditor', {
    extend: 'Ext.window.Window',
    alias : 'widget.interface-ip-editor',

    title : 'Edit Ip',
    layout: 'fit',
    autoShow: true,
    
    items: [{
      xtype: 'form',
      items: [{
        xtype:      'textfield',
        name:       'address',
        fieldLabel: 'IP',
        allowBlank: false
      },{
        xtype:      'textfield',
        name:       'netmask',
        fieldLabel: 'Mask'
      },{
        xtype:      'textfield',
        name:       'broadcast',
        fieldLabel: 'Broadcast'
      // },{
      //   xtype:        'combobox',
      //   store:        'Ethernets',
      //   displayField: 'name',
      //   valueField:   'id',
      //   name:         'ethernet_id',
      //   fieldLabel:   'Ethernet'
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