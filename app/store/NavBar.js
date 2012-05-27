Ext.define('WebUI.store.NavBar', {
  extend:  'Ext.data.Store',
  model:   'WebUI.model.NavBar',
  
  groupField: 'group',
  getGroupString: function(instance) {
    var group = this.groupers.first();
    if (group) {
      return group.getGroupString(instance);
    }
    return instance.get('name')[0];
  },
  groupers: [{
    property: 'group',
    getGroupString: function(instance) {
      return instance.get(this.property) === this.value ? '' : instance.get(this.property);
    },
    sorterFn: function(a, b){
      var aValue = a.get(this.property);
      var bValue = b.get(this.property);
      
      if (aValue == this.value && bValue == this.value) {
        return 0;
      }
      if (aValue == this.value) {
        return -1;
      }
      if (bValue == this.value) {
        return 1;
      }
      
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    },
    value: 'Root'
  }],
  
  autoLoad: true,
  autoSync: true
});
