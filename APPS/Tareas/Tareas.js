(function(){

	/*>>>>>>>>>>>>>>>>>> GLOBALS <<<<<<<<<<<<<<<<<*/

	var block = document.getElementById('block'), /*block de actividades*/
		tareaNueva = document.getElementById('crearActividad'), /*Icono para crear una nueva tarea*/
		config = document.getElementById('config'), /*Configuraciones*/
		checksCol = block.getElementsByClassName('checkbox'), /*Columna de checkboxes*/
		checkMaster = document.getElementById('checkMaster'), /*Check que marca todos los checkbox*/
		actividades = document.getElementsByClassName('actividad'), /*Lista de actividades*/

		/*--------- IMPORTANTE --------*/
		/*Para las actividades trabajar con un contador que empiece en cero.
		El primer elemento es el título de la sección de actividades "Actividad"*/

		infoArray = document.getElementsByClassName('detalles'),
		cerraduraTareaNueva = document.getElementById('cerradura').firstChild,
		// botonAgregar = document.getElementById('botonAgregar'),
		divFantasma = document.getElementById("divFantasma"); /*Array de infos*/

	//console.log(checksCol[0].firstChild);



	/*Objeto block*/

	Block = function(){

		/*bl es simplemente un objeto*/

		bl = {};

		bl.block = block;
		bl.tareaNueva = tareaNueva;
		bl.actividades = actividades;
		bl.infoArray = infoArray;
		bl.tareaNueva = tareaNueva;
		bl.checkMaster = checkMaster;
		bl.checksCol = checksCol;
		bl.cerraduraTareaNueva = cerraduraTareaNueva;


		/*>>>>>>>>>>>>>>>>>>>>>>>>> FUNCIONES DE EVENTOS <<<<<<<<<<<<<<<<<<<<<<<*/
		var detalles = function(){
			/*
				Este método muestra u oculta los detalles de la actividad
			*/

			var j;

			for (j = 1; j < actividades.length; j++){
				//console.log(actividades[j]);
				actividades[j].classList.remove("active");
			}

			this.classList.add('active');

			var flag = false, k, clase;

			j = 1;

			while (j < actividades.length){

				for (k = 0; k < actividades[j].classList.length; k++){
					clase = actividades[j].classList[k];
					if (clase == "active"){
						flag = true;
						break;
					}
				}

				if (flag){
					break;
				}

				j++;
			}

			var info = infoArray[j-1];

			var altura = info.style.height;

			if (altura == "" || altura == "0" || altura == '0px'){
				info.style.height = "auto";
				info.style.padding = "5px";
				info.style.marginTop = "5px";
			}else{
				info.style.height = "0";
				info.style.padding = "0";
				info.style.marginTop = "0";
			}

			
		}



		var checkAll = function(){

			//console.log("Click en el check");
			if (bl.checkMaster.firstChild.checked){
				//console.log("Esta chequeado");
				for (var count = 0; count < checksCol.length; count++){
					bl.checksCol[count].firstChild.checked = true;
				}
			}else{
				for (var count = 0; count < checksCol.length; count++){
					bl.checksCol[count].firstChild.checked = false;
				}
			}

		};



		var checkOne = function(){

			//console.log(this);
			if (!this.checked && checkMaster.firstChild.checked){
				bl.checkMaster.firstChild.checked = false;
			}else{
				var checks = checksCol.length,
					checkeds = 0;

				for (var i = 0; i < checks; i++){
					if (bl.checksCol[i].firstChild.checked){
						checkeds++;
					}
				}

				if (checkeds == checks){
					bl.checkMaster.firstChild.checked = true;
				}
			}
		};



		var crearTarea = function(){

			//Creamos dinámicamente el formulario para recibir la nueva tarea
			
			divFantasma.style.display = "block";
			var tareaBox = document.createElement("div");
			tareaBox.classList.add("tareaBox");
			divFantasma.appendChild(tareaBox);

			var formNuevaTarea = document.createElement("form");

			var nombreTarea = document.createElement("input");
			nombreTarea.setAttribute("id","Nombre");
			var idNombre = document.createElement("label");
			idNombre.setAttribute("for","Nombre");

			var inicioTarea = document.createElement("input");
			inicioTarea.setAttribute("id","inicio");
			var idInicio = document.createElement("label");
			idInicio.setAttribute("for","inicio");

			var finalTarea = document.createElement("input");
			finalTarea.setAttribute("id","final");
			var idFinal = document.createElement("label");
			idFinal.setAttribute("for","final");

			var descripcionTarea = document.createElement("textarea");
			descripcionTarea.setAttribute("id","descripcion");
			var idDescrip = document.createElement("label");
			idDescrip.setAttribute("for","descripcion");

			var texto;

			texto = document.createTextNode("Nombre");

			idNombre.appendChild(texto);
			formNuevaTarea.appendChild(idNombre);
			formNuevaTarea.appendChild(nombreTarea);

			texto = document.createTextNode("Inicio");
			idInicio.appendChild(texto);
			formNuevaTarea.appendChild(idInicio);
			formNuevaTarea.appendChild(inicioTarea);
			formNuevaTarea.appendChild(inicioTarea);
			formNuevaTarea.appendChild(inicioTarea);

			texto = document.createTextNode("Final");
			idFinal.appendChild(texto);
			formNuevaTarea.appendChild(idFinal);
			formNuevaTarea.appendChild(finalTarea);
			formNuevaTarea.appendChild(finalTarea);
			formNuevaTarea.appendChild(finalTarea);

			texto = document.createTextNode("Descripción");
			idDescrip.appendChild(texto);
			formNuevaTarea.appendChild(idDescrip);
			formNuevaTarea.appendChild(descripcionTarea);

			tareaBox.appendChild(formNuevaTarea);

			var button = document.createElement("button");
			
			var valor = document.createTextNode("Agregar Tarea");
			button.setAttribute("id","agregarTarea");
			button.appendChild(valor);
			formNuevaTarea.appendChild(button);
			bl.button = button;
			console.log(bl.button);

			bl.button.addEventListener("click",agregarTarea);


		};

		var agregarTarea = function(e){
			
			var nombre = document.getElementById("Nombre");
			var inicio = document.getElementById("inicio");
			var final = document.getElementById("final");
			var descripcion = document.getElementById("descripcion");
			var block = document.getElementById("block");

			var divNuevo = document.createElement("div");
			divNuevo.setAttribute("class", "rows");

			var checkboxNuevoDiv = document.createElement("div");
			checkboxNuevoDiv.setAttribute("class", "checkbox");

			var checkboxNuevo = document.createElement("input");
			checkboxNuevo.setAttribute("type", "checkbox");

			checkboxNuevoDiv.appendChild(checkboxNuevo);

			divNuevo.appendChild(checkboxNuevoDiv);

			var actividadNueva = document.createElement("div");
			actividadNueva.setAttribute("class", "actividad");

			var actividadNombre = document.createTextNode(nombre.value);
			actividadNueva.appendChild(actividadNombre);

			divNuevo.appendChild(actividadNueva);

			var inicioNuevo = document.createElement("div");
			inicioNuevo.setAttribute("class", "fecha");
			var inicioValor = document.createTextNode(inicio.value);
			inicioNuevo.appendChild(inicioValor);

			divNuevo.appendChild(inicioNuevo);

			var finalNuevo = document.createElement("div");
			finalNuevo.setAttribute("class", "fecha");
			var finalValor = document.createTextNode(final.value);
			finalNuevo.appendChild(finalValor);

			divNuevo.appendChild(finalNuevo);

			// console.log(actividadNueva);
			// console.log(actividadNueva.firstChild);

			bl.block.appendChild(divNuevo);
			divFantasma.style.display = "none";
			var tareaBox = divFantasma.getElementsByClassName("tareaBox")[0];
			divFantasma.removeChild(tareaBox);

			var divDetallesNuevo = document.createElement("div");
			divDetallesNuevo.setAttribute("class", "rows detalles");

			var divAvisosNuevo = document.createElement("div");
			divAvisosNuevo.setAttribute("class", "avisos");
			var iconAvisos = document.createElement("span");
			iconAvisos.setAttribute("class", "icon icon-megaphone");
			divAvisosNuevo.appendChild(iconAvisos);

			divDetallesNuevo.appendChild(divAvisosNuevo);

			var divInfoNuevo = document.createElement("div");
			divInfoNuevo.setAttribute("class", "info");
			var detallesNuevo = document.createTextNode(descripcion.value);
			divInfoNuevo.appendChild(detallesNuevo);
			divDetallesNuevo.appendChild(divInfoNuevo);

			var divEdicionesNuevo = document.createElement("div");
			divEdicionesNuevo.setAttribute("class", "ediciones");

			var iconEditNuevo = document.createElement("span");
			iconEditNuevo.setAttribute("class", "icon icon-edit");
			divEdicionesNuevo.appendChild(iconEditNuevo);

			var iconShareNuevo = document.createElement("span");
			iconShareNuevo.setAttribute("class", "icon icon-share");
			divEdicionesNuevo.appendChild(iconShareNuevo);

			divDetallesNuevo.appendChild(divEdicionesNuevo);


			bl.block.appendChild(divDetallesNuevo);

			infoArray = document.getElementsByClassName('detalles');


			for (var i = 1; i <= infoArray.length; i++){
				//console.log(bl.actividades[i]);

				bl.actividades[i].addEventListener("click", detalles);
			}


			alert("Tarea agregada exitosamente");

			e.preventDefault();

		}

		var cerrarTareaNueva = function(){
			divFantasma.style.display = "none";
			var tareaBox = divFantasma.getElementsByClassName("tareaBox")[0];
			divFantasma.removeChild(tareaBox);
		};

		/*>>>>>>>>>>>>>>>>>>>>>>>>>>> EVENTOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		bl.tareaNueva.addEventListener("click", crearTarea);

		for (var i = 1; i <= infoArray.length; i++){
			//console.log(bl.actividades[i]);

			bl.actividades[i].addEventListener("click", detalles);
		}

		for (var k = 0; k < checksCol.length; k++){
			//console.log(bl.checksCol[k].firstChild);
			bl.checksCol[k].firstChild.addEventListener("change", checkOne);
		}

		bl.cerraduraTareaNueva.addEventListener("click", cerrarTareaNueva);


		bl.checkMaster.addEventListener("change", checkAll);

		

		return bl;

	}

	var BlockTareas = new Block();

	//console.log(BlockTareas);
}());