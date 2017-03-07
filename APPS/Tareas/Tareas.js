(function(){

	/*                      DIAGRAMA DE VARIABLES Y FUNCIONES                    */
	/*_______________________________________________________________________________________________________________*/
	/*_______________________________________________________________________________________________________________*/
	/*_______________________________________________________________________________________________________________*/
	/*_______________________________________________________________________________________________________________|

	La variable 'blockTareas' es un objeto de tipo 'Block'.
		

		Descripcion de variables globales:
		
		> block
			Elemento: div
			id: block
			clases: block
			Padre: div.container
			Descripcion: Instanciar a la clase 'Block'

		> tareaNueva
			Elemento: span
			id: crearActividad
			clases: icon icon-squared-plus, icon icon-trash
			Padre: div.opciones
			Descripcion: Se usa para agregar una tarea o para eliminar una tarea

		> config
			Elemento: span
			id: config
			clases: icon icon-cog
			Padre: div.opciones
			DEscripcion: Despliega el panel de opciones

		> checksCol
			Elemento: div->array
			id: -
			clases: -
			Padre: -
			Descripcion: Contiene todos los divs que contienen elementos inputs de tipo 'checkbox'

		> checkMaster
			Elemento: div
			id: checkMaster
			clases: checkMaster
			Padre: div.secciones
			Descripcion: Contiene el input master

		> actividades
			Elemento: div->array
			id: -
			clases: -
			Padre: -
			Descripcion: Contiene todos los divs de clase actividad, es decir, todos los divs donde van las 
			actividades

		> rows
			Elemento: div->array
			id: -
			clases: -
			Padre: -
			Descripcion: Contiene cada fila que divide las tareas. Los rows de clase 'detalles' son los detalles del
			row anterior

		> infoArray
			Elemento: div->array
			id: -
			clases: detalles, rows
			Padre: -
			Descripcion: Contiene todos los divs de detalles que contienen la informacion de las tareas

		> cerraduraTareaNueva
			Elemento: div
			id: cerradura
			clases: cerradura
			Padre: div.divFantasma#divFantasma
			Descripcion: Contiene un elemento span que cierra el cuadro fantasma para agregar la nueva tarea
			
		> divFantasma
			Elemento: div
			id:	divFantasma
			clases: divFantasma
			Padre: html
			Descripcion: Div que contiene el cuadro para agregar las nuevas tareas

		


		Descripcion de metodos del objeto 'Block':
		
		> detalles
			Input: -
			Output: -
			Evento: Click en detalles
			Descripcion: Este metodo muestra u oculta los detalles de una actividad

		> checkAll
			Input: -
			Output: -
			Evento: Check en checkMaster
			Descripcion: Este metodo marca o desmarca todos los checks al mismo tiempo, ademas cambia el icono de 
			agregar tarea por el de eliminar tareas

		> checkOne
			Input: -
			Output: -
			Evento: Check algun checkbox
			Descripcion: Este método cambia el icono de agregar por el de basura

		> crearTarea
			Input: -
			Output: -
			Evento: Click en icono de agregar tareas
			Descripcion: Esta funcion agrega y quita las tareas ya que el mismo elemento cumple las dos funciones.
			Dependiendo de a clase que tenga elimina o agrega una tarea. Al agregar tareas, este formulario se crea
			dinamicamente

		> agregarTarea
			Input: -
			Output: -
			Evento: Click en el boton de agregar tarea del formulario creado por 'crearTarea'
			Descripcion: Esta funcion escribe los datos obtenidos mediante el formulario del divFantasma en el block 
			de tareas

		> eliminarTarea
			Input: Array con los índices de los checks que están marcados
			Output: -
			Evento: Click en el icono de basura
			Descripcion: Esta funcion elimina las tareas que esten seleccionadas

		> eliminarTodasTareas
			Input: -
			Output: -
			Evento: Click en el icono de basura cuando el checkMaster esta marcado
			Descripcion: Esta funcion elimina TODAS las tareas

	|________________________________________________________________________________________________________________*/




	/*>>>>>>>>>>>>>>>>>> GLOBALS <<<<<<<<<<<<<<<<<*/


	var block = document.getElementById('block'), /*block de actividades*/
		tareaNueva = document.getElementById('crearActividad'), /*Icono para crear una nueva tarea*/
		config = document.getElementById('config'), /*Configuraciones*/
		checksCol = block.getElementsByClassName('checkbox'), /*Columna de checkboxes*/
		checkMaster = document.getElementById('checkMaster'), /*Check que marca todos los checkbox*/
		actividades = document.getElementsByClassName('actividad'), /*Lista de actividades*/
		rows = document.getElementsByClassName('rows');/*Array de filas de cada actividad*/

		/*--------- IMPORTANTE --------*/
		/*Para las actividades trabajar con un contador que empiece en uno.
		El primer elemento es el titulo de la seccion de actividades "Actividad"*/

		infoArray = document.getElementsByClassName('detalles'),/*Array de infos*/
		cerraduraTareaNueva = document.getElementById('cerradura').firstChild,
		divFantasma = document.getElementById("divFantasma"); 



	/*Objeto block*/

	Block = function(){

		/*bl es simplemente un objeto*/

		bl = {};

		bl.block = block;
		bl.rows = rows;
		bl.tareaNueva = tareaNueva;
		bl.actividades = actividades;
		bl.infoArray = infoArray;
		bl.tareaNueva = tareaNueva;
		bl.checkMaster = checkMaster;
		bl.checksCol = checksCol;
		bl.cerraduraTareaNueva = cerraduraTareaNueva;
		bl.eliminarTarea = eliminarTarea;


		/*>>>>>>>>>>>>>>>>>>>>>>>>> FUNCIONES DE EVENTOS <<<<<<<<<<<<<<<<<<<<<<<*/
		var detalles = function(){

			var j;

			/* Eliminamos de todas las actividades la clase 'active' */

			for (j = 1; j < actividades.length; j++){
				actividades[j].classList.remove("active");
			}

			/* Agregamos la clase 'active' solamente a esta actividad */

			this.classList.add('active');

			/* Esta bandera simplemente noes indicara si hay alguna actividad con la clase 'active' */

			var flag = false, k, clase;

			j = 1;

			/*

			Contadores:
				j->actividades
				k->clases de la actividad actual

			*/

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

			/*Como hay una actividad mas (el div de informacion 'Actividad' tambien cuenta), entonces la informacion
			correspondiente es infoArray[j-1]*/

			var info = infoArray[j-1];

			/*Si esta oculta la actividad la mostramos, si no hacemos lo contrario*/

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

			
			if (bl.checkMaster.firstChild.checked){
				for (var count = 0; count < checksCol.length; count++){
					bl.checksCol[count].firstChild.checked = true;
				}

				bl.tareaNueva.classList.remove("icon-squared-plus");
				bl.tareaNueva.classList.add("icon-trash");

			}else{
				for (var count = 0; count < checksCol.length; count++){
					bl.checksCol[count].firstChild.checked = false;
				}

				bl.tareaNueva.classList.remove("icon-trash");
				bl.tareaNueva.classList.add("icon-squared-plus");
			}

		};



		var checkOne = function(){

			if (!this.checked && checkMaster.firstChild.checked){
				bl.checkMaster.firstChild.checked = false;
			}else{
				var checks = checksCol.length,
					checkeds = 0;

				for (var i = 0; i < checks; i++){
					if (bl.checksCol[i].firstChild.checked){
						checkeds++;
					}

					if (checkeds >= 1){
						bl.tareaNueva.classList.remove("icon-squared-plus");
						bl.tareaNueva.classList.add("icon-trash");
					}else if(checkeds == 0){
						bl.tareaNueva.classList.remove("icon-trash");
						bl.tareaNueva.classList.add("icon-squared-plus");	
					}
				}


				if (checkeds == checks){
					bl.checkMaster.firstChild.checked = true;
				}
			}
		};



		var crearTarea = function(){

			/*Crear y eliminar la tarea se manejan con el mismo boton, por eso estan dentro de la misma funcion
				Verificar la clase del boton nos dice si va a borrar o va a agregar una tarea*/


			if(this.classList[1]=="icon-squared-plus"){

				//Creamos dinamicamente el formulario para recibir la nueva tarea
				
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

				bl.button.addEventListener("click",agregarTarea);
			}else{

				/*Eliminamos la tarea*/

				var respuesta, nroAct = 0;

				if (bl.checkMaster.firstChild.checked){
					respuesta = confirm("Estas apunto de eliminar todas las tareas.\nHaga click en 'ok' para confirmar el proceso");
					if (respuesta){

						eliminarTodasTareas();
						this.classList.remove("icon-trash");
						this.classList.add("icon-squared-plus");
						bl.checkMaster.firstChild.checked = false;
						alert("Tareas borradas");

					}else{

						alert("Proceso cancelado");

					}
				}else{

					var tarea, totalActividades = 0, i;

					for (i = 0; i < infoArray.length; i++){
						if (bl.checksCol[i].firstChild.checked){
							totalActividades++;
							tarea = i;
						}
					}

					if (totalActividades==1){
						
						respuesta = confirm("Se eliminará una tarea. \nHaga click en 'ok' para confirmar");

						if (respuesta){

							eliminarTarea(tarea);

							alert("Tarea eliminada");
							this.classList.remove("icon-trash");
							this.classList.add("icon-squared-plus");

						}else{

							alert("Proceso cancelado");

						}
					}else{

						respuesta = confirm("Se eliminarán "+totalActividades+ " tareas.\nHaga click en 'ok' para confirmar");

						if (respuesta){

							i=0;
							while(i < bl.checksCol.length){

								if (bl.checksCol[i].firstChild.checked){
									eliminarTarea(i);
									i = 0;
									continue;
								}
								i++;
							}

							alert("Tarea eliminada");
							this.classList.remove("icon-trash");
							this.classList.add("icon-squared-plus");


						}else{

							alert("Proceso cancelado");

						}

					}
				}
				
			}



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

			bl.infoArray = document.getElementsByClassName('detalles');
			bl.checksCol = block.getElementsByClassName('checkbox');



			for (var i = 0; i < checksCol.length; i++){

				bl.checksCol[i].firstChild.addEventListener("change", checkOne);
				bl.actividades[i+1].addEventListener("click", detalles);
			}

			    




			alert("Tarea agregada exitosamente");
			

			e.preventDefault();

		}

		var eliminarTarea = function(tarea){

			var tareaRow, detallesRow, arrayRows = bl.block.getElementsByClassName("rows"),i;
			
			tareaRow = arrayRows[tarea*2];
			bl.block.removeChild(tareaRow);

			detallesRow = arrayRows[tarea*2];
			bl.block.removeChild(detallesRow);


		};

		var eliminarTodasTareas = function(){
			var tareaRow, arrayRows = bl.block.getElementsByClassName("rows"),i;

			while(arrayRows.length > 0){
				tareaRow = arrayRows[0];
				bl.block.removeChild(tareaRow);
			}

		};

		var cerrarTareaNueva = function(){
			divFantasma.style.display = "none";
			var tareaBox = divFantasma.getElementsByClassName("tareaBox")[0];
			divFantasma.removeChild(tareaBox);
		};

		var editar = function(){
			//Creamos dinamicamente el formulario para editar la tarea

			this.classList.add("editar");
				
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
			
			var valor = document.createTextNode("Guardar cambios");
			button.setAttribute("id","editarTarea");
			button.appendChild(valor);
			formNuevaTarea.appendChild(button);
			bl.button = button;

			bl.button.addEventListener("click",agregarTareaEditada);
		};

		var agregarTareaEditada = function(){

			var i, j;

			for (i = 0; i < rows.length; i++){

				for (j = 0; j < rows[i].classList.length; j++){

					if (rows[i].classList[j] == "editar"){
						flag = 1;
						break;
					}
				}

				if (flag == 1){
					break;
				}
			}

			console.log(rows[i]);

		};

		/*>>>>>>>>>>>>>>>>>>>>>>>>>>> EVENTOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		bl.tareaNueva.addEventListener("click", crearTarea);

		for (var i = 1; i <= infoArray.length; i++){

			bl.actividades[i].addEventListener("click", detalles);
		}

		for (var k = 0; k < checksCol.length; k++){
			bl.checksCol[k].firstChild.addEventListener("change", checkOne);
		}

		bl.cerraduraTareaNueva.addEventListener("click", cerrarTareaNueva);


		bl.checkMaster.addEventListener("change", checkAll);


		for (var i = 0; i < infoArray.length; i++){

			bl.infoArray[i].getElementsByClassName("ediciones")[0].getElementsByClassName("icon-edit")[0].addEventListener("click", editar);
		}
		

		return bl;

	}

	var BlockTareas = new Block();

}());