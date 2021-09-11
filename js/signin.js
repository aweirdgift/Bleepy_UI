/**
 *  Include the following before this code**
 *  jquery
 *  jquery validation
 *  showpwd
**/

$("#signinform").validate({
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        email:{
            required: true,
            email:true
        },
        pwd:{
            required: true
        }
    }
});