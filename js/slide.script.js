var revapi3,
    tpj;
(function() {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();
    function onLoad() {
        if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
        if(tpj("#rev_slider_3_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_3_1");
        }else{
            revapi3 = tpj("#rev_slider_3_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//localhost/silders2/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    arrows: {
                        style:"persephone",
                        enable:true,
                        hide_onmobile:false,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                    ,
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:20,
                        space:5,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                visibilityLevels:[1240,1024,778,480],
                gridwidth:1240,
                gridheight:868,
                lazyType:"none",
                shadow:0,
                spinner:"spinner2",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }; /* END OF revapi call */

    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */