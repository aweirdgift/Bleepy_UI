/**
 *  Include the following before this code**
 *  jquery
 *  jquery validation
 *  (hasNumber, hasSmall, hasUpper, nowhitespace, validname)
 *  showpwd
**/

$("#showconfirmpwd").click(function(){
    showpwd("#confirmpwd","#eyeconfirmpwd")
});

$("#signupform").validate({
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        fname:{
            required: true,
            minlength: 2,
            validname: true
        },
        lname:{
            required: true,
            minlength: 2,
            validname: true
        },
        email:{
            required: true,
            email:true
        },
        pwd:{
            required: true,
            minlength: 8,
            hasNumber: true,
            hasSmall: true,
            hasUpper: true,
            nowhitespace: true
        },
        confirmpwd:{
            required: true,
            equalTo: "#pwd"
        },
        agreetandc:{
            required: true
        }
    },
    messages:{
        confirmpwd:{
            equalTo: "Please enter the same password above"
        }
    }
});