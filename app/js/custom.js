$(document).ready(function () {
    $('.phone-input').mask('+7 (000) 000-0000');

    $('[data-uk-slideset]').on('show.uk.slideset', function(e){
        var sliderContainer = $(this).find('.uk-slideset'),
            slideHeight = sliderContainer.find('li.uk-active').outerHeight();

        sliderContainer.css('height', slideHeight);
    });
});