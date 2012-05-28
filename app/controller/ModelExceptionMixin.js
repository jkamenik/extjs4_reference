Ext.define('WebUI.controller.ModelExceptionMixin', {
  
  /*
    Method that should be called from the "init" method of the controller.  We need to be
    passed the model and store to store deal with events for.
  */
  initModelException: function(model, matchingStore){
    logger.info("Init ModelException");
    logger.debug(arguments);
    
    this.modelExceptionModel = model;
    this.modelExceptionStore = matchingStore;
    
    model.getProxy().addListener('exception', this.processModelException, this);
  },
  
  processModelException: function(proxy, response, options) {
    // response contains responseText, which has the message
    // but in unparsed Json (see below)
    logger.error('Model exception');
    logger.debug(arguments);
    
    var data = Ext.decode(response.responseText);
    logger.info(data.message);
    Ext.MessageBox.alert('Error',data.message);
    
    options.records[0].reject();
    
    // new invalid records can be removed
    if(options.records[0].getId() <= 0){
      this.modelExceptionStore.remove(options.records[0]);
    }
  }
});