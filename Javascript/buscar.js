(function (){
	var Buscador=document.getElementById("buscador");
	var icon=document.getElementById("search_icon");

	var busqueda= function(){
		
		var extension=Buscador.style.width;
		if (extension=="0px"){
			Buscador.style.width="85%";
			Buscador.style.padding="3px";
			Buscador.focus();
		}else{
			if (Buscador.value==""){
				Buscador.style.width="0px";
				Buscador.style.padding="0px";
			}else{
				//Buscar palabra
			}
		}
	}

	icon.addEventListener("click",busqueda);
	//console.log(icon);
}());