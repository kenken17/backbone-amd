'use strict';

require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        text: 'libs/require/text',
        layout: '../layout',
        modules: '../modules'
    }
});

// Start the app, by Routing to the correct section
require([
    'App',
    'Router'
], function (App, Router) {
    var MyApp = new App();

    MyApp.render();

    Router.initialize();
});