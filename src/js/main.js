
$(document).ready(function() {


	checkText('#name');
	checkText('#secondname');
	headersAnimation();
	
		//hints form
		$('.questionmark').on('mouseover', function(){
	
		const hint = $('.hint-box');
		hint.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet pretium leo, eu aliquet ');
		$('.hint').show([300]);
	
		}).mouseleave(function() {
			$('.hint').hide();
			$('.hint-box').text(' ');
		});

		//email validation
		$('#email').on('blur', function() {
			const input = $(this);
			const pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			const is_email = pattern.test(input.val());
	
			if(is_email) {
	
				input.removeClass("invalid").addClass("valid");
				input.next('.input-info').text(" ").removeClass("error").addClass("correct");
			}
	
			else {
	
				input.removeClass("valid").addClass("invalid");
				input.next('.input-info').text("Nieprawidłowy email adres").removeClass("correct").addClass("error");
			}
	
		});
	
		//select validation
		$('#form_selection').on('blur', function() {
			const select = $(this);
			
			if ( $(this).children(":selected").val() !== "" ) {
	
				select.removeClass("invalid").addClass("valid");
				select.next('.input-info').text(" ").removeClass("error").addClass("correct");
			}
	
			else {
	
				input.removeClass("valid").addClass("invalid");
				input.next('.input-info').text("Wybierz opcję").removeClass("correct").addClass("error");
			}
		});

		//number validation
		$('#number').on('blur', function() {
			const number = $(this);
			const correctNumber = number.val().length;
			const hint = $('.hint');
		
			number.removeClass('information');
	
			if ( correctNumber>0) {
	
				number.removeClass("invalid").addClass("valid");
				number.next('.input-info').text(" ").removeClass("error").addClass("correct");
	
				hint.remove();
			}
	
			else {
	
				number.removeClass("valid").addClass("invalid");
				number.next('.input-info').text("Wpisz nr").removeClass("correct").addClass("error");
			}
		});
	
	
		//textarea validation
		$('#textarea').on('blur', function() {
			const input = $(this);
			const text = $(this).val().length;
	
			if(text>3) {
	
				input.removeClass("invalid").addClass("valid");
				input.next('.input-info').text(" ").removeClass("error").addClass("correct");
			}
	
			else {
	
				input.removeClass("valid").addClass("invalid");
				input.next('.input-info').text("Podaj min. 3 znaki").removeClass("correct").addClass("error");
			}  
		
		});
	
		//send formular if correct
		$('#submit').click(function(event){
			var name = $('#name');
			var email = $('#email');
			var textarea = $('#textarea');
			var number =$('#number');
			var secondname =$('#secondname');
			var select = $('#form_selection');
			var option = (select.children(":selected").val() !== "" );
		  
			if(  name.hasClass('valid') && email.hasClass('valid') && textarea.hasClass('valid') && number.hasClass('valid') && secondname.hasClass('valid') && option
				 ) {
	
				alert("Formularz został wysłany.");
			
			}
	
			else {
				event.preventDefault();
				alert("Uzupełnij pola");	
			}
	
		});
	
	});

	//animation for headers scroll
	function headersAnimation(){
		window.sr = ScrollReveal();
		sr.reveal('h1, h2, h3, h4', {
			reset: false,
			delay: 300
		}); 
	}
	

	//function to check inoputs with text
	function checkText(x){
	
		$(x).on('blur', function() {
			
			const input = $(this);
			const name_length = input.val().length;
	
			if (name_length > 2) {
		
				input.removeClass("invalid").addClass("valid");
				input.next('.input-info').text(" ").removeClass("error").addClass("correct");
			}
	
			else {
	
				input.removeClass("valid").addClass("invalid");
				input.next('.input-info').text("Podaj min. 3  znaki").removeClass("correct").addClass("error");
			}
		});
	}
	
	
	
	
	
	