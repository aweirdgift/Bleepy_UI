
/**
 *  Include the following before this code**
 *  jquery
 *  jquery validation
 *  (hasNumber, hasSmall, hasUpper, nowhitespace, validname)
 *  showpwd
**/

//Bootstrap file input
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//showpwd.js
$("#showoldpwd").click(function(){
    showpwd("#oldpwd","#eyeoldpwd")
});
$("#shownewpwd").click(function(){
    showpwd("#newpwd","#eyenewpwd")
});
$("#showconfirmpwd").click(function(){
    showpwd("#confirmpwd","#eyeconfirmpwd")
});

//pwdmessage.js
$("#newpwd").focus(function() {
    $("#pwdMessage").show();
});
$("#newpwd").blur(function() {
    $("#pwdMessage").hide();
});
$("#newpwd").keyup(function(){
    pwdMessage(this)
});

//
$('#updatephoto').on('change', function() {
    if($('#updatephoto').val()){
        filesizeinmb = this.files[0].size / (1024*1024)
        $('#uploadfilesize').val(filesizeinmb)
    }else{
        $('#uploadfilesize').val(0)
    }
});

//Validations
$("#updatephotoform").validate({
    ignore: [],//This ignore the ignoring of hidden files
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        updatephoto:{
            required: true
        },
        uploadfilesize:{
            number: true,
            max: parseFloat($("#maxfilesize").val())
        }
    },
    messages:{
        uploadfilesize:{
            max: "File size exceeds"
        }
    }
});

$("#updatefnameform").validate({
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        fname:{
            required: true,
            minlength: 2,
            validname: true
        }
    }
});

$("#updatelnameform").validate({
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        lname:{
            required: true,
            minlength: 2,
            validname: true
        }
    }
});

$("#updateemailform").validate({
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

$("#updatepwdform").validate({
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
        oldpwd:{
            required: true
        },
        newpwd:{
            required: true,
            minlength: 8,
            hasNumber: true,
            hasSmall: true,
            hasUpper: true,
            nowhitespace: true
        },
        confirmpwd:{
            required: true,
            equalTo: "#newpwd"
        },
    },
    messages:{
        confirmpwd:{
            equalTo: "Please enter the same password above"
        }
    }
});
