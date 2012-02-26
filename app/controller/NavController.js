Ext.define("WebUI.controller.NavController",{
  extend: 'Ext.app.Controller',
  
  // Controllers should add all the views that they need
  views: [
    'layout.Nav',
    'layout.Content'
  ],
  
  refs: [{
    ref:      'nav',        //Give us the getNav() function that returns the layout-nav item
    selector: 'layout-nav'
  },{
    ref:      'content',
    selector: 'layout-content'
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
    
    logger.debug(link);
    logger.debug(panel);

    if(test.isBlank(link) && test.isBlank(panel)){
      logger.debug('Neither link nor panel defined.  Skipping...');
      return;
    }
    
    if(!test.isBlank(link)){
      window.location = link;
      return;
    }
    
    var component = Ext.ClassManager.getByAlias(panel);
    logger.debug(component);
    logger.debug(this.getContent());
    if(test.isEmpty(component)){
      logger.debug('adding to panel')
      component = Ext.widget(panel);
      logger.debug(component);
      this.getContent().add(component);
    }
    this.getContent().getLayout().setActiveItem(component);
  }
});