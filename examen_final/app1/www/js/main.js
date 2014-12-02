var correo = '';
var pagina1 = '';
var pagina2 = [];

var cambiar_pagina = function(id){

	$(":mobile-pagecontainer").pagecontainer( "change", id, { role: "page" , transition: "slide"} );

};

var regresar_pagina= function(id){

	$(":mobile-pagecontainer").pagecontainer( "change", id, { role: "page" , transition:"slide", reverse : true} );

};

$(document).on('pageinit', cuando_inicia) 

	function cuando_inicia(){

		$('#sesion').click(function(event){

				correo = $('#correo').val();

				if(correo !== ''){
					/* Act on the event */
					cambiar_pagina('#winker-pagina1');
				}

			
		});

	}

	$(document).on( 'pageinit', '#winker-pagina1', cuando_inicia_pagina1 );
		
		function cuando_inicia_pagina1(){
			
			$('.pagina1-wrap').click(function(event) {
				/*Act on the event */
				pagina1 = $(this).data('pagina1');

				cambiar_pagina('#winker-pagina2');
			});

			$('#winker-pagina1 .back').click(function(event){
				/* Act on the event */
				regresar_pagina('#winker-home');

			});
			
		} 
		$(document).on( 'pageinit', '#winker-pagina1', cuando_inicia_pagina1 );

function cuando_inicia_pagina1(){

	$('.pagina1-wrap').click(function(e) {

		e.stopImmediatePropagation();
		e.preventDefault();

		/* Act on the event */
		pagina1 = $(this).data('pagina1');
		
		cambiar_pagina('#winker-pagina2');

		console.log(pagina1);

	});

	$('#winker-pagina1 .back').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		regresar_pagina('#winker-home');
	});
	
}


$(document).on( 'pageinit', '#winker-pagina2', cuando_inicia_pagina2 );

function cuando_inicia_pagina2(){

	$('.ui-bar').click(function(event) {
		/* Act on the event */

		if( $(this).hasClass('active') ){

			//Quitar Clase
			
			$(this).removeClass('active');

			var removeItem = $(this).data('pagina2');

			pagina2 = jQuery.grep(pagina2, function(value) {
				return value != removeItem;
			});

		} else {

			$(this).addClass('active');

			var val_pagina2 = $(this).data('pagina2');

			pagina2.push(val_pagina2);

		}

		console.log(pagina2);


	});


	$('#winker-pagina2 .back').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		regresar_pagina('#winker-pagina1');
	});


	$('#winker-pagina2 .next').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		cambiar_pagina('#winker-pagina3');
	});
	
}


//Page pagina3

$(document).on( 'pageinit', '#winker-pagina3', cuando_inicia_pagina3 );

function cuando_inicia_pagina3(){

	//colocar el correo
	$('.get-correo').text(correo);

	//colocar pagina1
	$('.get-pagina1').text(pagina1);

	$.each(pagina2, function(index, val){
		/*interate trough array or objet */
		$('ul').append('<li>'+val+'</li>');
	});



	$('#winker-pagina3 .back').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		regresar_pagina('#winker-pagina2');
	});
	
}