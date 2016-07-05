$(function(){

	// INPUTS DESACTIVATES
	if($(".invoice").is(':checked')){
		$(".invoice").prop('disabled', false);
	}
	else{
		$('.invoice').attr('disabled', true);
	}

	$('#formAddCustomer').validate({
		rules: {
	    	name: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 60
	    	},
	    	lastname: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	motherlastname: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	email: {
	      		required: true,
	      		maxlength: 90
	    	},
	    	localphone: {
	      		minlength: 2,
	      		maxlength: 20
	    	},
	    	mobilephone: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 20
	    	},
	    	birthday: {
	      		required: true
	    	},
	    	street: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	delegation: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	city: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	colony: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	state: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	country_id: {
	      		required: true
	    	},
	    	postalcode: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	reasonname: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	},
	    	rfc: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 30
	    	}

	  	},
		messages: {
    		name: "<span style='color:red;'>Debe contener minimo 2 y maximo 30 caracteres.</span>",
    		lastname: {
    			required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 2 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
    		},
    		motherlastname: {
    			required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 2 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
    		},
    		email: {
      			required: "<span style='color:red;'>Este campo es requerido.</span>",
      			email: "<p style='color:red;'>Debe introducir un email valido.</span>",
      			maxlength: "<span style='color:red;'>Debe contener maximo 90 caracteres.</span>"
    		},
    		mobilephone: {
      			required: "<span style='color:red;'>Este campo es requerido.</span>"
    		},
    		birthday: {
      			required: "<span style='color:red;'>Este campo es requerido.</span>"
    		},
    		street: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 80 caracteres.</span>"
	    	},
	    	delegation: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 60 caracteres.</span>"
	    	},
	    	city: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 60 caracteres.</span>"
	    	},
	    	colony: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
	    	},
	    	state: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
	    	},
	    	country_id: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>"
	    	},
	    	postalcode: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 5 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 15 caracteres.</span>"
	    	},
	    	reasonname: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 2 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
	    	},
	    	rfc: {
	      		required: "<span style='color:red;'>Este campo es requerido.</span>",
	      		minlength: "<span style='color:red;'>Debe contener minimo 2 caracteres.</span>",
	      		maxlength: "<span style='color:red;'>Debe contener maximo 30 caracteres.</span>"
	    	}
  		}
	});

  	$("#localphone").mask("(99) 999 999 99");
  	$("#mobilephone").mask("(99) 999 999 99");
  	$("#birthday").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});

  	

  	$('#invoiceCheckbox').click(function(oEvent){
  		if($(this).is(':checked')){
  			$(".invoice").prop('disabled', false);
  		}
  		else{
  			$('.invoice').attr('disabled', true)
  		}
  	});
  	/*if($('#invoiceCheckbox').attr('checked')){
  		$( "#.invoice" ).prop( "disabled", false );
  	}else{
  		$( "#.invoice" ).prop( "disabled", false );
  	}*/
})
