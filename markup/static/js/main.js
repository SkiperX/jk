'use strict';



import base from 'components/page/page'
import mainSlider from 'components/b-main/b-main'
import header from 'components/page-header/page-header'
import gallerySlider from 'components/b-gallery-slider/b-gallery-slider'
import video from 'components/b-video/b-video'
import location from 'components/b-location/b-location'
import choice from 'components/b-floor-choice/b-floor-choice'

$(document).ready(function() {
    base();
    header();
    mainSlider();
    gallerySlider();
    video();
    location();
    choice();

    $("body").css("opacity", "1").addClass("body-ready");
})

