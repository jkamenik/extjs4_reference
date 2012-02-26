// this file overrides anything any text and certain behaviors of the App

Ext.define('WebUI.OEM.Header',{
  override: 'WebUI.view.layout.Header',
  requires: ['WebUI.view.layout.Header'],
  
  cls: 'patton-header',
  height: 100,
  
  tpl: new Ext.XTemplate('<img src="resources/images/patton.png" style="margin-top: 20px; margin-left:15px"><span style="float: right; margin-top: 5px; margin-right: 5px; color: white;">{name}</span>'),
  data: {name: 'Testing the header'}
});


// Ext.override(WebUI.view.layout.Footer,{
//   _buildFbar: function(){
//     return ['&copy; 2010 Patton Electronics Co., All rights reserved'];
//   }
// });