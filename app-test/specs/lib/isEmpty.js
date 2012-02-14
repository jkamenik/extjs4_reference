describe('WebUI.lib',function(){
  describe('isEmpty',function(){
    it('should return true for undefined',function(){
      expect(test.isEmpty(undefined)).toBeTruthy();
    });
    
    it('should return true for null',function(){
      expect(test.isEmpty(null)).toBeTruthy();
    });
    
    
    it('should return true for ""',function(){
      expect(test.isEmpty('')).toBeTruthy();
    });
  
    it('should return true for " "',function(){
      expect(test.isEmpty(' ')).toBeFalsy();
    });
    
    it('should return false for "a"',function(){
      expect(test.isEmpty('a')).toBeFalsy();
    });
  
    it('should return true for []',function(){
      expect(test.isEmpty([])).toBeTruthy();
    });
    
    it('should return false for [1]',function(){
      expect(test.isEmpty([1])).toBeFalsy();
    });
  
    it('should return false for {}',function(){
      expect(test.isEmpty({})).toBeFalsy();
    });
  });
});