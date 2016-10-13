$(document).ready(function () {
    var forms = $('.uk-form');

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