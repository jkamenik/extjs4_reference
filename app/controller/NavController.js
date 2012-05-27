Ext.require([
  'Ext.window.MessageBox',
  'Ext.Ajax'
]);

Ext.define("WebUI.controller.NavController",{
  extend: 'Ext.app.Controller',
  
  // Controllers should add all the views that they need
  views: [
    'layout.Nav',
    'layout.Content',
    'layout.Footer',
    'layout.Header',
    
    // the error panel
    'ContentError'
  ],
  
  stores: ['ProductInfo', 'NavBar'],
  models: ['ProductInfo', 'NavBar'],
  
  refs: [{
    ref:      'nav',        //Give us the getNav() function that returns the layout-nav item
    selector: 'layout-nav'
  },{
    ref:      'content',
    selector: 'layout-content'
  }],
  
  init: function() {
    this.control({
      'layout-nav button[action=expand]': {
        click: this.expandAll
      },
      'layout-nav button[action=collapse]': {
        click: this.collapseAll
      },
      'layout-nav': {
        select: this.itemSelected,
        refresh: this.refresh,
        viewready: {
          fn: function () {
            logger.debug('Nav View Ready');
            //var el = Ext.select('.x-grid-group-hd .other', grid.getView().getEl());
            //logger.debug(el);
            //el.first().findParent('.x-grid-group-title', undefined, true).setStyle('display', 'none');
          }
        }
      },
      'layout-content button[action=save]': {
        click: this.onSave
      },
      'layout-content button[action=reboot]': {
        click: this.onReboot
      },
      'layout-content button[action=logout]': {
        click: this.onLogout
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
    
    if(test.isBlank(link) && test.isBlank(panel)){
      logger.debug('Neither link nor panel defined.  Skipping...');
      return;
    }
    
    if(!test.isBlank(link)){
      window.location = link;
      return;
    }
    
    try {
      logger.debug(panel);
      var component = this.getContent().child(panel);
      logger.debug('Component found');
      logger.debug(component);
      if(test.isEmpty(component)){
        logger.debug('adding to panel')
        component = Ext.widget(panel);
        logger.debug(component);
        this.getContent().add(component);
      }
      this.getContent().getLayout().setActiveItem(component);
    } catch(e){
      logger.error('Item could not be found');
      logger.error(e);
      this.getContent().getLayout().setActiveItem('ContentError');
    }
  },
  
  onSave: function(button){
    logger.debug( 'Save Pressed' );
    Ext.Msg.show({
      msg: 'Saving changes.',
      width:300,
      wait:true,
      waitConfig: {interval:80}
    });
    setTimeout(function(){
      // This causes the message to stay on screen for a brief time, and then automatically dismisses.
      Ext.MessageBox.hide();
    }, 1000);
    Ext.Ajax.request({
      url: '/rest/trinity_db_core/CliManagerCmd?execute',
      method: 'POST',
      jsonData: {
        cmd: 'cliCmd',
        arguments: [ 'copy running-config startup-config' ]
      }
    })
  },
  
  onReboot: function(button){
    function confirmReboot(btn){
      if ( btn == 'yes' ){
        Ext.Ajax.request({
          url: '/rest/trinity_db_core/Platform?execute',
          method: 'POST',
          jsonData: {
            cmd: 'reload',
            arguments: [ '0' ]
          }
        })
        Ext.Msg.show({
          msg: 'The unit will be unresponsive while rebooting. Please wait...',
          width:300,
          wait:true,
          waitConfig: {interval:1000},
        });
        setTimeout(function(){
          // This leaves a message up for a guess at how long it will take to reboot.
          //  We should really query the box instead to see when it is alive.
          Ext.MessageBox.hide();
        }, 50000);
      }
    };
    logger.debug( 'Reboot Pressed' );
    Ext.Msg.confirm('Confirm', 'Are you sure you want to reboot?', confirmReboot);
  },
  
  onLogout: function(button){
  }
});
