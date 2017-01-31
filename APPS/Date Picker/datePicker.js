(function(){

	var dateInput = document.getElementById("dateInput"),
		calendario = document.getElementById("calendario");

	var Calendar = function(){
		cd = {};

		cd.input = dateInput;
		cd.calendario = calendario;
		cd.appear = function(){
			cd.calendario.style.display = "block";
			alert("Muestro Calendario");
		}

		//console.log(cd.calendario);

		cd.input.addEventListener("click", cd.appear);
		return cd;

	}


	var DatePicker = new Calendar();

}());