Ext.application({
    name: 'WebUI',
    autoCreateViewport: true,
    
    requires: ['logger','WebUI.OEM','WebUI.lib'],
    
    controllers: ['NavController']
});