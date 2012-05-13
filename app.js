Ext.application({
    name: 'WebUI',
    autoCreateViewport: true,
    
    requires: [
      'logger',
      'WebUI.OEM',
      'WebUI.lib'
    ],
    
    // only include controllers.  Controllers include views
    controllers: [
      'NavController',
      'Arps',
      'Ips',
      'Ethernets',
      'Route'
      // 'EthernetIps'
    ]
});
