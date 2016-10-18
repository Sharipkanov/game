var doc = document;

$(doc).ready(function () {
    var forms = $('.uk-form'),
        mobileNav = $('#mobile-nav'),
        navbar = $('.main-header .uk-navbar'),
        offCanvasBtn = $('.uk-navbar-toggle'),
        offCanvas = $('.uk-offcanvas'),
        header = $('.uk-navbar');

    var scrollSettings = getBrowserScrollSize();

    // Add active class to header navbar when scroll
   /* $(window).scroll(function (e) {
        var scrollTop = $('body').scrollTop();

        if(scrollTop > header.outerHeight()) header.addClass('active');
        else header.removeClass('active');
    });*/

    offCanvasBtn.click(function (e) {
        if(offCanvas.hasClass('uk-active') === true) offCanvas.click();
    });

    // $('[data-auto-height]').on('show.uk.slideset', function(e){
    //     var sliderContainer = $(this).find('.uk-slideset'),
    //         slideHeight = sliderContainer.find('li.uk-active > div').outerHeight();
    //
    //     sliderContainer.css('height', slideHeight);
    // });

    $('.phone-input').mask('+7 (000) 000-0000');

    forms.submit(function (e) {
        e.preventDefault();

        var form = e.target,
            formData = serializeForm(form);

        // TODO form upload

        setTimeout(function () {
            clearForm(form)
        }, 2000);

        return false;
    });

    forms.each(function (e) {
        clearForm(this);
    });
});


function serializeForm(formData) {
    var returnData = {};
    for(var i=0; i<formData.length; i++) {
        var currentData = formData[i],
            value = currentData.value,
            name = currentData.name;

        if(value) {
            if(currentData.type === 'radio' || currentData.type === 'checkbox'){
                if(currentData.checked === true) returnData[name] = value;
            } else {
                returnData[name] = value;
            }
        }
    }

    return returnData;
}

function clearForm(formData) {
    for(var i=0; i<formData.length; i++) {
        var currentData = formData[i],
            value = currentData.value,
            name = currentData.name;

        if(value) {
            if(currentData.type === 'radio' || currentData.type === 'checkbox'){
                if(currentData.checked === true) currentData.checked = false;
            } else {
                currentData.value = "";
            }
        }
    }
}

function getBrowserScrollSize(){
    var css = {
        "border":  "none",
        "height":  "200px",
        "margin":  "0",
        "padding": "0",
        "width":   "200px"
    };

    var inner = $("<div>").css($.extend({}, css));
    var outer = $("<div>").css($.extend({
        "left":       "-1000px",
        "overflow":   "scroll",
        "position":   "absolute",
        "top":        "-1000px"
    }, css)).append(inner).appendTo("body")
        .scrollLeft(1000)
        .scrollTop(1000);

    var scrollSize = {
        "height": (outer.offset().top - inner.offset().top) || 0,
        "width": (outer.offset().left - inner.offset().left) || 0
    };

    outer.remove();
    return scrollSize;
}