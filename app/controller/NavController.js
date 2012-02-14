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
      },
      'layout-nav': {
        select: this.itemSelected
      }
    });
  },
  
  expandAll: function(){
    this.getNav().getRootNode().expand(true);
  },
  
  collapseAll: function(){
    this.getNav().getRootNode().collapseChildren(true);
  },
  
  itemSelected: function(row,model){
    var link  = model.get('link');
    var panel = model.get('panel');

    logger.debug('item selected');
    logger.debug(link);
    logger.debug(panel);
    
    if(test.isBlank(link) && test.isBlank(panel)){
      logger.debug('Neither link nor panel defined.  Skipping...');
      return;
    }
  }
});