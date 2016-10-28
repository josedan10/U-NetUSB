(function(){
	var formulario= document.getElementById("formulario");

	var focusInput= function(){
		this.style.background="rgba(51, 119, 255, 0.4)";
		this.style.border="0";
		this.style.borderBottom="1px solid #5e5151";
		this.style.color="white";
		this.style.margin="10px 15px";

		var defaultInput= function () {
			this.style.background="transparent";
		};

		this.addEventListener("blur",defaultInput);
	};

	var carnet= formulario.carnet,
		contraseña= formulario.contraseña;

	carnet.addEventListener("focus",focusInput);
	contraseña.addEventListener("focus",focusInput);
}())