describe('WebUI.lib',function(){
  describe('isBlank',function(){
    it('should return true for undefined',function(){
      expect(test.isBlank(undefined)).toBeTruthy();
    });
    
    it('should return true for null',function(){
      expect(test.isBlank(null)).toBeTruthy();
    });
    
    
    it('should return true for ""',function(){
      expect(test.isBlank('')).toBeTruthy();
    });
  
    it('should return true for " "',function(){
      expect(test.isBlank(' ')).toBeTruthy();
    });
    
    it('should return false for "a"',function(){
      expect(test.isBlank('a')).toBeFalsy();
    });
  
    it('should return true for []',function(){
      expect(test.isBlank([])).toBeTruthy();
    });
    
    it('should return false for [1]',function(){
      expect(test.isBlank([1])).toBeFalsy();
    });
  
    it('should return false for {}',function(){
      expect(test.isBlank({})).toBeFalsy();
    });
  });
});