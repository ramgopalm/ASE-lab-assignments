function validateForm() {
	var un = document.loginform.usr.value;
	var pw = document.loginform.pword.value;
	var username = localStorage.getItem("username")
	var password = localStorage.getItem("password")
	if ((un == username) && (pw == password)) {
		window.location = "home.html";
		return true;
	}
	else {
		alert ("Login was unsuccessful, please check your username and password");
		return false;
	}
}
function validateRegistration() {
	var password = document.reg_page.password.value;
	var password_confirmation = document.reg_page.password_confirmation.value;
	if (password == password_confirmation)  {
		alert("match");
		message.innerHTML = "Passwords mismatch";
		window.location = "home.html";
		return true;
	}
	else {
		alert ("Password mismatch");
		return false;
	}
}
jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("img/backgrounds/2.jpg");

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });


});
