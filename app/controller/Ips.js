Ext.define('WebUI.controller.Ips', {
  extend: 'Ext.app.Controller',
  
  views:  ['interface.Ip','interface.IpEditor'],
  stores: ['ContextIps','Ips'],
  models: ['IpInterface'],
  
  mixins: {
    modelException: 'WebUI.controller.ModelExceptionMixin',
    modelGrid:      'WebUI.controller.ModelGridMixin'
  },
  
  refs: [{
    ref:      'deleteButton',
    selector: 'interface-ip button[action=delete]'
  },{
    ref:      'formDeleteButton',
    selector: 'interface-ip-editor button[action=delete]'
  },{
    ref:      'grid',
    selector: 'interface-ip'
  }],
  
  init: function() {
    this.initModelException(this.getIpInterfaceModel(),this.getIpsStore());
    this.initModelGrid({
      grid:   'interface-ip',
      editor: 'interface-ip-editor',
      store:  this.getIpsStore(),
      model:  this.getIpInterfaceModel()
    });

    this.control({
      'interface-ip': {
        selectionchange: {
          fn: function (selected, opts) {
            this.getDeleteButton().setDisabled(selected.getCount() === 0);
          }
        }
      }
    });
  },
  
  refresh: function(button){
    // first do the original refresh
    this.mixins.modelGrid.refresh.apply(this,arguments);
    this.getContextIpsStore().load();
  },
});
