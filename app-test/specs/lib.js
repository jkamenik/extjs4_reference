describe('WebUI.lib',function(){
  it('should exist',function(){
    expect(WebUI.lib).toBeDefined();
  });
  
  it('should also be accessible via test',function(){
    expect(WebUI.lib).toEqual(test);
  });
  
  it('should also be accessible via convert',function(){
    expect(WebUI.lib).toEqual(convert);
  });
});