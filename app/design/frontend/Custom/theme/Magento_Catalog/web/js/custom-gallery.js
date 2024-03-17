define([
    'jquery',
    'uiComponent',
    'matchMedia',
    'mage/template',
    'text!Magento_Catalog/template/product/view/gallery/item.html',
    'slick',
], function ($, Component, mediaCheck, mageTemplate, imgTemplate) {
    return Component.extend({
        defaults: {
            template: 'Magento_Catalog/template/product/view/gallery/item',
            config: null,
            element: null,
        },
        /** @inheritdoc */
        initialize: function (config, element) {
            this._super();
            console.log(config);
            console.log(element);
            this.config = config;
            this.element = element;

            mediaCheck({
                media: '(max-width: 768px)',
                entry: function () {
                    this.mobileImages();
                }.bind(this),
                exit: function () {
                    this.desktopImages();
                }.bind(this)
            });
        },
        lazyLoad: function() {
            $(function() {
                $.fn.loadScroll = function(durationTime) {
                    let $windowVar = $(window), getImages = this, inview, isLoaded;
                    getImages.one('loadScroll', function() {
                        if (this.getAttribute('data-src')) {
                            this.setAttribute('src',
                            this.getAttribute('data-src'));
                            this.removeAttribute('data-src');
                            if (durationTime) {
                                $(this).hide().fadeIn(durationTime).add('img').removeAttr('style');
                            } else {
                                return false;
                            }
                        }
                    });
                    $windowVar.scroll(function() {
                        inview = getImages.filter(function() {
                            let a = $windowVar.scrollTop(),
                                b = $windowVar.height(),
                                c = $(this).offset().top,
                                d = $(this).height();
                            return c + d >= a && c <= a + b;
                        });
                        isLoaded = inview.trigger('loadScroll');
                        getImages = getImages.not(isLoaded);
                    });
                };
            });
            $(function() {
                $('img').loadScroll(500);
            });
        },
        mobileImages: function() {
            console.log("in MOBILE media");
            this.renderImages('mobile', null);
            $(this.element).slick();
        },
        desktopImages: function() {
            console.log("in DESKTOP media");
            $(this.element).slick("unslick");
            let havingsmallimage = false;
            if(this.config.data.length%3 == 0) {
                // console.log("can accomodate 2 small image");
                havingsmallimage = true;
            } else {
                // console.log("can NOT accomodate 2 small image");
            }

            this.lazyLoad();
            this.renderImages('desktop', havingsmallimage);
        },
        renderImages: function(media, havingsmallimage) {
            let imageTemplate = mageTemplate(imgTemplate)
            let self = this;
            let configData = this.config.data;
            $(self.element).html(''); // remove existing place holder image and switch between mobile view and desktop view.
            $.each(configData, function (ind, elem) {
                $(self.element).append(
                    imageTemplate({
                        data: {
                            "index": ind,
                            "media": media,
                            "src": elem.img,
                            "alt": elem.caption
                        }
                    })
                );
            });
        }
    });
});
