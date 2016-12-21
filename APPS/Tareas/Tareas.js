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

		infoArray = document.getElementsByClassName('detalles'); /*Array de infos*/

	//console.log(infoArray);



	/*Objeto block*/

	Block = function(){

		/*bl es simplemente un objeto*/

		bl = {};

		bl.block = block;
		bl.tareaNueva = tareaNueva;
		bl.actividades = actividades;
		bl.infoArray = infoArray;
		bl.tareaNueva = tareaNueva;


		/*>>>>>>>>>>>>>>>>>>>>>>>>>>>> MÉTODOS <<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		var crearTarea = function(){
			//Creamos tarea
		}


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



		/*>>>>>>>>>>>>>>>>>>>>>>>>>>> EVENTOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


		bl.tareaNueva.addEventListener("click", crearTarea);

		for (var i = 1; i <= infoArray.length; i++){
			//console.log(bl.actividades[i]);

			bl.actividades[i].addEventListener("click", detalles);
		}



		

		return bl;

	}

	var BlockTareas = new Block();

	//console.log(BlockTareas);
}());