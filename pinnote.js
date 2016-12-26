/**
 * 
 **/

$(document).ready(function() {
	$("#login").click(function () {
		var username = $("#exampleInputEmail1").val();
		var password = $("#exampleInputPassword1").val();
		
		if(username == "" || null){
			alert("Please enter the username");
			return false;
		}
		if(password == "" || null){
			alert("Please enter the password");
			return false;
		}
	});	
	
	$('#registerPage').click(function(){
		$('#signupPage').modal('show');
	});
	
	$('#innerSignup').click(function (){
		var inputName = $("#userName").val();
		var email = $("#inputEmail1").val();
		var password1 = $("#InputPassword1").val();
		var password2 = $("#InputPassword2").val();
		
		if(inputName == "" || null){
			alert("Please enter the username");
			return false;
		}
		if(email == "" || null){
			alert("Please enter the email");
			return false;
		}
		
		if(password1 == "" || null){
			alert("Please enter the password");
			return false;
		}
		if(password1 !== password2 || null){
			alert("Your password is not same as pervious password");
			return false;
		}	
	});
});