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
        name:       'ifName',
        fieldLabel: 'Name',
        allowBlank: false
      },{
        xtype:      'textfield',
        name:       'address',
        fieldLabel: 'IP'
      },{
        xtype:      'textfield',
        name:       'mask',
        fieldLabel: 'Mask'
      },{
        xtype:        'combobox',
        store:        'ContextIps',
        displayField: 'ctxName',
        valueField:   'id',
        name:         'parentId',
        fieldLabel:   'IP Context',
        allowBlank:   false
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
