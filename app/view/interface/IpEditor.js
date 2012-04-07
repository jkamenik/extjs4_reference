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
        name:       'ip',
        fieldLabel: 'IP',
        allowBlank: false
      },{
        xtype:      'textfield',
        name:       'mask',
        fieldLabel: 'Mask'
      },{
        xtype:        'combobox',
        store:        'Ethernets',
        displayField: 'name',
        valueField:   'id',
        name:         'ethernet_id',
        fieldLabel:   'Ethernet'
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