Ext.define('WebUI.view.Home',{
  extend: 'Ext.panel.Panel',
  alias: 'widget.home',
  
  title: 'Home',

  layout: {
    type:  'table',
    columns:  3,
    align: 'stretch'
  },
  defaults: {
    margin: '5 5 5 5'
  },
  
  items: [{
    xtype: 'panel',
    title: 'Information',
    colspan: 3,
    items: [{
      xtype: 'dataview',
      itemSelector: 'x-panel-body',
      store:        'ProductInfo',
      autoShow: true,
      autoRender: true,
      
      tpl: [
        '<table class="infoTable x-panel-body">',
        '<tr><td class="label">Model:</td><td class="value">{model}</td></tr>',
        '<tr><td class="label">Model Description:</td><td class="value">{modelDescription}</td></tr>',
        '<tr><td class="label">System Description:</td><td class="value"></td></tr>',
        '<tr><td class="label">{buildType} Version:</td><td class="value">{version}</td></tr>',
        '<tr><td class="label">Release Date:</td><td class="value">{buildDate}</td></tr>',
        '<tr><td class="label">UTC Time:</td><td class="value">{utcTime}</td></tr>',
        '<tr><td class="label">Local Time:</td><td class="value">{localTime}</td></tr>',
        '<tr><td class="label">Up Time:</td><td class="value">{uptime}</td></tr>',
        '</table>'
      ],
      
      // Get the first item, and thats it
      collectData : function(records, startIndex){
        var record;
        record = records[0];
        return this.prepareData(record[record.persistenceProperty], startIndex, record);
      }
  
    }],
  },{
    xtype: 'panel',
    title: 'System Load',
    colspan: 2,
    items: [{
      xtype: 'dataview',
      itemSelector: ' x-panel-body',
      store:        'ProductInfo',
      autoShow: true,
      autoRender: true,
      tpl: [
        '<table class="infoTable x-panel-body">',
        '<tr><td class="label">1 minute:</td><td class="value">{oneMinLoad}%</td></tr>',
        '<tr><td class="label">5 minute:</td><td class="value">{fiveMinLoad}%</td></tr>',
        '<tr><td class="label">15 minute:</td><td class="value">{fifteenMinLoad}%</td></tr>',
        '<tr><td class="label">Total RAM:</td><td class="value">{totalRam} MB</td></tr>',
        '<tr><td class="label">Free RAM:</td><td class="value">{freeRam} MB</td></tr>',
        '</table>'
      ],
      
      // Get the first item, and thats it
      collectData : function(records, startIndex){
        var record;
        record = records[0];
        return this.prepareData(record[record.persistenceProperty], startIndex, record);
      }
  
    }],
  }],
});
