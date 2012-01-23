Ext.define('WebUI.view.layout.Nav',{
  extend: 'Ext.tree.Panel',
  alias: 'widget.layout-nav',
  
  split: true,
  rootVisible: false,
  
  fields: ['text','link','panel'],
  
  root: {
    expanded: true, 
    text:"",
    user:"",
    status:"",
    children: [
      { text:'Google', link: 'http://google.com', leaf: true},
      { text: 'Interfaces', expanded: true, children: [
        {text: 'Ethernet', panel: 'interface-ethernet', leaf: true},
        {text: 'IP', panel: 'interface-ip', leaf: true}
      ]}
    ]
  }
});