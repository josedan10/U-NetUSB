$(document).ready(function(){

	var SlideInterval;

	var SlideShow = function(){

		var SS = {};

		SS.SlideBox = $('#SlideShow');////////////// Div#SlideShow
		SS.Slides = $('.slide');//////////////////// Array de divs .slide
		SS.Controls = $('#controles span');///////// Array de spans
		SS.Markers = $('#marcadores span');///////// Array de spans

		SS.init = function(){

			SlideInit();

			/*------------------------- Eventos manuales ------------------------*/

			$('#controles span:first-child').click(function(){

				clearInterval(SlideInterval);

				var index;

				for (index = 0; index < SS.Slides.length; index++){

					if(SS.Slides[index].classList[1] == 'activeSlide')break;

				}

				var actualSlide, nextSlide,
				actualMarker, nextMarker;

				if(index == 0){

					actualSlide = SS.Slides[index];
					actualMarker = SS.Markers[index];

					nextSlide = SS.Slides[SS.Slides.length-1];
					nextMarker = SS.Markers[SS.Markers.length-1];

				}else{

					actualSlide = SS.Slides[index];
					actualMarker = SS.Markers[index];

					nextSlide = SS.Slides[index-1];
					nextMarker = SS.Markers[index-1];
				}

				actualSlide.classList.remove('activeSlide');
				nextSlide.classList.add('activeSlide');

				actualMarker.classList.remove('activeMark');
				nextMarker.classList.add('activeMark');

				SlideInit();

			});


			$('#controles span:last-child').click(function(){

				clearInterval(SlideInterval);

				var index;

				for (index = 0; index < SS.Slides.length; index++){

					if(SS.Slides[index].classList[1] == 'activeSlide')break;

				}

				var actualSlide, nextSlide,
				actualMarker, nextMarker;

				if(index == SS.Slides.length-1){

					actualSlide = SS.Slides[index];
					actualMarker = SS.Markers[index];

					nextSlide = SS.Slides[0];
					nextMarker = SS.Markers[0];

				}else{

					actualSlide = SS.Slides[index];
					actualMarker = SS.Markers[index];

					nextSlide = SS.Slides[index+1];
					nextMarker = SS.Markers[index+1];
				}

				actualSlide.classList.remove('activeSlide');
				nextSlide.classList.add('activeSlide');

				actualMarker.classList.remove('activeMark');
				nextMarker.classList.add('activeMark');

				SlideInit();

			});

			for (var i = 0; i < SS.Markers.length; i++){

				SS.Markers[i].addEventListener('click',function(e){

					var index, actualSlide;

					clearInterval(SlideInterval);

					for (var j = 0; j < SS.Markers.length; j++){

						SS.Markers[j].classList.remove('activeMark');

					}

					this.classList.add('activeMark');

					SS.Markers = $('#marcadores span');

					for (index = 0; index < SS.Slides.length; index++){

						if(SS.Slides[index].classList[1] == 'activeSlide'){

							SS.Slides[index].classList.remove('activeSlide');
							break;

						}

					}

					for (index = 0; index < SS.Markers.length; index++){

						if(SS.Markers[index].classList[0] == 'activeMark')break;
						
					}

					actualSlide = SS.Slides[index];
					actualSlide.classList.add('activeSlide');

					SlideInit();

				});

			}

		};


		SS.Slide = function(){

			var index;

			for (index = 0; index < SS.Slides.length; index++){

				if(SS.Slides[index].classList[1] == 'activeSlide')break;

			}

			var actualSlide, nextSlide,
				actualMarker, nextMarker;

			if(index == (SS.Slides.length)-1){

				actualSlide = SS.Slides[index];
				actualMarker = SS.Markers[index];

				nextSlide = SS.Slides[0];
				nextMarker = SS.Markers[0];

			}else{

				actualSlide = SS.Slides[index];
				actualMarker = SS.Markers[index];

				nextSlide = SS.Slides[index+1];
				nextMarker = SS.Markers[index+1];
			}

			actualSlide.classList.remove('activeSlide');
			nextSlide.classList.add('activeSlide');

			actualMarker.classList.remove('activeMark');
			nextMarker.classList.add('activeMark');

		};



		var SlideInit = function(position){

			SlideInterval = setInterval(SS.Slide, 6000);

		};


		return SS;
	};


	var MySlideShow = new SlideShow();
	MySlideShow.init();

});