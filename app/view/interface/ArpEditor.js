Ext.define('WebUI.view.interface.ArpEditor', {
  extend: 'Ext.window.Window',
  alias : 'widget.interface-arp-editor',

  title : 'Edit Arp',
  layout: 'fit',
  autoShow: true,

  items: [{
    xtype: 'form',
    items: [{
      xtype:      'textfield',
      name:       'address',
      fieldLabel: 'Address'
    },{
      xtype:      'textfield',
      name:       'ethernet',
      fieldLabel: 'Ethernet'
    }],
    tbar: [{
      xtype:   'button',
      action:  'save',
      tooltip: 'Submit Changes',
      iconCls: 'icon-ok',
      formBind: true
      
    },{
      xtype:   'button',
      action:  'close',
      tooltip: 'Cancel Changes',
      iconCls: 'icon-cancel',
    }]
  }]
});
