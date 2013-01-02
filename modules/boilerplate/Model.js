define([
    'jquery',
    'backbone'
], function($, Backbone) {

    var AppView = Backbone.Model.extend({
        initialize: function() {
            console.log('This is a Model.');
        }
    });

    return AppView;
});