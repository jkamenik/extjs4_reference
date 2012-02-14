Ext.ns("WebUI");
/*
 * General libraries for WebUI
 */

WebUI.lib = {
  restURL: function(model,id){
    var url = WebUI.ROOT_URL + '/' + model;
    
    if(!WebUI.lib.isNull(id)){
      url = url + "/" + id;
    }
    
    return url;
  },

  isObject: function(item){
    // object item, use instanceof to see if Array is in the chain
    return item instanceof Object;
  },
  
  isArray: function(item){
    // object item, use instanceof to see if Array is in the chain
    return item instanceof Array;
  },
  
  isString: function(item){
    // primitive item, use typeof
    return typeof(item) === 'string' || item instanceof String;
  },
  
  isNumber: function(item){
    // primitive item, use typeof
    return typeof(item) === 'number' || item instanceof Number;
  },
  
  isNull: function(item){
    var undef; // true undefined
    return (item === null || item === undef);
  },
  
  isEmpty: function(item){
    if(this.isNull(item)){
      return true;
    }
    
    return item.length === 0;
  },
  
  isBlank: function(item){
    if(this.isEmpty(item)){
      return true;
    }
    
    return /^\s*$/.test(item)
  },

  String: function(item){
    if(this.isObject(item) && !this.isArray(item)){
      return item.name || '';
    }

    return ''+item;
  },
  
  Int: function(item){
    if(typeof(item) === 'boolean'){
      if(item){ return 1; }
      return 0;
    }
    // this prevents 09 from being parsed as an octive
    return parseInt(item,10);
  },
  
  Array: function(item){
    if(this.isArray(item)){
      return item;
    }

    if(this.isString(item)){
      return item.split("\n");
    }

    return [item];
  }
};

test    = WebUI.lib;
convert = WebUI.lib;