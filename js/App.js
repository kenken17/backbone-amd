define([
    'jquery',
    'backbone',
    'text!layout/layout.html'
], function($, Backbone, layout) {

    var App = Backbone.View.extend({
        el: '#layout',
        render: function () {
            this.$el.html(layout);

            return this;
        }
    });

    return App;
});