Ext.define('WebUI.view.NavBarEditor', {
  extend: 'Ext.window.Window',
  alias : 'widget.nav-bar-editor',

  title : 'Edit Nav',
  layout: 'fit',
  autoShow: true,
  
  items: [{
    xtype: 'form',
    items: [{
      xtype:      'textfield',
      name:       'group',
      fieldLabel: 'Group',
      allowBlank: false
    },{
      xtype:      'textfield',
      name:       'text',
      fieldLabel: 'Text',
      allowBlank: false
    },{
      xtype:      'textfield',
      name:       'panel',
      fieldLabel: 'Panel'
    },{
      xtype:      'textfield',
      name:       'link',
      fieldLabel: 'Link'
    }],
    tbar: [{
      xtype: 'button',
      action:  'save',
      tooltip: 'Submit Changes',
      iconCls: 'icon-ok',
      formBind: true
    },{
      xtype: 'button',
      action:  'close',
      tooltip: 'Cancel Changes',
      iconCls: 'icon-cancel',
    }]
  }]
});
