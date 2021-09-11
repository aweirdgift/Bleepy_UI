/**
 * To use showpwd function
 * 
 * $("#showbtnpwd").click(function(){
 *  showpwd("#pwd","#eyepwd")
 * })
 * 
 * make sure that the button has id and correct
 * the pwd field
 * and eye icon
 * 
 * <input type="password" id="pwd">
 * <button id="showbtnpwd"> <li id="eyepwd"></li> </button>
 * 
**/

function showpwd(pwdid,eyepwdid){
    $(pwdid).attr('type',$(pwdid).attr('type')=="password"?"text":"password");
    $(eyepwdid).attr('class',$(eyepwdid).attr('class')=="fa fa-eye-slash"?"fa fa-eye":"fa fa-eye-slash");
}

$("#showpwd").click(function(){
    showpwd("#pwd","#eyepwd")
});

