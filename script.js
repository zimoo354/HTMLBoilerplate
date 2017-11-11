$(document).ready(function(){
	//$(document).foundation();
	$('.menu-mobile-trigger').sidr();
});

function sendContacto(){
	var f = $('#form-contacto');
	if (validate(f)) {
		var data = getFormData(f);
		var msg = "Mensaje de contacto de Whatever\n\nNombre: " + data.nombre + '\nEmail: ' + data.email + '\nMensaje:\n\n' + data.mensaje;
		sendMail('no-reply@whatever.com', 'contacto@uniplea.com', 'Mensaje de Contacto', msg, 
			function(){
				// Do your stuff here
				swal('Exito', 'Tu mensaje ha sido enviado', 'success');
			});
	}
}

function getFormData($form){
	var unindexed_array = $form.serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function(n, i){
		indexed_array[n['name']] = n['value'];
	});

	return indexed_array;
}

function validate($form) {
	if (!$form[0].checkValidity()) {
		$form.find('input[type="submit"]').click();
		return false;
	}
	return true;
}

function send() {
	var f = $('#form-contacto');
	if (validate(f)) {
		data = getFormData(f);
		console.log(data);
	}
}
