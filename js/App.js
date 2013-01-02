define([
    'jquery',
    'backbone',
    'text!layout/layout.html',
    'modules/boilerplate/Module'
], function($, Backbone, layout, Boilerplate) {

    var App = Backbone.View.extend({
        el: '#layout',
        initialize: function () {
            var B = new Boilerplate();
        },
        render: function () {
            this.$el.html(layout);

            return this;
        }
    });

    return App;
});