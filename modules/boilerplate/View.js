define([
    'Base',
    'jquery',
    'backbone',
    'modules/boilerplate/Model',
    'text!modules/boilerplate/style.less'
], function(Base, $, Backbone, Model, style) {

    var View = Base.extend({
        initialize: function() {
            console.log('This is a View.');
        },
        render: function(opts) {
            var MyModel = new Model();

            opts = opts || {};
            opts.style = style;

            View.__super__.render.call(this, opts);
        }
    });

    return View;
});