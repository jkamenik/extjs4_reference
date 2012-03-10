Ext.define('WebUI.view.interface.Ip',{
  extend: 'Ext.grid.Panel',
  alias:  'widget.interface-ip',
  
  store: 'Ips',
  // 
  // title: 'IP Interfaces',
  // 
  // columns: [{
  //   text: 'IP',
  //   dataIndex: 'ip'
  // },{
  //   text: 'Mask',
  //   dataIndex: 'mask'
  // }]
  
  title:  'Ips',
  
  initComponent: function() {
      this.store = {
          fields: ['name', 'email'],
          data  : [
              {name: 'Ed',    email: 'ed@sencha.com'},
              {name: 'Tommy', email: 'tommy@sencha.com'}
          ]
      };

      this.columns = [
          {header: 'Name',  dataIndex: 'name',  flex: 1},
          {header: 'Email', dataIndex: 'email', flex: 1}
      ];

      this.callParent(arguments);
  }
});