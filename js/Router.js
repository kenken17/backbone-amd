define([
    'jquery',
    'backbone'
], function($, Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "main"
        },
        main: function() {
            console.log('Router started.');
        }
    });

    var initialize = function() {
        var router = new AppRouter();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});