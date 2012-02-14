Ext.define("WebUI.controller.NavController",{
  extend: 'Ext.app.Controller',
  
  refs: [{
    ref:      'nav',        //Give us the getNav() function that returns the layout-nav item
    selector: 'layout-nav'
  }],
  
  init: function() {
    this.control({
      'layout-nav button[text="Expand All"]': {
        click: this.expandAll
      },
      'layout-nav button[text="Collapse All"]': {
        click: this.collapseAll
      }
    });
  },
  
  expandAll: function(){
    this.getNav().getRootNode().expand(true);
  },
  
  collapseAll: function(){
    this.getNav().getRootNode().collapseChildren(true);
  }
});