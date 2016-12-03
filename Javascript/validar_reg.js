(function(){
	var formulario=document.getElementById("formulario");


	var validarFormulario=function(e){
		var nombre=formulario.nombre, 
			apellido=formulario.apellido,
			carnet=formulario.carnet,
			contraseña=formulario.contraseña,
			contraseña2=formulario.contraseña_conf,
			checkbox=formulario.checkbox;

		var tooltips=document.getElementsByClassName("tooltip"),
			tooltipNombre=tooltips[0];
			tooltipApellido=tooltips[1];
			tooltipCarnet=tooltips[2];
			tooltipContraseña=tooltips[3];
			tooltipContraseña2=tooltips[4];

		resetTooltips(tooltips);
		validarNombre(nombre,tooltipNombre,e);
		validarApellido(apellido,tooltipApellido,e);
		validarCarnet(carnet,tooltipCarnet,e);
		validarContraseña(contraseña,tooltipContraseña,contraseña2,tooltipContraseña2,e);
		validarCheckbox(checkbox,e);		
	};

	function resetTooltips (tooltips) {
		var i;
		for (i=0; i<tooltips.length;i++){
			tooltips[i].style.visibility="hidden";
		}
	}

	function validarNombre(nombre,tooltip,e) {
		if (nombre.value==""){
			tooltip.innerHTML="*El campo nombre está vacío";
			tooltip.style.visibility="visible";
			styleError(nombre);
			e.preventDefault();
		}else if(!/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\']+$/.test(nombre.value)){
			tooltip.innerHTML="*Este campo solo puede contener letras";
			tooltip.style.visibility="visible";
			styleError(nombre);
			e.preventDefault();
		}else if (nombre.value>60){
			tooltip.innerHTML="*No puede tener mas de 60 caracateres";
			tooltip.style.visibility="visible";
			styleError(nombre);
			e.preventDefault();
		}
	}

	function validarApellido(apellido,tooltip,e) {
		if(apellido.value==""){
			tooltip.innerHTML="*El campo apellido está vacío";
			tooltip.style.visibility="visible";
			styleError(apellido);
			e.preventDefault();
		}else if(!/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\']+$/.test(apellido.value)){
			tooltip.innerHTML="*Este campo solo puede contener letras";
			tooltip.style.visibility="visible";
			styleError(apellido);
			e.preventDefault();
		}else if (apellido.value>60){
			tooltip.innerHTML="*No puede tener mas de 60 caracateres";
			tooltip.style.visibility="visible";
			styleError(apellido);
			e.preventDefault();
		}
	}

	var validarCarnet=function (carnet,tooltip,e) {
		var carnet_array=carnet.value.split("");
		var carnet_exp=/\d{2}\-\d{5}/;

		if (carnet.value==""){
			tooltip.innerHTML="*Introduce tu carnet";
			tooltip.style.visibility="visible";
			styleError(carnet);
			e.preventDefault();
		}else if(carnet.value.length!=8){
			tooltip.innerHTML="*Carnet no válido";
			tooltip.style.visibility="visible";
			styleError(carnet);
			e.preventDefault();
		}else if(!carnet_exp.test(carnet.value)){
			tooltip.innerHTML="*Carnet no válido";
			tooltip.style.visibility="visible";
			styleError(carnet);
			e.preventDefault();
		}
	};

	function validarContraseña(contraseña,tooltip1,contraseña2,tooltip2,e) {
		if (contraseña.value==""){
			tooltip1.innerHTML="*Debe ingresar una contraseña";
			tooltip1.style.visibility="visible";
			styleError(contraseña);
			e.preventDefault();
		}else{
			var contraseña_array=contraseña.value.split(''),
				mayus=0, num=0;

			if(contraseña_array.length<6 || contraseña_array.length>15){
				tooltip1.innerHTML="*Tamaño de contraseña no aceptable";
				tooltip1.style.visibility="visible";
				styleError(contraseña);
				e.preventDefault();
			}else{
				for (c in contraseña_array){
					//console.log(contraseña_array[c]);
					if(/\d/.test(contraseña_array[c])){
						num++;
						continue;
					}else if(contraseña_array[c]==contraseña_array[c].toUpperCase()){
						mayus++;
						continue;
					}
				}	
				if(num==0 || mayus==0){
					tooltip1.innerHTML="*Debes usar mayúsculas y números";
					tooltip1.style.visibility="visible";
					styleError(contraseña);
					e.preventDefault();

				}if(contraseña2.value==""){
					tooltip2.innerHTML="*No ha validado la contraseña";
					tooltip2.style.visibility="visible";
					styleError(contraseña2);
					e.preventDefault();
				}else if(contraseña.value!=contraseña2.value){
					tooltip2.innerHTML="*Las contraseñas no coinciden";
					tooltip2.style.visibility="visible";
					styleError(contraseña);
					styleError(contraseña2);
					e.preventDefault();
				}
			}			
		}
	}

	function validarCheckbox(checkbox,e) {
		if(checkbox.checked==false){
			alert("Debes aceptar los términos y condiciones de servicios");
			e.preventDefault();
		}
	}

	function styleError(input){
		input.style.border="0.5px solid rgb(248,107,107)";
		input.style.color="red";
		input.style.background="rgba(248,107,107,0.4)";
		


	}

	/*NOTAS:
		1.-Las funciones trabajan perfectamente.
		2.- Faltan acomodar detalles:
			2.1 Máximo permitido en nombres y apellidos.
	*/

	formulario.addEventListener("submit",validarFormulario);
}())