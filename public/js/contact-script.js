
jQuery(document).ready(function($) {
     $('#contact-loading').hide();
/* Contact
-------------------------------------------------------------------*/
// Email from Validation
$('#contact-submit').click(function(e){

    //Stop form submission & check the validation
    e.preventDefault();

    $('.name-error, .contact-email-error, .contact-message-error').hide();

    // Variable declaration
    var error = false;
    var k_first_name = $('#name').val();
    var k_email = $('#contact_email').val();
    var k_subject = $('#subject').val();
    var k_message = $('#message').val();

    // Form field validation
    if(k_first_name.length == 0){
        var error = true;
        $('.name-error').html('<i class="fa fa-exclamation"></i> First name is required.').fadeIn();
    }

    if(k_email.length != 0 && validateEmail(k_email)){

    } else {
        var error = true;
        $('.contact-email-error').html('<i class="fa fa-exclamation"></i> Please enter a valid email address.').fadeIn();
    }

    if(k_message.length == 0){
        var error = true;
        $('.contact-message-error').html('<i class="fa fa-exclamation"></i> Please provide a message.').fadeIn();
    }

    // If there is no validation error, next to process the mail function
    if(error == false){

        $('#contact-loading').show();
        $('#contact-submit').hide();
        $('#contact-loading').fadeIn();
        $('.contact-error-field').fadeOut();


        // Disable submit button just after the form processed 1st time successfully.
        $('#contact-submit').attr({'disabled' : 'true', 'value' : 'Sending' });

        /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
        $.post("code/contact.php", $("#contact-form").serialize(),function(result){
            //Check the result set from email.php file.
            if(result == 'sent'){
                $('#contact-loading').hide();
                //If the email is sent successfully, remove the submit button
                $('#name').remove();
                $('#contact_email').remove();
                $('#subject').remove();
                $('#message').remove();
                $('#contact-submit').remove();
                $('#basic-addon1').hide();
                $('#basic-addon2').hide();
                $('#basic-addon3').hide();

                // $('.contact-box-hide').slideUp();
                $('.contact-message').html('<i class="fa fa-check contact-success mx-3" aria-hidden="true"></i><span>Your message has been sent.</span>').fadeIn();
            } else {
                $('.btn-contact-container').hide();
                $('.contact-message').html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.</div>').fadeIn();

            }
        });
    }
});


function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}


/* Contact End
-------------------------------------------------------------------*/

});