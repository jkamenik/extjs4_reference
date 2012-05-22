Ext.define('WebUI.view.layout.Nav',{
  extend: 'Ext.tree.Panel',
  alias:  ['widget.layout-nav'],
  
  split: true,
  rootVisible: false,
  
  // this is a mojor bug in ExtJS that cannot be fixed.  Instead of being able to load a store from a file you must
  // actually instantiate a full store before the tree panel is instantiated.
  store: Ext.create('Ext.data.TreeStore', {
    fields: ['text','link','panel'],

    root: {
      expanded: true, 
      text:"root",
      children: [
        { text:'Patton Home', link: 'http://www.patton.com', leaf: true},
        {text: 'Home',      panel: 'home',      leaf: true},
        { text: 'Interface Configuration', expanded: true, children: [
          {text: 'Arp',      panel: 'interface-arp',      leaf: true},
          {text: 'Ethernet', panel: 'interface-ethernet', leaf: true},
          {text: 'IP', panel: 'interface-ip', leaf: true}
        ]},
        { text:'Static Route', panel: 'static-route', leaf: true}
      ]
    }
  }),
  
  tbar: [
    {
      xtype:   'button',
      action:  'expand',
      tooltip: 'Expand All',
      iconCls: 'icon-expand'
    },{
      xtype:   'button',
      action:  'collapse',
      tooltip: 'Collapse All',
      iconCls: 'icon-collapse'
    }
  ]
});
