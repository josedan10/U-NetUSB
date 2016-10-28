(function(){
	var formulario=document.getElementById("formulario"),
		tooltips=document.getElementsByName("tooltip");

	function validar(e){
		var carnet=formulario.carnet,
			contraseña=formulario.contraseña,
			tooltipCarnet=tooltips[0],
			tooltipContraseña=tooltips[1];

		if(carnet.value==""||contraseña.value==""){
			alert("Debes completar todos los campos para ingresar");
			e.preventDefault();
			styleError(carnet);
			styleError(contraseña);
		}
		validarCarnet(carnet,tooltipCarnet,e);
		validarContraseña(contraseña,tooltipContraseña,e);
	}

	var validarCarnet=function (carnet,tooltip,e) {
		var carnet_array=carnet.value.split("");
		var carnet_exp=/\d{2}\-\d{5}/;

		if(!carnet_exp.test(carnet.value)){
			tooltip.innerHTML="*Carnet no válido";
			tooltip.style.visibility="visible";
			styleError(carnet);
			e.preventDefault();
		}
	};

	var validarContraseña=function (contraseña,tooltip,e) {
		var contraseña_array=contraseña.value.split("");

		if(contraseña_array.length<6 || contraseña_array.length>15){
			tooltip.innerHTML="*Contraseña inválida";
			tooltip.style.visibility="visible";
			styleError(contraseña);
			e.preventDefault();
		}else{
			var num=0, mayus=0;
			for (i in contraseña_array){
				if(/\d/.test(contraseña_array[i])){
					num++;
				}else if (contraseña_array[i]==contraseña_array[i].toUpperCase()){
					mayus++;
				}
			}

			if(num==0 || mayus==0){
				tooltip.innerHTML="*Contraseña inválida";
				tooltip.style.visibility="visible";
				styleError(contraseña);
				e.preventDefault();
			}
		}
	};

	var styleError= function (input) {
		input.style.border="0.5px solid rgb(248,107,107)";
		input.style.color="red";
		input.style.background="rgba(248,107,107,0.4)";
		input.style.margin="9px 15px";
	};

	formulario.addEventListener("submit",validar);
}())