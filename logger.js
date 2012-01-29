logger = new Object({
  EMERGENCY: 0,
  ALERT:     1,
  CRITICAL:  2,
  ERROR:     3,
  WARNING:   4,
  NOTICE:    6,
  INFO:      7,
  DEBUG:     8,
  
  _logLevel: 8,
  
  setLogLevel: function(level){
    if(level > this.DEBUG){level = this.DEBUG;}
    if(level < this.EMERGENCY){level = this.EMERGENCY;}
    
    this._logLevel = level;
  },
  
  info: function(msg){
    this._log(this.INFO,msg);
  },
  
  debug: function(msg){
    this._log(this.DEBUG,msg);
  },
  
  _log: function(level,msg){
    if(level > this._logLevel){return;}
    if(window.console && window.console.log){
      window.console.log(msg);
    }
  },
  
  // This function is useful when you want to what the state of an object was at a given time.
  //  Passing a object point to any of the log functions works, but the console will show the current state of the 
  //  object.  So if you are printing in an objects constructor, you should stringify the object.
  stringify: function(obj,indent){
    indent        = indent || '\t';
    
    if(obj === null){return 'null';}
    if(obj === undefined){return 'undefined';}
    
    if(typeof(obj) === 'object'){
      if(obj.length){
        //probably an array
        var props = ['['];
        for(var i = 0; i < obj.length; i++){
          // we only go one level deep on purpose
          props.push(i+": "+this._convertObj(obj[i]));
        }
        return props.join('\n'+indent)+']';
      }else {
        //probably a hash
        var props = ['{'];
        for(var i in obj){
          // we only go one level deep on purpose
          props.push(i+": "+this._convertObj(obj[i]));
        }
        return props.join('\n'+indent)+'}';
      }
    }else if(typeof(obj) === 'function'){
      return 'function';
    }else if(typeof(obj) === 'string'){
      return '"'+obj+'"';
    }
    
    // we don't know lets hope it can be converted to a string
    return obj;
  },
  
  _convertObj: function(obj){
    if(obj === null){return 'null';}
    if(obj === undefined){return 'undefined';}
    if(typeof(obj)==='boolean'){return obj.toString();}
    if(typeof(obj)==='string'){return '"'+obj+'"';}
    if(typeof(obj)==='function'){return 'function';}
    if(typeof(obj)==='object'&&obj.length&&obj.join){return 'array';}
    if(typeof(obj)==='object'){return 'object';}
    
    return ''+obj;
  }
});