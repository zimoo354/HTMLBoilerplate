$(document).ready(function(){
	//$(document).foundation();
	$('.menu-mobile-trigger').sidr();


	$('[project]').each(function(i,el){
		var e = $(el)
		var pos = e.position() // top, left
		e.attr('data-left', pos.left);
		e.attr('data-top', pos.top);
		e.attr('data-height', e.height());
		e.attr('data-width', e.width());
	});
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

$('[project]').on('click', function(){
	var e = $(this);
		prevPos = {
			left: e.data('left'),
			top: e.data('top'),
			height: e.data('height'),
			width: e.data('width'),
		};
		var pos = e.position();
	if (e.hasClass('active')) {

		e.css('left', Math.round(prevPos.left));
		e.css('top', Math.round(prevPos.top));
		e.css('width', prevPos.width);
			setTimeout(function(){
			e.removeAttr('style');
		},301);
		e.find('p').fadeOut(300);
		e.toggleClass('active');

	} else {

		e.css('left', pos.left);
		e.css('top', pos.top);
		e.css('position', 'absolute')

		setTimeout(function(){
			e.css('left', 0);
			e.css('top', 0);
		})
		e.find('p').fadeIn(300);

		e.toggleClass('active');
	}
})


