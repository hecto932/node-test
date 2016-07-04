$(function(){
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
	    	motherlastname: {
	      		required: true,
	      		minlength: 2,
	      		maxlength: 20
	    	},
	    	birthday: {
	      		required: true
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
      			email: "<p style='color:red;'>Debe introducir un email valido.</span>"
    		}
  		}
	});

  	$("#localphone").mask("(99) 999 999 99");
  	$("#mobilephone").mask("(99) 999 999 99");
  	$("#birthday").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
})
