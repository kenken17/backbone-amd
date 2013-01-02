define([
    'jquery',
    'ViewModel'
], function($, VM) {
    var parser = new(less.Parser);
    console.log('LESS parser initiated.');

    var Base = function () {
        var parse = function(opts) {
            parser.parse(opts.style, function (err, tree) {
                if (err) { return console.error(err); }

                // Append style
                if (!$('style').length) {
                    $('head').append($('<style />'));
                } else {
                    $('style').append(tree.toCSS());
                }
            });
        };

        var getVideModel = function() {
            return new VM();
        };

    };

    return Base;
});