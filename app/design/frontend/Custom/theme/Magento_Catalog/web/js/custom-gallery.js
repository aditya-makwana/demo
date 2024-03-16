define([
    'jquery',
    'uiComponent',
    'matchMedia',
], function ($, Component, mediaCheck) {
    return Component.extend({
        /** @inheritdoc */
        initialize: function (config, element) {
            this._super();
            console.log(config);
            mediaCheck({
                media: '(max-width: 768px)',
                entry: function () {
                    console.log("in entry");
                }.bind(this),
                exit: function () {
                    console.log("in exit");
                }.bind(this)
            });
        },
    });
});
