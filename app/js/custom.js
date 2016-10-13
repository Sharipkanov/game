$(document).ready(function () {
    var forms = $('.uk-form');

    var scrollSettings = getBrowserScrollSize();

    $('.uk-modal').on({
        'show.uk.modal': function(){
            $('.main-header-cont').css('padding-right', scrollSettings.width);
        },
        'hide.uk.modal': function(){
            $('.main-header-cont').css('padding-right', 0);
        }
    });

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