describe('logger',function(){
  it('should exist',function(){
    expect(logger).toBeDefined();
  });
  
  it('should have a debug method',function(){
    expect(logger.debug).toBeDefined();
  });
  
  it('should have a info method',function(){
    expect(logger.info).toBeDefined();
  });
  
  describe('setLogLevel',function(){
    var ensureLevel = function(level,expected){
      logger.setLogLevel(level);
      expect(logger._logLevel).toEqual(expected);
    };
    
    it('should not allow levels higher then EMERGENCY',function(){
      ensureLevel(logger.EMERGENCY,logger.EMERGENCY);
      ensureLevel(logger.EMERGENCY-1,logger.EMERGENCY);
      ensureLevel(logger.EMERGENCY-100,logger.EMERGENCY);
    });
    
    it('should not allow levels lower then DEBUG',function(){
      ensureLevel(logger.DEBUG,logger.DEBUG);
      ensureLevel(logger.DEBUG+1,logger.DEBUG);
      ensureLevel(logger.DEBUG+100,logger.DEBUG);
    });
  })
});