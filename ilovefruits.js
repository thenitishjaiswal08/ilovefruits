
	$(window).on('scroll',function(){
		if ($(window).scrollTop()) {
			$('nav').addClass('scroll');
		}
		else{
			$('nav').removeClass('scroll');
		}
	})


	function opentloginpage(){
		document.querySelector('.login-box').style.top = '50%';
		document.querySelector('.login-box').style.transform = 'translate(-50%,-50%) scale(1.0)';
		document.querySelector('.login-box').style.visibility = 'visible';
		document.querySelector('.big-login-box').style.display = 'block';
	}
	function openragistrationepage(){
		document.querySelector('.ragistratione-box').style.top = '50%';
		document.querySelector('.ragistratione-box').style.transform = 'translate(-50%,-50%) scale(1.0)';
		document.querySelector('.ragistratione-box').style.visibility = 'visible';
	}
	function openforgotpasswordpage(){
		document.querySelector('.forgotpassword-box').style.top = '50%';
		document.querySelector('.forgotpassword-box').style.transform = 'translate(-50%,-50%) scale(1.0)';
		document.querySelector('.forgotpassword-box').style.visibility = 'visible';
	}
	function getpaswordpage(){
		document.querySelector('.getpasword-box').style.top = '50%';
		document.querySelector('.getpasword-box').style.transform = 'translate(-50%,-50%) scale(1.0)';
		document.querySelector('.getpasword-box').style.visibility = 'visible';
	}
	function opencontactpage(){
		document.querySelector('.contact-box').style.top = '50%';
		document.querySelector('.contact-box').style.transform = 'translate(-50%,-50%) scale(1.0)';
		document.querySelector('.contact-box').style.visibility = 'visible';
		document.querySelector('.big-login-box').style.display = 'block';
	}



	function closepage(){
		document.querySelector('.login-box').style.top = '0%';
		document.querySelector('.login-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.big-login-box').style.display = 'none';

	}
	function closepager(){
		document.querySelector('.ragistratione-box').style.top = '0%';
		document.querySelector('.ragistratione-box').style.transform = 'translate(-50%,50%) scale(0.0)';
	}

	function closepagef(){
		document.querySelector('.forgotpassword-box').style.top = '0%';
		document.querySelector('.forgotpassword-box').style.transform = 'translate(-50%,50%) scale(0.0)';
	}
	function closepageg(){
		document.querySelector('.getpasword-box').style.top = '0%';
		document.querySelector('.getpasword-box').style.transform = 'translate(-50%,50%) scale(0.0)';
	}
	function closepag(){
		document.querySelector('.contact-box').style.top = '0%';
		document.querySelector('.contact-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.big-login-box').style.display = 'none';
	}		

	
	// function closebigloginpge(){
	// 	document.querySelector('.big-login-box').style.display = 'none';
	// }

	function closebigloginpge(){
		document.querySelector('.login-box').style.top = '0%';
		document.querySelector('.login-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.big-login-box').style.display = 'none';
		document.querySelector('.ragistratione-box').style.top = '0%';
		document.querySelector('.forgotpassword-box').style.top = '0%';
		document.querySelector('.forgotpassword-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.ragistratione-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.getpasword-box').style.top = '0%';
		document.querySelector('.getpasword-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.contact-box').style.top = '0%';
		document.querySelector('.contact-box').style.transform = 'translate(-50%,50%) scale(0.0)';
		document.querySelector('.big-login-box').style.display = 'none';
	}



    function openvegetable(){
		// document.querySelector('.vegetable-main-box').style.visibility = 'visible';
		document.querySelector('.vegetable-main-box').style.display = 'block';
        document.querySelector('.fruits-main-box').style.display = 'none';
	}
    function openfruits(){
		document.querySelector('.vegetable-main-box').style.visibility = 'visible';
		document.querySelector('.fruits-main-box').style.display = 'block';
        document.querySelector('.vegetable-main-box').style.display = 'none';
	}


	function opencart(){
		document.querySelector('.add-cart').style.visibility = 'visible';
		document.querySelector('.add-cart').style.transform = 'translate(0%,0%) scale(1)';
	}
	function closecart(){
		document.querySelector('.add-cart').style.visibility = 'hidden';
		document.querySelector('.add-cart').style.transform = 'translate(90%,0%) scale(1)';
	}