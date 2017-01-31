(function(){
	var formulario=document.getElementById("formulario");

	var focusInput=function() {
		this.style.background="rgba(153, 204, 255,0.27)";
		this.style.border="0";
		this.style.borderBottom="2px solid #ccc";
		this.style.color="black";

		var defaultInput=function () {
			this.style.background="transparent";
		};

		this.addEventListener("blur",defaultInput);
	};

	var nombre=formulario.nombre,
		apellido=formulario.apellido,
		carnet=formulario.carnet,
		contraseña=formulario.contraseña,
		contraseña2=formulario.contraseña_conf;

	nombre.addEventListener("focus",focusInput);
	apellido.addEventListener("focus",focusInput);
	carnet.addEventListener("focus",focusInput);
	contraseña.addEventListener("focus",focusInput);
	contraseña2.addEventListener("focus",focusInput);
}())