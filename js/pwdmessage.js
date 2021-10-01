//pwdMessage
$("#pwdMessage").hide();
$("#pwd").focus(function() {
    $("#pwdMessage").show();
});
$("#pwd").blur(function() {
    $("#pwdMessage").hide();
});
$("#pwd").keyup(function(){
    pwdMessage(this)
});
function pwdMessage(elementid){
    var pwd = $(elementid).val();
    $('#smallpwd').attr("class", pwd.match(/[a-z]/g) ?"text-success":"text-danger");
    $('#smallicon').attr("class", pwd.match(/[a-z]/g)?"fa fa-check":"fa fa-times"); 
    $('#upperpwd').attr("class", pwd.match(/[A-Z]/g) ?"text-success":"text-danger");
    $('#uppericon').attr("class", pwd.match(/[A-Z]/g)?"fa fa-check":"fa fa-times");
    $('#numberpwd').attr("class", pwd.match(/[0-9]/g) ?"text-success":"text-danger");
    $('#numbericon').attr("class", pwd.match(/[0-9]/g)?"fa fa-check":"fa fa-times");
    $('#minpwd').attr("class", pwd.length < 8 ?"text-danger":"text-success");
    $('#minicon').attr("class", pwd.length < 8 ?"fa fa-times":"fa fa-check");
}