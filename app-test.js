Ext.require('Ext.app.Application');

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'WebUI',
        
        requires: ['logger','WebUI.lib'],

        launch: function() {
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});