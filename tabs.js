'use strict' 

var tabs = function (data) { 

		
		
	
		/*$h.d('.tabs', 'click', '.c-tabs-nav__link', function(e) {
		
			e.preventDefault();
			var content = e.target.closest('.c-tab__content');

			

document.querySelector('.c-tabs-nav__link').classList.remove('is-active');
				
				//$('.c-tabs-nav__link').removeClass('is-active');
				this.classList.add('is-active');
				
			
			
			
	});*/
		$h.d('.tabs', 'click', '.c-tabs-nav__link', function (e) { 

			
			var open = document.querySelectorAll('.c-tabs-nav__link'); 
			//var cont = document.querySelectorAll('.c-tab');
			var cont = document.getElementsByClassName("c-tab");

			for (var i = 0; i < open.length; i++ ) { 

				open[i].classList.remove('is-active');
				cont[i].classList.remove('is-active');  
			} 
			

			 
			this.classList.add('is-active');

			if (open[0].classList.contains('is-active') === true) {

				cont[0].classList.add('is-active');
			}
			else if (open[1].classList.contains('is-active') === true) {

				cont[1].classList.add('is-active');
			}
			else if (open[2].classList.contains('is-active') === true) {

				cont[2].classList.add('is-active');
			}
			else if (open[3].classList.contains('is-active') === true) {

				cont[3].classList.add('is-active');
			}
			else if (open[4].classList.contains('is-active') === true) {

				cont[4].classList.add('is-active');
			}
			//cont[2].classList.add('is-active');


			

			
			
			
		})
		


/*$h.d('.tabs-module', 'click', '.tab', function (e) { 

var open = document.querySelectorAll('.tab:not(.tabs-close)'); 


for (var i = 0; i < open.length; i++ ) { 

open[i].classList.add('tabs-close'); 
} 

var openElem = this.closest('.tab'); 
openElem.classList.remove('tabs-close'); 
})*/
	

	

} 

tabs.prototype = Object.create(App.prototype); 
tabs.prototype.constructor = tabs;

