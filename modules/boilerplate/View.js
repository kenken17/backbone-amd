define([
    'Base',
    'jquery',
    'backbone',
    'text!modules/boilerplate/style.less'
], function (Base, $, Backbone, style) {

    var View = Backbone.View.extend({
        initialize: function () {
            console.log('This is a View.');
        },
        render: function (opts) {
            return this;
        }
    });

    return View;
});