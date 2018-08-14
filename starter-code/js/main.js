//////REQUIREMENTS ARE IN lowercase 
/////MY COMMENTS ARE IN UPPERCASE

// When the user submits the contact form:
//HAS TO BE .contact OTHERWISE THE NEWSLETTER SIGNUP LIGHTS UP TOO
$('.contact').on('submit', function (event) { 
// a) Prevent the default form action so that the page will not reload.
    event.preventDefault();
// b) Loop through the input/textarea fields inside the contact form.
//if a field is blank, add the error class to that field 
//MUST SPECIFY TO GET THE INPUTS IN THE FORM, NOT THE NEWSLETTER SIGNUP
    $('form input').each( function () {
        if ($(this).val() == false) {
            $(this).addClass('error');
            // console.log("EXTERMINATE");
            $(this).siblings('.error-message').fadeIn(600);
        } else {
            //REMOVE ERROR STUFF ON NEXT LOOP IF THERE'S SOMETHING INSIDE
            // console.log($(this).val());
            $(this).removeClass('error');
            $(this).siblings('.error-message').fadeOut(600);
        }
    });
    //SAME FOR THE TEXT AREA
    $('form textarea').each( function () {
        if ($(this).val() == false) {
            $(this).addClass('error');
            // console.log("EXTERMINATE");
            $(this).siblings('.error-message').fadeIn(600);
        } else {
            //REMOVE ERROR STUFF ON NEXT LOOP IF THERE'S SOMETHING INSIDE
            // console.log($(this).val());
            $(this).removeClass('error');
            $(this).siblings('.error-message').fadeOut(600);
        }
    });

})

